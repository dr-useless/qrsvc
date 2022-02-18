const qr = require("qr-image")

addEventListener("fetch", event => {
	event.respondWith(handle(event.request));
})

async function handle(request) {
  url = new URL(request.url)
  const img = qr.imageSync(url.pathname)
  return new Response(img, {
    headers: {
      "Content-Type": "image/png"
    }
  })
}