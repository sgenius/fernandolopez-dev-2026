import { getTranslations } from "next-intl/server";
import { getAllProjects } from "@/lib/mdx";
import Link from "next/link";

export default async function ProjectsPage() {
  const t = await getTranslations("projects");
  const projects = await getAllProjects();
  return (
    <div className="page-wrapper">
      <section className="section">
        <h1 className="section-title">{t("title")}</h1>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
