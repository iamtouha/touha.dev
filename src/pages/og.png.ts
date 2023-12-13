import { generateOG } from "@/lib/generate-og";
import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return generateOG({
    title: "Touha Zohair",
    subtitle: "Full Stack Developer and Open Source Enthusiast",
  });
};
