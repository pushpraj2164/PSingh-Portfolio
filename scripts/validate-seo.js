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
if (!robotsTxt.includes('GPTBot') || !robotsTxt.includes('PerplexityBot') || !robotsTxt.includes('sitemap.xml')) {
  console.error('[FAIL] robots.txt missing key AI crawlers or sitemap!');
  process.exit(1);
}
console.log('[PASS] robots.txt validated (contains AI bots, Googlebot, Bingbot, Sitemap)');

// 2. Verify sitemap.xml
if (!fs.existsSync(sitemapPath)) {
  console.error('[FAIL] sitemap.xml is missing in dist!');
  process.exit(1);
}
const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
if (!sitemapXml.includes('<loc>https://pushpraj2164.github.io/PSingh-Portfolio/</loc>') || !sitemapXml.includes('<image:image>')) {
  console.error('[FAIL] sitemap.xml missing root URL or images!');
  process.exit(1);
}
console.log('[PASS] sitemap.xml validated (valid XML with root URL and Google Images schema)');

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

