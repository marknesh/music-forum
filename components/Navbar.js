import { SignedIn, SignedOut } from "@clerk/nextjs"

function Navbar() {
    return (
        <div className="flex items-center justify-between p-3">
<h1 className="font-bold text-2xl">MusicForum</h1>

<SignedIn>
    <button className="button">Create post</button>
</SignedIn>

<SignedOut>
    <button className="button">Login</button>

</SignedOut>
            
        </div>
    )
}

export default Navbar
