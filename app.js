const https = require('https')
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send(JSON.stringify({ Hello: 'World' }));
});

app.listen(port, () => {
  console.log(`keepalive is listening on port ${port}!`);
});

setInterval(() => {
  https.get("https://keepalivee.herokuapp.com/");
  https.get("https://fierce-temple-39819.herokuapp.com/");
}, 300000);
