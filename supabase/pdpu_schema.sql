-- ==============================================================================
-- Veg 'n More PDPU Road Branch - Review Suggestions Database Schema
-- Supabase PostgreSQL migration for review suggestion pool and deduplication
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Review Suggestions Table
CREATE TABLE IF NOT EXISTS public.review_suggestions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    branch_name TEXT NOT NULL DEFAULT 'PDPU Branch',
    review_text TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'reserved', 'used')),
    content_hash TEXT NOT NULL UNIQUE,
    opening_sentence TEXT,
    candidate_topics TEXT[] DEFAULT '{}',
    keywords_used TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    used_at TIMESTAMPTZ
);

-- 3. Create Performance Indexes for Fast Lookup & Deduplication
CREATE INDEX IF NOT EXISTS idx_suggestions_branch_status ON public.review_suggestions (branch_name, status);
CREATE INDEX IF NOT EXISTS idx_suggestions_hash ON public.review_suggestions (content_hash);
CREATE INDEX IF NOT EXISTS idx_suggestions_created ON public.review_suggestions (created_at DESC);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.review_suggestions ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies
-- Allow Anonymous & Public Read Access to available suggestions
DROP POLICY IF EXISTS "Allow public read available suggestions" ON public.review_suggestions;
CREATE POLICY "Allow public read available suggestions" 
    ON public.review_suggestions FOR SELECT 
    USING (status = 'available' OR status = 'reserved');

-- Allow Anonymous & Public Insert of generated suggestions (checked via application logic)
DROP POLICY IF EXISTS "Allow public insert suggestions" ON public.review_suggestions;
CREATE POLICY "Allow public insert suggestions" 
    ON public.review_suggestions FOR INSERT 
    WITH CHECK (true);

-- Allow status updates (e.g. marking suggestion as used or reserved)
DROP POLICY IF EXISTS "Allow update suggestion status" ON public.review_suggestions;
CREATE POLICY "Allow update suggestion status" 
    ON public.review_suggestions FOR UPDATE 
    USING (true)
    WITH CHECK (true);

-- 6. Atomic Stored Procedure to Reserve a Suggestion from the Pool
CREATE OR REPLACE FUNCTION public.get_and_reserve_suggestion(target_branch TEXT DEFAULT 'PDPU Branch')
RETURNS TABLE (
    id UUID,
    branch_name TEXT,
    review_text TEXT,
    status TEXT,
    content_hash TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    found_id UUID;
BEGIN
    -- Select one available suggestion with row locking (skip locked to prevent concurrency conflicts)
    SELECT s.id INTO found_id
    FROM public.review_suggestions s
    WHERE s.branch_name = target_branch AND s.status = 'available'
    ORDER BY s.created_at ASC
    LIMIT 1
    FOR UPDATE SKIP LOCKED;

    IF found_id IS NOT NULL THEN
        UPDATE public.review_suggestions
        SET status = 'used', used_at = NOW()
        WHERE public.review_suggestions.id = found_id;

        RETURN QUERY
        SELECT s.id, s.branch_name, s.review_text, s.status, s.content_hash
        FROM public.review_suggestions s
        WHERE s.id = found_id;
    END IF;
END;
$$;
