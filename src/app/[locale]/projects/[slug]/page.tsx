import { getProjectBySlug, getAllProjects } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <article>
      <h1>{project.title}</h1>
      <MDXRemote source={project.content} />
    </article>
  );
}
