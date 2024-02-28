// Create web server
// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// 4. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

// 5. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

// 6. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('GET /comments/:id');
});

// 7. Create a route for GET /comments/:id/author   
app.get('/comments/:id/author', (req, res) => {
    res.send('GET /comments/:id/author');
});

// 8. Create a route for GET /comments/:id/author/:id
app.get('/comments/:id/author/:id', (req, res) => {
    res.send('GET /comments/:id/author/:id');
});

// 9. Create a route for GET /comments/:id/author/:id/posts
app.get('/comments/:id/author/:id/posts', (req, res) => {
    res.send('GET /comments/:id/author/:id/posts');
});

// 10. Create a route for GET /comments/:id/author/:id/posts/:id
app.get('/comments/:id/author/:id/posts/:id', (req, res) => {
    res.send('GET /comments/:id/author/:id/posts/:id');
});

// 11. Create a route for GET /comments/:id/author/:id/posts/:id/comments
app.get('/comments/:id/author/:id/posts/:id/comments', (req, res) => {
    res.send('GET /comments/:id/author/:id/posts/:id/comments');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

