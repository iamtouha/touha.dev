import { OG } from "@/components/OG";

import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  try {
    return new ImageResponse(OG({ title: "Hello World! 👋" }));
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};
