import { getCollection } from "astro:content";
import { generateOG } from "@/lib/generate-og";
import { formatDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
  props: { title: string; subtitle: string };
}

export const GET = ({ props: { title, subtitle } }: Props) => {
  return generateOG({ title, subtitle });
};

export async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((entry) => ({
    params: { slug: entry.slug },
    props: {
      title: entry.data.title,
      subtitle: `${formatDate(entry.data.date)} • ${entry.data.read}`,
    },
  }));
}
