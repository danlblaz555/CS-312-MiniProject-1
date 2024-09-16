const express = require('express');
const router = express.Router();

// Temporary array to store blog posts
let posts = [];

// Handle GET request for the homepage
router.get('/', (req, res) => {
    res.render('index', { title: 'Blog Home', posts: posts });
});

// Handle form submission for creating a new post
router.post('/posts', (req, res) => {
    const { name, title, content } = req.body;
    
    // Get the current date and time using JavaScript's Date object
    const date = new Date().toLocaleString();

    // Add the new blog post to the posts array
    const newPost = { name, title, content, date };
    posts.push(newPost);

    // Redirect back to the homepage to display the new post
    res.redirect('/');
});

// Handle DELETE post request
router.post('/posts/:id/delete', (req, res) => {
    const postId = req.params.id;

    // Remove the post from the array using the index
    posts.splice(postId, 1);

    // Redirect to the homepage
    res.redirect('/');
});

// Handle GET request for the edit page
router.get('/posts/:id/edit', (req, res) => {
    const postId = req.params.id;
    const post = posts[postId];

    // Render the edit page and pass the current post data
    res.render('edit', { title: 'Edit Post', post: post, id: postId });
});

// Handle POST request to update a post
router.post('/posts/:id/edit', (req, res) => {
    const postId = req.params.id;
    const { name, title, content } = req.body;

    // Update the post with new data
    posts[postId] = {
        name: name,
        title: title,
        content: content,
        date: new Date().toLocaleString(), // Update the post date to the current time
    };
    // Handle GET request for the edit page
router.get('/posts/:id/edit', (req, res) => {
    const postId = req.params.id;
    const post = posts[postId];

    // Render the edit page and pass the current post data
    res.render('edit', { title: 'Edit Post', post: post, id: postId });
    });
    // Handle POST request to update a post
    router.post('/posts/:id/edit', (req, res) => {
    const postId = req.params.id;
    const { name, title, content } = req.body;

    // Update the post with new data
    posts[postId] = {
        name: name,
        title: title,
        content: content,
        date: new Date().toLocaleString(), // Update the post date to the current time
    };

    // Redirect to the homepage
    res.redirect('/');
    });
    // Redirect to the homepage
    res.redirect('/');
});

module.exports = router;