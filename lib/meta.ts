import type { Metadata } from "next";

export const siteConfig = {
  name: "NerveStack Solutions",
  shortName: "NerveStack",
  url: "https://nervestacksolutions.com",
  email: "info@nervestacksolutions.com",
  description:
    "NerveStack Solutions is a software house engineering high-performance web apps, mobile apps, n8n automation pipelines, and AI integrations for growing businesses.",
  locale: "en_US",
  twitterHandle: "@nervestack",
};

export function createMetadata({
  title,
  description,
  keywords,
  path = "/",
}: {
  title: string;
  description?: string;
  keywords?: string[];
  path?: string;
}): Metadata {
  const resolvedDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description: resolvedDescription,
    keywords: keywords?.join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resolvedDescription,
      creator: siteConfig.twitterHandle,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
