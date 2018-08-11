// Local dev server for mock api calls
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Configure to use body parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/wordcount/v1/upload', (req, res) => {
    // new FormData()
    const body = req.body.file;
    console.log(`Request body => ${body}`);
    const mockFilePath = `${__dirname}/client/src/api/wordcount/v1/upload.json`;
    const encoding = 'utf8';
    const responseFile = fs.readFileSync(mockFilePath, encoding); 
    res.end(responseFile, encoding);
});

app.listen(port, () => console.log(`Listening on port ${port}`));