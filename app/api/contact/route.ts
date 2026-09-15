import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20),
  projectType: z.enum([
    "Residential",
    "Commercial",
    "Industrial",
    "Institutional",
    "Interiors",
    "Other",
  ]),
  location: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message is too short").max(2000),
  // honeypot field — real users never fill this
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.company) {
    // honeypot tripped — silently accept without processing
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, projectType, location, message } = parsed.data;

  // TODO: wire to real delivery (Resend / SMTP / CRM). Logged for now.
  console.log("New enquiry received:", { name, email, phone, projectType, location, message });

  return NextResponse.json({ ok: true });
}
