import Layout from "../components/Layout"

function createPost() {
    return (
        <Layout>

            <h1 className="title">Create post</h1>
            <form  className=" w-5/6  xl:max-w-4xl mx-auto  ">


<div className="inputDiv">
    <label>Post title</label>
    <input type="text" className="input" />
</div>

<div className="inputDiv">
    <label>Post description</label>
    <textarea rows="6" className="input" />
</div>


<button type="submit" className="button mt-2">Submit post</button>

            </form>
        </Layout>
    )
}

export default createPost
