const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const listingRouter = require('./routes/listings.route');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/lists', listingRouter);

app.listen(PORT, () => {
    console.log(`Up and Running on port ${PORT}`);
});
