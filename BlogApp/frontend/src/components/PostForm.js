import { useState, useEffect } from 'react';

const PostForm = ({ addPost, updatePost, editPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (editPost) {
            setTitle(editPost.title);
            setContent(editPost.content);
        }
    }, [editPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editPost) {
            updatePost({ id: editPost.id, title, content });
        } else {
            addPost({ title, content });
        }
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required
            />
            <textarea 
                placeholder="Content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                required
            />
            <button type="submit">{editPost ? 'Update Post' : 'Add Post'}</button>
        </form>
    );
};

export default PostForm;
