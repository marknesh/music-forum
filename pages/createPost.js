import Layout from "../components/Layout"
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import {SyncLoader} from "react-spinners"
import { css } from "@emotion/react";
import { useUser } from "@clerk/nextjs";

function CreatePost() {
    const [loading,setLoading]=useState(false)
    const user=useUser()
    const override = css`
display: block;
margin: 0 auto;
border-color: whitesmoke;
margin-left:10px ;
`;



    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm({
        
        defaultValues:{
            title:"",
            content:""
        }
    });
  const onSubmit =async data =>{
setLoading(true)
try{
    await addDoc(collection(db,"posts"),{
        title:data.title,
        content:data.content,
        email:user?.primaryEmailAddress?.emailAddress,
        timestamp:serverTimestamp()
    })
      reset()
      setLoading(false)

}
    
    catch(err){
        setLoading(false)
    }
    

  }


    return (
        <Layout>

            <h1 className="title">Create post</h1>
            <form onSubmit={handleSubmit(onSubmit)}  className=" w-5/6  xl:max-w-4xl mx-auto   ">


<div className="inputDiv">
    <label>Post title</label>
    <input type="text" {...register("title",{required:true,validate:(value)=>{return  !!value.trim() }})} className="input" />
    {(errors?.title?.type==="required"|| errors?.title?.type==="validate") && <span className="error">Title is required</span>}
</div>

<div className="inputDiv">
    <label>Post description</label>
    <textarea {...register("content",{required:true,validate:(value)=> {return !!value.trim() } })} rows="6" className="input" />
    {(errors?.content?.type==="required"|| errors?.content?.type==="validate") && <span className="error">content is required</span>}
</div>


<button type="submit" disabled={loading} className="button flex items-center mt-2"><div> {loading?"submitting":"submit"} </div><SyncLoader color={"white"}  loading={loading} css={override}   size={5} /></button>

            </form>
        </Layout>
    )
}

export default CreatePost
