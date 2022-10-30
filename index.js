const puppeteer = require('puppeteer');

var numb, url1, url2, title;

function aleat(){
  numb = Math.random().toString(36).substring(2,8)
  
};



async function print() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  for(var i = 0; i<100; i++) {
    aleat();
    url1 = 'https://prnt.sc/'+numb;
    await page.goto(url1);
    url2 = await page.evaluate(() => {
      return document.getElementById('screenshot-image').src
    });
    if(url2 != '//st.prntscr.com/2022/09/11/1722/img/0_173a7b_211be8ff.png') {
      await page.goto(url2);
      title = await page.evaluate(() => {
        return document.title
      });
      if(title != '404 Not Found' && title != 'removed.png (161×81)' && title != 'ImageShack - Best place for all of your image hosting and image sharing needs') {
        await page.screenshot({path: 'prints/example'+numb+'.png'});
      }
    };
  }
  console.log('cabo');
};

print();
