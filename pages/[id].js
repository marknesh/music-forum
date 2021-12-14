import { doc, getDoc } from "firebase/firestore"
import Moment from "react-moment"
import Layout from "../components/Layout"
import { db } from "../firebase"

function PostPage({post}) {
    return (
        <Layout>
        <div className="w-5/6 mx-auto py-5 relative mt-10 rounded-lg px-4 bg-white">
        <p className='text-sm text-gray-700 absolute top-2 left-0 pl-4 '>Asked <Moment fromNow>{post?.timestamp}</Moment> by {post?.firstName}</p>
            <h1 className="text-xl  pt-4 md:text-2xl font-semibold ">{post.title}</h1>
            <p className="py-2 text-gray-800 text-lg">{post.content}</p>
        </div>
        </Layout>
    )
}

export default PostPage

export async function getServerSideProps(context){
    const id=context.params.id

    const post=await getDoc(doc(db,"posts",id))

    if(post?.data()){

    
    const forumPost={...post.data(),timestamp:post.data().timestamp.toDate().getTime()}


    return{
        props:{
            post:forumPost

        }
    }

}else{
    return{
        notFound:true
    }
}



}
