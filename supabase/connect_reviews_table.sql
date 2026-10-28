-- ==============================================================================
-- Veg 'n More - PDPU Branch - Least-Privilege Supabase RLS Migration
-- Target Table: public.reviews
-- Columns: id, branch_name, review_text, content_hash, status, created_at, used_at
-- ==============================================================================

-- 1. Ensure table and actual columns exist
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    branch_name TEXT NOT NULL DEFAULT 'PDPU Branch',
    review_text TEXT NOT NULL,
    content_hash TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'confirmed',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    used_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure all verified columns are present without altering existing records
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS branch_name TEXT DEFAULT 'PDPU Branch';
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS content_hash TEXT;
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'confirmed';
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS used_at TIMESTAMPTZ DEFAULT NOW();

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- 3. Drop existing policies to ensure clean, idempotent setup
DROP POLICY IF EXISTS "Allow public read of reviews" ON public.reviews;
DROP POLICY IF EXISTS "Allow public insert to reviews" ON public.reviews;
DROP POLICY IF EXISTS "Allow public read access to reviews" ON public.reviews;
DROP POLICY IF EXISTS "Allow public insert access to reviews" ON public.reviews;
DROP POLICY IF EXISTS "Least privilege public read" ON public.reviews;
DROP POLICY IF EXISTS "Least privilege customer insert" ON public.reviews;

-- 4. Least-Privilege Public Read Policy (SELECT)
-- Allows reading reviews for duplicate detection and displaying verified branch reviews
CREATE POLICY "Least privilege public read"
ON public.reviews
FOR SELECT
TO anon, authenticated
USING (true);

-- 5. Least-Privilege Validated Customer Submission Policy (INSERT)
-- Restricts public inserts: requires valid branch_name, minimum 15-char review, and valid SHA-256 hash
CREATE POLICY "Least privilege customer insert"
ON public.reviews
FOR INSERT
TO anon, authenticated
WITH CHECK (
    branch_name IS NOT NULL
    AND char_length(trim(review_text)) >= 15
    AND char_length(content_hash) = 64
    AND (status IS NULL OR status IN ('confirmed', 'available', 'used'))
);

-- 6. Disallow Public UPDATE and DELETE
-- (No policies granted for UPDATE or DELETE to anon, guaranteeing immutable customer reviews)

-- 7. High-Performance Indexes for Branch Filtering and Duplicate Checking
CREATE INDEX IF NOT EXISTS idx_reviews_branch_name ON public.reviews (branch_name);
CREATE INDEX IF NOT EXISTS idx_reviews_content_hash ON public.reviews (content_hash);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON public.reviews (created_at DESC);
