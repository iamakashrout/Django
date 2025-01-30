import PostItem from './PostItem';

const PostList = ({ posts, deletePost, editPost }) => {
    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} deletePost={deletePost} editPost={editPost} />
            ))}
        </div>
    );
};

export default PostList;
