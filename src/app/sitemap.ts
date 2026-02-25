import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gccmadera.com";

  const pages = [
    "",
    "/about",
    "/visit",
    "/sermons",
    "/events",
    "/ministries",
    "/ministries/youth",
    "/ministries/women",
    "/ministries/men",
    "/ministries/kids",
    "/ministries/awana",
    "/give",
    "/contact",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
