const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.send('Backend - Dev Society');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
