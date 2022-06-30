import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';
//initialise app
//old version  const express = require('express)
const app = express();

dotenv.config();

//use all different methods on that app instance
//setting up the bodyparser so that i can properly send the request
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//call cors as a function
app.use(cors());

//this means every route inside of postRoutes will start with 'posts'
//default route is: http://localhost:5000/   now is http://localhost:5000/posts
app.use('/posts', postRoutes);


app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('APP IS RUNNING!');
});

//connect server application with a real databsse
//https://www.mongodb.com/cloud/atlas

// const CONNECTION_URL = 'mongodb+srv://hunterbiu:don119425@cluster0.hxvyn5l.mongodb.net/?retryWrites=true&w=majority'


const PORT = process.env.PORT || 5000;

//use mongoose to connect to database
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))  // if our connection is successful, we want to call app
    .catch((error) => console.log(error.message));

