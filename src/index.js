const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')

const app = express();
app.use(morgan('common'));
app.use(helmet());
const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
