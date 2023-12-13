import { getCollection } from "astro:content";
import { generateOG } from "@/lib/generate-og";

interface Props {
  params: { slug: string };
  props: { title: string; subtitle: string };
}

export const GET = ({ props: { title, subtitle } }: Props) => {
  return generateOG({ title, subtitle });
};

export async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((entry) => ({
    params: { slug: entry.slug },
    props: {
      title: entry.data.title,
      subtitle: `Built with - ${entry.data.tags
        .toSpliced(entry.data.tags.length - 1, 1)
        .join(", ")} and ${entry.data.tags[entry.data.tags.length - 1]}`,
    },
  }));
}
