const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const index = __dirname+"/src";

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(index, 'index.html'))
});

app.listen(port);
console.log('Server started');
