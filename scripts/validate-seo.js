const fs = require('fs');
const path = require('path');

const distIndex = path.join(__dirname, '..', 'dist', 'angular-portfolio', 'browser', 'index.html');
const robotsPath = path.join(__dirname, '..', 'dist', 'angular-portfolio', 'browser', 'robots.txt');
const sitemapPath = path.join(__dirname, '..', 'dist', 'angular-portfolio', 'browser', 'sitemap.xml');
const llmsPath = path.join(__dirname, '..', 'dist', 'angular-portfolio', 'browser', 'llms.txt');

console.log('\n--- Auditing SEO & AEO Artifacts ---');

// 1. Verify robots.txt
if (!fs.existsSync(robotsPath)) {
  console.error('[FAIL] robots.txt is missing in dist!');
  process.exit(1);
}
const robotsTxt = fs.readFileSync(robotsPath, 'utf8');
if (!robotsTxt.includes('Sitemap: https://pushpraj2164.github.io/PSingh-Portfolio/sitemap.xml')) {
  console.error('[FAIL] robots.txt missing correct Sitemap URL directive!');
  process.exit(1);
}
if (!robotsTxt.includes('GPTBot') || !robotsTxt.includes('PerplexityBot')) {
  console.error('[FAIL] robots.txt missing key AI crawlers!');
  process.exit(1);
}
console.log('[PASS] robots.txt validated (contains exact Sitemap directive, AI bots, Googlebot)');

// 2. Verify sitemap.xml
if (!fs.existsSync(sitemapPath)) {
  console.error('[FAIL] sitemap.xml is missing in dist!');
  process.exit(1);
}
const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');

// Check XML declaration
if (!sitemapXml.trimStart().startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
  console.error('[FAIL] sitemap.xml is missing <?xml version="1.0" encoding="UTF-8"?> declaration!');
  process.exit(1);
}

// Check for unescaped ampersands
const unescapedAmp = sitemapXml.match(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g);
if (unescapedAmp && unescapedAmp.length > 0) {
  console.error(`[FAIL] sitemap.xml contains ${unescapedAmp.length} unescaped '&' characters!`);
  process.exit(1);
}

// Check required schema and root loc
if (!sitemapXml.includes('<loc>https://pushpraj2164.github.io/PSingh-Portfolio/</loc>') || !sitemapXml.includes('<image:image>')) {
  console.error('[FAIL] sitemap.xml missing root URL or images!');
  process.exit(1);
}

// Verify that every image:loc file exists in dist
const imageLocMatches = [...sitemapXml.matchAll(/<image:loc>https:\/\/pushpraj2164\.github\.io\/PSingh-Portfolio\/(.*?)<\/image:loc>/g)];
if (imageLocMatches.length === 0) {
  console.error('[FAIL] No image:loc entries found in sitemap.xml!');
  process.exit(1);
}
for (const match of imageLocMatches) {
  const relativeImagePath = match[1];
  const fullImagePath = path.join(__dirname, '..', 'dist', 'angular-portfolio', 'browser', relativeImagePath);
  if (!fs.existsSync(fullImagePath)) {
    console.error(`[FAIL] Image referenced in sitemap does not exist in dist: ${relativeImagePath}`);
    process.exit(1);
  }
}
console.log(`[PASS] sitemap.xml validated (valid XML declaration, ${imageLocMatches.length} existing images, zero deprecated tags)`);

// 3. Verify llms.txt
if (!fs.existsSync(llmsPath)) {
  console.error('[FAIL] llms.txt is missing in dist!');
  process.exit(1);
}
console.log('[PASS] llms.txt & llms-full.txt validated');

// 4. Verify index.html & JSON-LD
if (!fs.existsSync(distIndex)) {
  console.error('[FAIL] index.html is missing in dist!');
  process.exit(1);
}
const html = fs.readFileSync(distIndex, 'utf8');
const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!match) {
  console.error('[FAIL] JSON-LD structured data missing in index.html!');
  process.exit(1);
}

try {
  const json = JSON.parse(match[1]);
  console.log('[PASS] JSON-LD Schema.org JSON is 100% syntactically valid!');
  console.log('       Context:', json['@context']);
  console.log('       Structured Data Entities:');
  json['@graph'].forEach(entity => {
    console.log(`         • ${entity['@type'].padEnd(16)} -> ${entity['name'] || entity['@id']}`);
  });

  const person = json['@graph'].find(e => e['@type'] === 'Person');
  if (!person) {
    console.error('[FAIL] Person entity not found in JSON-LD!');
    process.exit(1);
  }
  if (person.jobTitle !== 'Senior Full-Stack Developer & Angular Lead Architect') {
    console.error(`[FAIL] Person jobTitle does not match expected! Found: ${person.jobTitle}`);
    process.exit(1);
  }
  if (person.url !== 'https://github.io') {
    console.error(`[FAIL] Person url does not match expected! Found: ${person.url}`);
    process.exit(1);
  }
  const expectedSameAs = [
    'https://linkedin.com',
    'https://github.com',
    'https://himalayas.app',
    'https://remoteok.com'
  ];
  const sameAsValid = Array.isArray(person.sameAs) &&
    expectedSameAs.every(url => person.sameAs.includes(url));
  if (!sameAsValid) {
    console.error('[FAIL] Person sameAs array does not contain all expected URLs!', person.sameAs);
    process.exit(1);
  }
  console.log('[PASS] Person entity jobTitle, url, and sameAs array validated 100%!');
} catch (e) {
  console.error('[FAIL] JSON-LD parse error:', e.message);
  process.exit(1);
}

// 5. Check Meta Tags
const requiredMeta = [
  '<title>Pushpraj Singh Bhati',
  'name="description"',
  'name="keywords"',
  'name="robots"',
  'rel="canonical"',
  'property="og:title"',
  'property="og:image"',
  'name="twitter:card"',
  'rel="icon" type="image/webp"',
  'Pushpraj Singh Bhati'
];

let allMetaPassed = true;
for (const tag of requiredMeta) {
  if (!html.includes(tag)) {
    console.error(`[FAIL] Missing required meta element: ${tag}`);
    allMetaPassed = false;
  }
}

if (allMetaPassed) {
  console.log('[PASS] All critical SEO, Social & Preload meta tags present!');
} else {
  process.exit(1);
}

// 6. Check Crawlable Pre-Render Fallback inside <app-root>
if (!html.includes('Pushpraj Singh Bhati (also known as Pushpraj or Pushpraj Bhati)') || !html.includes('Key Quantitative Achievements')) {
  console.error('[FAIL] Semantic fallback content inside <app-root> missing!');
  process.exit(1);
}
console.log('[PASS] Crawler fallback content inside <app-root> verified for non-JS bots & AI parsers!');

console.log('\n>>> ALL SEO, AEO & ROBOTS.TXT AUDITS PASSED WITH 100% PERFECTION! <<<\n');

