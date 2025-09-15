addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === 'POST' && request.url.endsWith('/api/generate-resume')) {
    const template = '<h2>Your Beautiful Resume</h2>';
    return new Response(JSON.stringify({ template }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return new Response('Not Found', { status: 404 });
}