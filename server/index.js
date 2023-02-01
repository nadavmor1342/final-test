const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const axios = require('axios');
const cors=require('cors');
const app = express();
app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/posts')
    .then(()=> console.log('database connected  successfully'))
    .catch( err => console.error('couldnt connect to the database',err))
// Define the Post schema
const postSchema = new mongoose.Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

app.use(express.json());

// Route to insert posts
app.get('/', async (req, res) => {
  try {
    // Get posts from jsonplaceholder
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    // Insert posts into the database
    await Post.insertMany(posts);

    res.status(201).send('Posts inserted into the database');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/posts', async (req, res) => {
    try {
      const userId = req.body.userId;
      const posts = await Post.find({ userId });
  
      res.status(200).send(posts);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

app.listen(3005, () => {
  console.log('Server started on port 3005');
});
