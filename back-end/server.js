const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// connect to the database
mongoose.connect('mongodb://localhost:27017/review', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [
    'secretValue'
  ],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// import the users module and setup its API path
const users = require("./users.js");
app.use("/api/users", users.routes);

// Create a scheme for reviews
const reviewSchema = new mongoose.Schema({
  itemId: Number,
  title: String,
  user: String,
  text: String,
  date: String
});

// Create a model for reviews
const Review = mongoose.model('Review', reviewSchema);

// Create a review
app.post('/api/reviews', async (req, res) => {
  const review = new Review({
    itemId: req.body.itemId,
    title: req.body.title,
    user: req.body.author,
    text: req.body.text,
    date: req.body.date
  });
  try {
    await review.save();
    res.send(review);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all projects
app.get('/api/reviews/:id', async (req, res) => {
  try {
    let reviews = await Review.find({itemId: req.params.id});
    res.send(reviews);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/reviews/:id', async (req, res) => {
  try {
    await Review.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/reviews/:id', async (req, res) => {
  try {
    let item = await Review.findOne({
      _id: req.params.id
    });
    item.title= req.body.title,
    item.text= req.body.text,
    item.date= req.body.date

    await item.save();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/userReviews/:user', async (req, res) => {
  try {
    let reviews = await Review.find({user: req.params.user});
    let items = [];
    for (let i = 0; i < reviews.length; i++) {
        if (!items.includes(reviews[i].itemId)) {
            items.push(reviews[i].itemId)
        }
    }
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3003, () => console.log('Server listening on port 3003!'));
