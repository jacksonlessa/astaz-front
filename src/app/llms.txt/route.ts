import { buildLlmsTxt } from "@/lib/llms";

/**
 * `force-static` prerenderiza no build: o arquivo sai pronto, com o mesmo
 * custo de um estático em `public/`, e sem nenhuma execução por requisição.
 * O que se ganha em relação ao arquivo estático é a geração — ver `lib/llms.ts`.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
