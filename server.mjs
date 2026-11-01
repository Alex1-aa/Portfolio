import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 3000);
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = createServer(async (request, response) => {
  const requestPath = decodeURIComponent((request.url || '/').split('?')[0]);
  const safePath = normalize(requestPath).replace(/^([.][.][/\\])+/, '');
  const requestedFile = safePath === '/' ? 'index.html' : safePath.replace(/^[/\\]+/, '');
  const filePath = requestedFile === 'manus-routes.json'
    ? join(root, 'public', 'manus-routes.json')
    : join(root, requestedFile);

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(filePath)] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    response.end(content);
  } catch {
    if (requestPath !== '/') {
      try {
        const content = await readFile(join(root, 'index.html'));
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
        response.end(content);
        return;
      } catch {}
    }
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio server listening on 0.0.0.0:${port}`);
});
