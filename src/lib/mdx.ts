import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  readingTime: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  content: string;
}

function getFiles(dir: string): string[] {
  const full = path.join(CONTENT_ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith(".mdx"));
}

function parseFile(dir: string, filename: string): Post {
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(CONTENT_ROOT, dir, filename), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description,
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
    content,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  return getFiles("blog")
    .map((f) => parseFile("blog", f))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(CONTENT_ROOT, "blog", file))) return null;
  return parseFile("blog", file);
}

export async function getAllProjects(): Promise<PostMeta[]> {
  return getFiles("projects")
    .map((f) => parseFile("projects", f))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectBySlug(slug: string): Promise<Post | null> {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(CONTENT_ROOT, "projects", file))) return null;
  return parseFile("projects", file);
}
