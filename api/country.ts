// The visitor's country, for the pricing section (src/utils/storePrices.ts).
// Vercel works it out from the IP address at its own edge and passes it in
// this header; the address never goes to anyone else.
export function GET(request: Request) {
  const country = request.headers.get('x-vercel-ip-country') ?? ''
  return new Response(JSON.stringify({ country }), {
    headers: {
      'content-type': 'application/json',
      // Per visitor: never cached by a shared cache.
      'cache-control': 'private, no-store',
    },
  })
}
