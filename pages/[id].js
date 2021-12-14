import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore"
import Moment from "react-moment"
import Layout from "../components/Layout"
import { db } from "../firebase"
import {  useForm } from "react-hook-form";
import { useState } from "react"
import { SyncLoader } from "react-spinners"
import { css } from "@emotion/react"
import { useUser } from "@clerk/nextjs"
import Comments from "../components/Comments"

import { useEffect } from "react"

function PostPage({post}) {

    const [loading,setLoading]=useState(false)
    const [comments,setComments]=useState([])
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();

    const user=useUser()


    useEffect(()=>onSnapshot(query(collection(db,"posts",post.id,"comments"),orderBy("timestamp","desc")),snapshot=>setComments(snapshot.docs)),[db])



    const override = css`
    display: block;
    margin: 0 auto;
    border-color: whitesmoke;
    margin-left:10px ;
    `;


    const addComment=async(comment)=>{
setLoading(true)
try{
      await addDoc(collection(db,"posts",post.id,"comments"),{
comment:comment,
          timestamp:serverTimestamp(),
          firstName:user.firstName
      })

      reset()
      setLoading(false)

    }
    catch(err){
        setLoading(false)

    }

    }

    const onSubmit = data =>{
        

        addComment(data.comment)


    }
    return (
        <Layout >
        <div className="w-11/12 md:w-9/12 mx-auto py-5 relative mt-10 rounded-lg px-4 bg-white">
        <p className='text-sm text-gray-700 absolute top-2 left-0 pl-4 '>Asked <Moment fromNow>{post?.timestamp}</Moment> by {post?.firstName}</p>
            <h1 className="text-xl  pt-4 md:text-2xl font-semibold ">{post.title}</h1>
            <p className="py-2 text-gray-800 text-lg">{post.content}</p>
        </div>


        <div className=" w-11/12 mx-auto py-5 ">

<div className=" mt-4">
<h2 className="text-lg  font-semibold ">Comments</h2>


</div>

<div className="flex   flex-col md:flex-row  md:justify-between">

<Comments  comments={comments}/>

<div className=" pb-10 sm:pb-0">
    

   
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="flex flex-col max-w-md space-y-4">
        <textarea {...register("comment",{required:true,validate:(value)=>{return  !!value.trim() }})} rows={10} cols={32} placeholder="Leave a comment"  className="border-none focus:outline-none py-1 rounded-lg" />
{(errors?.comment?.type==="required"|| errors?.comment?.type==="validate") && <span className="error">Comment is required</span>}
<button type="submit" disabled={loading} className="button flex items-center justify-center"><div className="flex items-center"><div> {loading?"submitting":"Add comment"} </div><SyncLoader color={"white"}  loading={loading} css={override}   size={5} /></div></button>
    </div>


        </form>


    </div>

  


    </div>

    

</div>

     
        </Layout>
    )
}

export default PostPage

export async function getServerSideProps(context){
    const id=context.params.id

    const post=await getDoc(doc(db,"posts",id))
    

    if(post?.data()){

    
    const forumPost={...post.data(),id:post.id,timestamp:post.data().timestamp.toDate().getTime()}


    return{
        props:{
            post:forumPost,
           

        }
    }

}else{
    return{
        notFound:true
    }
}



}
