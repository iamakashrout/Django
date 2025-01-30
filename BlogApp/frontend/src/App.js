import { useState, useEffect } from 'react';
import { getPosts, createPost, updatePost, deletePost } from './api';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [editPost, setEditPost] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await getPosts();
        setPosts(response.data);
    };

    const addPost = async (post) => {
        const response = await createPost(post);
        setPosts([response.data, ...posts]);
    };

    const handleUpdatePost = async (updatedPost) => {
        await updatePost(updatedPost.id, updatedPost);
        setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
        setEditPost(null);
    };

    const handleDeletePost = async (id) => {
        await deletePost(id);
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <div>
            <h1>Blog Posts</h1>
            <PostForm addPost={addPost} updatePost={handleUpdatePost} editPost={editPost} />
            <PostList posts={posts} deletePost={handleDeletePost} editPost={setEditPost} />
        </div>
    );
};

export default App;
