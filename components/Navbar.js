import { SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"

function Navbar() {
    return (
        <div className="flex items-center justify-between p-3">
<h1 className="font-bold text-2xl">MusicForum</h1>

<SignedIn>
    <Link href="createPost"><button className="button">Create post</button></Link>
    
</SignedIn>

<SignedOut>
<Link href="/signin"><button className="button">Login</button></Link>
    

</SignedOut>
            
        </div>
    )
}

export default Navbar
