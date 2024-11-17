import connectDb from '/lib/mongodb';
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default async function handler(req, res) {
  await connectDb();

  if (req.method === 'GET') {
    const posts = await Post.find({});
    return res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    return res.status(201).json(newPost);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
