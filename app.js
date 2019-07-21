const https = require('https')
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  console.log('you got me')
  res.send(JSON.stringify({ Hello: 'World' }));
});

app.listen(port, () => {
  console.log(`keepalive is listening on port ${port}!`);
});

setInterval(() => {
  https.get("https://glacial-gorge-38769.herokuapp.com/");
}, 300000);
