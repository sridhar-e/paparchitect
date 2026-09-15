import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** "+91-44-24470044" -> "tel:+914424470044" — dialable, spacing dropped. */
export function telHref(number: string) {
  return `tel:${number.replace(/[^\d+]/g, "")}`
}
