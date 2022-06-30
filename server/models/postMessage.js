import mongoose from 'mongoose';

// in mongodb you can create documents that look absolutely different
// mongoose allows us to give some sort of uniformity to our documents
// we are going to specify that each post is going to have these things
//https://mongoosejs.com/docs/guide.html 
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    name: String,
    tags: [String],
    selectedFile: String,  //convert an image into a string using base64
    likes: {   //an object 
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//return into a model
const PostMessage = mongoose.model('PostMessage', postSchema);
//exporting a mongoose model from the post file
export default PostMessage;