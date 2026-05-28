import { getTranslations } from "next-intl/server";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function BlogPage() {
  const t = await getTranslations("blog");
  const posts = await getAllPosts();
  return (
    <div className="page-wrapper">
      <section className="section">
        <h1 className="section-title">{t("title")}</h1>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <span style={{ marginLeft: "var(--space-sm)", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--g400)" }}>
                {post.readingTime}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
