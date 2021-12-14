import Navbar from "./Navbar"

function Layout({children}) {
    return (
        <div className="font-LexendDeca max-w-7xl mx-auto">

            <Navbar/>
            <div>
            {children}
            </div>
          
            
        </div>
    )
}

export default Layout
