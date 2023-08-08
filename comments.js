// Create web server
// Start server: node comments.js
// Test: http://localhost:8080/comments.html

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Read comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Set static directory
app.use(express.static(__dirname + '/public'));

// Set up body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Set up server
var port = 8080;
app.listen(port, function() {
    console.log('Server listening on port ' + port);
});

// GET request
app.get('/comments', function(req, res) {
    console.log('GET request');
    res.json(comments);
});

// POST request
app.post('/comments', function(req, res) {
    console.log('POST request');
    comments.push(req.body);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comments);
});

// DELETE request
app.delete('/comments/:id', function(req, res) {
    console.log('DELETE request');
    var id = req.params.id;
    comments.splice(id, 1);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comments);
});

// PUT request
app.put('/comments/:id', function(req, res) {
    console.log('PUT request');
    var id = req.params.id;
    comments[id] = req.body;
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comments);
});