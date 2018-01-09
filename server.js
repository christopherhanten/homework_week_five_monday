const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

app.get('instruments', (request, response) => {
  response.send(instruments);
})
app.listen(3000, () => {
  console.log('listening on port 3000');
});
