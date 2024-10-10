const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog')

//register view engine
app.set('view engine', 'ejs');

// connect to mongodb 
const dbURI = `mongodb+srv://khalyAmad:test-admin-12345@nodeformation.wrvx5.mongodb.net/node-course?retryWrites=true&w=majority&appName=nodeFormation`;
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch(err => console.log(err));

//mongose and mongo sandox and routes
/*app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });
    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err)
        });
})*/


//listen for requests
// app.listen(3000);

// middleware static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// routes exemples
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/blogs/create', (req, res) => {
    res.render('create');
})

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { blogs: result })
        })
        .catch(err => console.log(err));
})

//post methode 
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        }).catch(err => console.log(err));
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err);
        });
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404.ejs');
});