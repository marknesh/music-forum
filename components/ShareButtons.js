import { TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

function ShareButtons() {
    const shareUrl = window.location.href;
    const title = 'Check out this post';
    return (
        <div className=" w-11/12 md:w-9/12 mx-auto pt-5 flex items-center space-x-3 ">
            <div>
                <h3 className="text-gray-500">Share</h3>
            </div>
<TwitterShareButton

            url={shareUrl}
            title={title}
            
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>


          <WhatsappShareButton
          className="cursor-pointer"
            url={shareUrl}
            title={title}
            
            
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
</div>


    )
}

export default ShareButtons
