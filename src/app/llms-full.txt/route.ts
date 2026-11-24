import { buildLlmsFullTxt } from "@/lib/ai-knowledge";

// Every answer on the site as one plain-text file, for AI assistants.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
