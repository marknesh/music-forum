import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

function ShareButtons() {
    const shareUrl = window.location.href;
    const title = 'Check out this post';
    return (
        <div className=" w-11/12 md:w-9/12 mx-auto pt-5 flex items-center space-x-3 ">
            <div>
                <h3 className="text-gray-500">Share</h3>
            </div>
<TwitterShareButton
  className="cursor-pointer"   

            url={shareUrl}
            title={title}
            
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <FacebookShareButton
           className="cursor-pointer"
            url={shareUrl}
            quote={title}
            
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <WhatsappShareButton
          className="cursor-pointer"
            url={shareUrl}
            title={title}
            
            
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>


          <LinkedinShareButton
           className="cursor-pointer"   
           title={title}       
          url={shareUrl} >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>



          

</div>


    )
}

export default ShareButtons
