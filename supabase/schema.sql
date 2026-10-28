-- ==============================================================================
-- Veg 'n More Google Review Generator - Supabase Database Schema
-- Multi-branch persistent history & duplicate protection database setup
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Businesses Table
CREATE TABLE IF NOT EXISTS public.businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    logo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Branches Table
CREATE TABLE IF NOT EXISTS public.branches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
    slug TEXT NOT NULL,
    name TEXT NOT NULL,
    google_review_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_business_branch_slug UNIQUE (business_id, slug)
);

-- 4. Create Reviews Table
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
    branch_id UUID NOT NULL REFERENCES public.branches(id) ON DELETE CASCADE,
    review_text TEXT NOT NULL,
    review_hash TEXT NOT NULL,
    experience_tags TEXT[] DEFAULT '{}',
    rating_context TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Create Performance Indexes for Fast Duplicate Checking & Queries
CREATE INDEX IF NOT EXISTS idx_reviews_business_branch ON public.reviews (business_id, branch_id);
CREATE INDEX IF NOT EXISTS idx_reviews_hash ON public.reviews (review_hash);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON public.reviews (created_at DESC);

-- 6. Seed Initial Data for Veg 'n More - Nikol Branch
INSERT INTO public.businesses (slug, name, logo_url)
VALUES ('veg-n-more', 'Veg ’’n More', '/vegnmore-logo.jpg')
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name;

INSERT INTO public.branches (business_id, slug, name, google_review_url)
SELECT 
    b.id,
    'nikol',
    'Nikol Branch',
    'https://g.page/r/CYs4P3UetcMxEBI/review'
FROM public.businesses b
WHERE b.slug = 'veg-n-more'
ON CONFLICT (business_id, slug) DO UPDATE SET name = EXCLUDED.name;

-- 7. Enable Row Level Security (RLS)
ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.branches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- 8. RLS Policies
-- Allow Anonymous & Public Read Access to Businesses & Branches
CREATE POLICY "Allow public read access to businesses" 
    ON public.businesses FOR SELECT USING (true);

CREATE POLICY "Allow public read access to branches" 
    ON public.branches FOR SELECT USING (true);

-- Allow Anonymous & Public Read and Insert Access to Reviews
CREATE POLICY "Allow public read access to reviews" 
    ON public.reviews FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to reviews" 
    ON public.reviews FOR INSERT WITH CHECK (true);
