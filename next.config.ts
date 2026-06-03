import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark" }],
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      new URL('https://flagcdn.com/**'),
      new URL('http://flagcdn.com/**'),
      new URL('https://mainfacts.com/media/images/coats_of_arms/**'),
      new URL('http://mainfacts.com/media/images/coats_of_arms/**'),
    ],
  }
};

export default withNextIntl(withMDX(nextConfig));
