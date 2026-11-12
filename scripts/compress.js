const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Target directory for Angular 19 application builder output
const DEFAULT_DIST = path.join(__dirname, '..', 'dist', 'angular-portfolio', 'browser');
const distDir = process.env.DIST_DIR || DEFAULT_DIST;

// Extensions eligible for compression
const COMPRESSIBLE_EXTS = new Set([
  '.html',
  '.js',
  '.css',
  '.svg',
  '.json',
  '.xml',
  '.txt',
  '.map'
]);

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (entry.isFile()) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!COMPRESSIBLE_EXTS.has(ext)) return null;

  const originalBuffer = fs.readFileSync(filePath);
  const originalSize = originalBuffer.length;

  if (originalSize === 0) return null;

  // 1. Gzip compression (level 9 = maximum compression)
  const gzipBuffer = zlib.gzipSync(originalBuffer, {
    level: 9
  });
  const gzPath = `${filePath}.gz`;
  fs.writeFileSync(gzPath, gzipBuffer);
  const gzipSize = gzipBuffer.length;

  // 2. Brotli compression (quality 11 = maximum compression)
  const brotliBuffer = zlib.brotliCompressSync(originalBuffer, {
    params: {
      [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_GENERIC,
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11
    }
  });
  const brPath = `${filePath}.br`;
  fs.writeFileSync(brPath, brotliBuffer);
  const brotliSize = brotliBuffer.length;

  return {
    file: path.relative(distDir, filePath),
    originalSize,
    gzipSize,
    gzipSavings: (((originalSize - gzipSize) / originalSize) * 100).toFixed(1),
    brotliSize,
    brotliSavings: (((originalSize - brotliSize) / originalSize) * 100).toFixed(1)
  };
}

function main() {
  console.log('\n============================================================');
  console.log('  Generating Gzip (.gz) and Brotli (.br) Compressed Assets  ');
  console.log('============================================================\n');

  if (!fs.existsSync(distDir)) {
    console.warn(`[WARN] Dist directory does not exist: ${distDir}`);
    console.warn('Run "npm run build" first.\n');
    return;
  }

  const allFiles = getAllFiles(distDir);
  const results = [];

  for (const file of allFiles) {
    // Skip already compressed files
    if (file.endsWith('.gz') || file.endsWith('.br')) continue;
    const res = compressFile(file);
    if (res) results.push(res);
  }

  if (results.length === 0) {
    console.log('No compressible files found in output directory.');
    return;
  }

  let totalOriginal = 0;
  let totalGzip = 0;
  let totalBrotli = 0;

  console.log(
    'File'.padEnd(35) +
    'Original'.padStart(12) +
    'Gzip (.gz)'.padStart(14) +
    'Brotli (.br)'.padStart(16)
  );
  console.log('-'.repeat(77));

  for (const r of results) {
    totalOriginal += r.originalSize;
    totalGzip += r.gzipSize;
    totalBrotli += r.brotliSize;

    const gzStr = `${formatBytes(r.gzipSize)} (-${r.gzipSavings}%)`;
    const brStr = `${formatBytes(r.brotliSize)} (-${r.brotliSavings}%)`;

    console.log(
      r.file.padEnd(35) +
      formatBytes(r.originalSize).padStart(12) +
      gzStr.padStart(14) +
      brStr.padStart(16)
    );
  }

  const totalGzPercent = (((totalOriginal - totalGzip) / totalOriginal) * 100).toFixed(1);
  const totalBrPercent = (((totalOriginal - totalBrotli) / totalOriginal) * 100).toFixed(1);

  console.log('-'.repeat(77));
  console.log(
    'TOTAL'.padEnd(35) +
    formatBytes(totalOriginal).padStart(12) +
    `${formatBytes(totalGzip)} (-${totalGzPercent}%)`.padStart(14) +
    `${formatBytes(totalBrotli)} (-${totalBrPercent}%)`.padStart(16)
  );

  console.log('\n[SUCCESS] Pre-compressed assets generated successfully!');
  console.log(`Gzip reduced payload by ${totalGzPercent}% (Saved ${formatBytes(totalOriginal - totalGzip)})`);
  console.log(`Brotli reduced payload by ${totalBrPercent}% (Saved ${formatBytes(totalOriginal - totalBrotli)})\n`);
}

main();

