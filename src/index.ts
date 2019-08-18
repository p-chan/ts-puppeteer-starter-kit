import puppeteer from 'puppeteer'

// Let's scraping
;(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    headless: true,
    defaultViewport: {
      width: 1280,
      height: 768
    }
  })

  const page = await browser.newPage()

  await page.goto('https://github.com/p-chan/ts-puppeteer-starter-kit', {
    waitUntil: 'domcontentloaded'
  })

  await page.close()
  await browser.close()
})()
