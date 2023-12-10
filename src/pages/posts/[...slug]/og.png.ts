import { OG } from "@/components/OG";
import { getCollection } from "astro:content";
import { ImageResponse } from "@vercel/og";

interface Props {
  params: { slug: string };
  props: { title: string };
}

export const GET = ({ props: { title } }: Props) => {
  try {
    return new ImageResponse(OG({ title }));
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};

export async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((entry) => ({
    params: { slug: entry.slug },
    props: { title: entry.data.title },
  }));
}
