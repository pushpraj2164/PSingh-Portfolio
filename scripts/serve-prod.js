const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4200;
const DIST_DIR = path.join(__dirname, '..', 'dist', 'angular-portfolio', 'browser');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.map': 'application/json'
};

if (!fs.existsSync(DIST_DIR)) {
  console.error(`[ERROR] Build directory not found: ${DIST_DIR}`);
  console.error('Please run "npm run build" before serving.');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  // Normalize URL and remove query strings
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';

  let filePath = path.join(DIST_DIR, reqPath);

  // Security check: prevent directory traversal
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  // SPA fallback: If file doesn't exist, route to index.html
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const acceptEncoding = req.headers['accept-encoding'] || '';

  const brPath = `${filePath}.br`;
  const gzPath = `${filePath}.gz`;

  let servePath = filePath;
  let contentEncoding = null;

  // Prefer Brotli if supported and available, fallback to Gzip
  if (/\bbr\b/.test(acceptEncoding) && fs.existsSync(brPath)) {
    servePath = brPath;
    contentEncoding = 'br';
  } else if (/\bgzip\b/.test(acceptEncoding) && fs.existsSync(gzPath)) {
    servePath = gzPath;
    contentEncoding = 'gzip';
  }

  const headers = {
    'Content-Type': contentType,
    'X-Content-Type-Options': 'nosniff',
    'Access-Control-Allow-Origin': '*'
  };

  if (contentEncoding) {
    headers['Content-Encoding'] = contentEncoding;
    headers['Vary'] = 'Accept-Encoding';
  }

  // Cache policy: Hashed static assets cached 1 year; index.html no-cache
  if (reqPath === '/index.html') {
    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
  } else {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  }

  const stat = fs.statSync(servePath);
  headers['Content-Length'] = stat.size;

  res.writeHead(200, headers);
  fs.createReadStream(servePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`\n============================================================`);
  console.log(`  Portfolio Production Server (Gzip & Brotli Enabled)       `);
  console.log(`============================================================`);
  console.log(`  Local URL:   http://localhost:${PORT}`);
  console.log(`  Root Dir:    ${DIST_DIR}`);
  console.log(`  Encoding:    Brotli (.br) & Gzip (.gz) automatically served`);
  console.log(`============================================================\n`);
});

