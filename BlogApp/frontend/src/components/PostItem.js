const PostItem = ({ post, deletePost, editPost }) => {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => editPost(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
    );
};

export default PostItem;
