## It is recommended you don't use this one, in favour of [magister-openid](https://www.npmjs.com/package/magister-openid) or [magister](https://www.npmjs.com/package/magister) as this one uses puppeteer which is very inefficient.
# Magister-API-Key
[![NPM](https://nodei.co/npm/magister-api-key.png?downloads=true)](https://npmjs.org/package/magister-api-key)
## Details
Since there is no way to get an API key the normal way, I've decided to reverse engineer the Magister API keys.
## Usage
First import the project
```javascript
const magister = require('magister-api-key');
```
To get a key, use the function `magister.get('url', 'username', 'password', <false>)`. This is an async function. 
For `url` use your Magister URL. For `username` and `password` use your Magister username and password. This will return the your API key. To use the API, I usually check in the network tab of the Chrome devtools what requests are made by Magister itself, and following those URL's you can get the data.

If you set debug mode to true, puppeteer will launch without headless mode, so you can see what is going on with the browser.

## Disclaimer
This repository is not affiliated with SchoolMaster's Magister in any way.
