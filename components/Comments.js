import Moment from "react-moment"

function Comments({comments}) {
    
    
    return (
        <div className=" md:flex-[0.8]">
        
<h2 className="text-lg  pb-3 text-blue-500 font-semibold ">Comments</h2>


            {comments?.length >0 ? 
            <div className="flex flex-col space-y-4" >
                {
                    comments.map((comment)=>(
                        <div key={comment.id} className="bg-white  rounded-lg  py-2 px-4">

                            <div className="flex items-center justify-between pb-1 text-sm text-gray-700 ">
                            <h1>{comment?.data()?.firstName}</h1>
                            <p><Moment fromNow>{comment?.data()?.timestamp?.toDate()}</Moment></p>
                            
                            </div>
<p className="text-lg">{comment?.data()?.comment}</p>
                        </div>
                    ))
                }



            </div>:
            
            <p>No comments</p>
            }
        </div>
    )
}

export default Comments
