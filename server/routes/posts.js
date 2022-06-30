import express from 'express'

//dont forget to add .js at node
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js'

const router = express.Router(); //set up router

// we dont want our routes gets long, so we need simplify it
// we can extract all functions from the routes to the controllers

// router.get('/', (req, res) => {
//     res.send('THIS WORKS!');
// });

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;