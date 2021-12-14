import Post from "./Post"

function ForumPosts({posts}) {
    return (
        <div className="flex flex-col">
            {posts.map((post)=>(
 <Post key={post.id} post={post} />
            ))}
           
        </div>
    )
}

export default ForumPosts
