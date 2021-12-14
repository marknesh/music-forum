function Post({post}) {
    return (
        <div>

<h1 className="text-2xl ">{post?.title}</h1>
<p>{post?.content}</p>
            
        </div>
    )
}

export default Post
