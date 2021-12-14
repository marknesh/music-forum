
import Link from 'next/link';
import Moment from 'react-moment';


function Post({post}) {
    
    return (
        <Link href={`/${post.id}`}>
        <div className="bg-white relative px-6 py-4 group rounded-lg cursor-pointer ">

<h1 className=" text-xl md:text-2xl font-semibold group-hover:underline ">{post?.title}</h1>
<p className="text-gray-800 mt-2 mb-4  line-clamp-2 ">{post?.content}</p>


<p className='text-sm text-gray-700 absolute bottom-1 left-0 pl-6 '>Asked <Moment fromNow>{post?.timestamp}</Moment> by {post?.firstName}</p>

            
        </div>
        </Link>
    )
}

export default Post
