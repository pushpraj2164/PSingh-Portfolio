const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const TARGET_DIRS = [
  path.join(__dirname, '..', 'public'),
  path.join(__dirname, '..', 'public', 'projects'),
  path.join(__dirname, '..', 'assets_src')
];

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function convertDirectory(dir) {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);
  const results = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const webpPath = path.join(dir, `${baseName}.webp`);

    const originalSize = stat.size;

    // Convert with sharp - 85 quality, effort 6 gives exceptional visual quality and compression
    await sharp(fullPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - webpSize) / originalSize) * 100;

    results.push({
      file: path.relative(path.join(__dirname, '..'), fullPath),
      webp: path.relative(path.join(__dirname, '..'), webpPath),
      originalSize,
      webpSize,
      savings: savings.toFixed(1)
    });
  }

  return results;
}

async function main() {
  console.log('\n=========================================');
  console.log('  Converting Images to WebP Format...    ');
  console.log('=========================================\n');

  let allResults = [];
  for (const dir of TARGET_DIRS) {
    const results = await convertDirectory(dir);
    allResults = allResults.concat(results);
  }

  let totalOriginal = 0;
  let totalWebp = 0;

  console.log(
    'File'.padEnd(45) +
    'Original'.padStart(12) +
    'WebP'.padStart(12) +
    'Savings'.padStart(12)
  );
  console.log('-'.repeat(81));

  for (const r of allResults) {
    totalOriginal += r.originalSize;
    totalWebp += r.webpSize;
    console.log(
      r.file.padEnd(45) +
      formatBytes(r.originalSize).padStart(12) +
      formatBytes(r.webpSize).padStart(12) +
      `${r.savings}%`.padStart(12)
    );
  }

  const totalSavedPercent = (((totalOriginal - totalWebp) / totalOriginal) * 100).toFixed(1);
  console.log('-'.repeat(81));
  console.log(
    'TOTAL'.padEnd(45) +
    formatBytes(totalOriginal).padStart(12) +
    formatBytes(totalWebp).padStart(12) +
    `${totalSavedPercent}%`.padStart(12)
  );
  console.log(`\nSaved ${formatBytes(totalOriginal - totalWebp)}! Total payload reduced by ${totalSavedPercent}%\n`);
}

main().catch(err => {
  console.error('Error during image conversion:', err);
  process.exit(1);
});

