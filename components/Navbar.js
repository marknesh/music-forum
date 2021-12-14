import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import {  useRouter } from "next/router"
import Image from "next/image"
import musiclogo from "../public/musiclogo.png"
function Navbar() {
    const {pathname}=useRouter()
    
    return (
        <div className="flex items-center justify-between p-4">
            <Link href="/">
                <div className="flex items-center -space-x-1 cursor-pointer">
                    <div className="relative w-10 h-10 ">

                    <Image src={musiclogo}  objectFit="cover"  layout="fill" />
                    </div>
                    
                <h1 className="font-bold hidden md:flex text-2xl text-blue-500 ">MusicForum</h1>

                </div>
            
            </Link>


<SignedIn>

    <div className="flex items-center space-x-2 ">

    <Link href="createPost"><button className={`button ${pathname == "/createPost" && "hidden"}`}>Create post</button></Link>
<UserButton/>
    </div>
  
    
</SignedIn>

<SignedOut>
<Link href="/signin"><button className="button">Login</button></Link>
    

</SignedOut>
            
        </div>
    )
}

export default Navbar
