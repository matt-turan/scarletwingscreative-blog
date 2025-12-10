type PageType = "devblog";

interface Metadata {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
    openGraph: {
        title: string;
        description: string;
        url: string;
        type: string;
        images: { url: string; width: number; height: number; alt: string }[];
    };
    twitter: {
        card: string;
        title: string;
        description: string;
        image: string;
    };
    structuredData: object;
}

const BASE_URL = "https://devblog.scarletwingscreative.com";

export function generateMetadata(page: PageType): Metadata {
    const data = {
        devblog: {
            title: "DevBlog | Web Development Commands & Tips",
            description:
            "A developer-focused blog covering essential command-line tutorials, Git workflows, npm and NVM usage, and practical coding tips. A growing archive of everyday developer commands, troubleshooting steps, and workflow optimizations for beginners and working developers.",
            keywords: [
            "developer blog",
            "CLI commands",
            "command line tutorials",
            "Git commands",
            "npm commands",
            "NVM guide",
            "web development tips",
            "terminal basics",
            "JavaScript tooling",
            "development workflow",
            ],
            image: `${BASE_URL}/og-devblog.jpg`,
            path: "/",
        },
    };

    const pageData = data[page];
    const canonicalUrl = `${BASE_URL}${pageData.path}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Mehmet Turan",
        url: canonicalUrl,
        sameAs: [
            "https://www.linkedin.com/in/mehmet-turan-30218532/",
            "https://github.com/matt-turan/"
        ],
        jobTitle: "Web Developer / Full-Stack Developer",
        worksFor: {
            "@type": "Organization",
            name: "Scarlet Wings Creative",
            url: BASE_URL,
        },
    };

    return {
        title: pageData.title,
        description: pageData.description,
        keywords: pageData.keywords,
        canonical: canonicalUrl,
        openGraph: {
            title: pageData.title,
            description: pageData.description,
            url: canonicalUrl,
            type: "website",
            images: [
                {
                    url: pageData.image,
                    width: 1200,
                    height: 630,
                    alt: pageData.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: pageData.title,
            description: pageData.description,
            image: pageData.image,
        },
        structuredData,
    };
}
