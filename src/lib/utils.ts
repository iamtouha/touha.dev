import { clsx, type ClassValue } from "clsx";
import { LuciaError } from "lucia";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
