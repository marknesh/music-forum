import Layout from "../components/Layout"
import { useForm } from "react-hook-form";


function createPost() {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm({
        
        defaultValues:{
            title:"",
            content:""
        }
    });
  const onSubmit =async data =>{
      reset()
    console.log(data);
    

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


<button type="submit" className="button mt-2">Submit post</button>

            </form>
        </Layout>
    )
}

export default createPost
