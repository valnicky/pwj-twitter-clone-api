const express = require('express');
const app = express();
const port = 3000;

app.get('/tweets', (req, res) => {
    console.log(req.query);
    const query = req.query.q;
    const count = req.query.count;
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Twitter API listening on port ${port}!`);
});