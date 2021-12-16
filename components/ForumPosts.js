import { css } from "@emotion/react";
import { BounceLoader } from "react-spinners"
import Post from "./Post"

function ForumPosts({posts,loading}) {
 

    return (
        <div className="flex flex-col  space-y-7 py-10 w-5/6 md:w-7/12 mx-auto">

            {posts?.length>0  &&(
            posts?.map((post)=>(
 <Post key={post.id} id={post.id} post={post} />
            ))


            )
           
}
{
   (posts.length == 0  && !loading) &&(
        <div>No posts available</div>
    )
}

{
    loading  &&(
        <div className="flex flex-col space-y-3 items-center justify-center min-h-[40vh]"> 

<h4>Fetching posts...</h4>
            <BounceLoader color={"#3B82F6"}  loading={loading}    size={70} />
        </div>
    )
}
        </div>
    )
}

export default ForumPosts
