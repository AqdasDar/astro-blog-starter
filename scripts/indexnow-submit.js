/**
 * IndexNow Post-Deploy Script
 * 
 * Reads URLs from the sitemap and submits them to Bing via the IndexNow API.
 * Run after each deploy: node scripts/indexnow-submit.js
 */

const SITE_URL = 'https://aesthetic-production.fr';
const INDEXNOW_KEY = '4a87b9c201e54911abf83c2d4e8f192b';
const SITEMAP_URL = `${SITE_URL}/sitemap-0.xml`;

async function fetchSitemapUrls() {
  const response = await fetch(SITEMAP_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
  }
  const xml = await response.text();
  // Extract <loc> URLs from sitemap XML
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function submitToIndexNow(urls) {
  const payload = {
    host: 'aesthetic-production.fr',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  console.log(`Submitting ${urls.length} URL(s) to IndexNow...`);
  console.log(urls.map((u) => `  - ${u}`).join('\n'));

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (response.ok || response.status === 202) {
    console.log(`\n✅ IndexNow submission successful (HTTP ${response.status})`);
  } else {
    const body = await response.text();
    console.error(`\n❌ IndexNow submission failed (HTTP ${response.status}): ${body}`);
  }
}

async function main() {
  try {
    console.log('📡 IndexNow — Fetching sitemap URLs...\n');
    const urls = await fetchSitemapUrls();

    if (urls.length === 0) {
      console.log('No URLs found in sitemap.');
      return;
    }

    await submitToIndexNow(urls);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
