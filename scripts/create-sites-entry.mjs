import { mkdir, writeFile } from 'node:fs/promises'

await mkdir('dist/server', { recursive: true })
await writeFile(
  'dist/server/index.js',
  `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)

    if (response.status !== 404 || request.method !== 'GET') {
      return response
    }

    const indexUrl = new URL('/index.html', request.url)
    return env.ASSETS.fetch(new Request(indexUrl, request))
  }
}\n`,
)
