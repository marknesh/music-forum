import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore"
import Moment from "react-moment"
import Layout from "../components/Layout"
import { db } from "../firebase"
import {  useForm } from "react-hook-form";
import { useState } from "react"
import { BounceLoader, SyncLoader } from "react-spinners"
import { css } from "@emotion/react"
import { useUser } from "@clerk/nextjs"
import Comments from "../components/Comments"

import { useEffect } from "react"

import ShareButtons from "../components/ShareButtons";
import { useRouter } from "next/router";

function PostId() {
    const [post,setPost]=useState(null)
  const [loadingPost,setLoadingPost]=useState(false)

    const [loading,setLoading]=useState(false)
    const [comments,setComments]=useState([])
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();

    const user=useUser()
   
const router=useRouter()
const {id}=router.query


    useEffect(()=>{
        setLoadingPost(true)
        const unsub=onSnapshot(doc(db,"posts",id),orderBy("timestamp","desc"),snapshot=>{
          
            if(!snapshot.exists()){
                setLoadingPost(false)
            return router.push("/")
            }
          setPost(snapshot.data())
          setLoadingPost(false)
        
        })

    return ()=>unsub()
    
},[])


useEffect(()=>onSnapshot(query(collection(db,"posts",id,"comments"),orderBy("timestamp","desc")),snapshot=>setComments(snapshot.docs)),[])




    const override = css`
    display: block;
    margin: 0 auto;
    border-color: whitesmoke;
    margin-left:10px ;
    `;


    const addComment=async(comment)=>{
setLoading(true)
try{
      await addDoc(collection(db,"posts",id,"comments"),{
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
    if(loadingPost){
        return(

            <div className="flex flex-col space-y-3 items-center justify-center min-h-[40vh]"> 

            <h4>Fetching post...</h4>
                        <BounceLoader color={"#3B82F6"}  loading={loadingPost}    size={70} />
                    </div>
        )
    }
 
    return post && (
        <Layout >
            {post &&
        <div className="w-11/12 md:w-9/12 mx-auto py-4 relative mt-10 rounded-lg px-4 bg-white">


<p className='text-sm text-gray-700  '>Asked <Moment fromNow>{post?.timestamp?.toDate()}</Moment> by {post?.firstName}</p>





      
            <h1 className="text-xl pt-2  md:text-2xl font-semibold ">{post?.title}</h1>
            <p className="py-2 text-gray-800 text-lg">{post?.content}</p>
        </div>
}

        


     <ShareButtons/>




        <div className=" w-11/12 mx-auto py-10 ">


<div className="flex   flex-col space-y-4 md:space-y-0 md:flex-row  md:justify-between">

    


<Comments  comments={comments}/>

<div className=" pb-10 sm:pb-0">
    

   
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="flex flex-col max-w-md space-y-4">
        <textarea {...register("comment",{required:true,validate:(value)=>{return  !!value.trim() }})} rows={5} cols={32} placeholder="Leave a comment"  className="border-none focus:outline-none py-1 rounded-lg" />
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

export default PostId

