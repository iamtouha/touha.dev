import { ImageResponse } from "@vercel/og";
import { OG } from "@/components/OG";
import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  try {
    return new ImageResponse(OG({ title: "Hello World! 👋" }));
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};
