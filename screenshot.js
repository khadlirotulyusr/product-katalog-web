const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/kategori/kursi', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/Users/apple/Documents/explore/NextJS/catalog-produk/screenshot-desktop.png', fullPage: true });
  console.log('Desktop screenshot saved');
  
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/kategori/kursi', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/Users/apple/Documents/explore/NextJS/catalog-produk/screenshot-mobile.png', fullPage: true });
  console.log('Mobile screenshot saved');
  
  await browser.close();
})();
