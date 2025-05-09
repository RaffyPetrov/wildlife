const Post = require('../models/post');

async function createPost(post) {
    const result = new Post(post);
    await result.save();

    return result;
}

async function getPosts() {
    return Post.find({});
}

async function getPostsByAuthor(userId) {
    return Post.find({ author: userId }).populate('author', 'firstName lastName')
}

async function getPostById(id) {
    return Post.findById(id).populate('author', 'firstName lastName').populate('votes', 'email');
}

async function updatePost(id, post) {
    const existing = await Post.findById(id);

    existing.title = post.title;
    existing.keyword = post.keyword;
    existing.location = post.location;
    existing.date = post.date;
    existing.image= post.image;
    existing.description = post.description;

    await existing.save();

}

async function deletePost(id) {
    return Post.findByIdAndDelete(id).populate('author', 'firstName lastName');
}


async function vote(postId, userId, value) {
    const post = await Post.findById(postId);

    if (post.votes.includes(userId)) {
        throw new Error('You have already voted!');
    }

    post.votes.push(userId);
    post.rating += value;

    await post.save();

}

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    vote,
    getPostsByAuthor,
};