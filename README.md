# Magister-API-Key
## Details
Since there is no way to get an API key the normal way, I've decided to reverse engineer the Magister API keys.
## Usage
First import the project
```javascript
const magister = require('magister-api-key');
```
To get a key, use the function `magister.get('url', 'username', 'password')`. This is an async function. 
For `url` use your Magister URL. For `username` and `password` use your Magister username and password.
This will return the your api key. To use the api I check in the network tab of the Chrome devtools what requests are made, and following that logic you can get all data.