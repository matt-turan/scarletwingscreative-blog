// components/SEO.tsx
// Note: In Next.js App Router, most SEO tags are handled in the layout or page files using the metadata API.
import React from 'react';
import { generateMetadata } from "@/assets/data/metadata";

interface SEOProps {
    page: "devblog";
}

export function SEO({ page }: SEOProps) {
    const meta = generateMetadata(page);

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(meta.structuredData) }}
        />
    );
}