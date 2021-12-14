import Post from "./Post"

function ForumPosts({posts}) {
    return (
        <div className="flex flex-col  space-y-7 py-10 w-5/6 md:w-7/12 mx-auto">

            {posts?.length>0  &&(
            posts?.map((post)=>(
 <Post key={post.id} post={post} />
            ))


            )
           
}
{
    posts.length == 0  &&(
        <div>No posts available</div>
    )
}
        </div>
    )
}

export default ForumPosts
