const puppeteer = require('puppeteer');
module.exports = {
  get: async function (url, username, password, debug=false) {
    const browser = await puppeteer.launch({headless: !debug});
    const page = await browser.newPage();
    try{
      await page.goto(url);
      await page.waitForSelector("#username");
      await page.type("#username", username, {delay: 20});
      await (await page.$("#username")).press("Enter");
      await page.waitForSelector("#password");
      await page.type("#password", password, {delay: 20});
      await (await page.$("#password")).press("Enter");
      await page.waitForSelector("#column0")
      const localStorageData = await page.evaluate(() => {
        let json = {};
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          json[key] = sessionStorage.getItem(key);
        }
        return json;
      });
      var apiInfo = JSON.parse(localStorageData["oidc.user:https://accounts.magister.net:M6-pac.magister.net"]);
      var apiKey = apiInfo["access_token"];
      await browser.close();
      return apiKey;
    }catch(e){
      console.log(e)
    }
  },
}
