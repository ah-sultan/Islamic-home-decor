import LogoBar from "./LogoBar"
import Navbar from "./Navbar"
import TopBar from "./TopBar"

function Header() {

    return (
        <>
            <header  >
                <div>
                    <TopBar />
                    <LogoBar />
                    <Navbar />
                </div>
            </header>
        </>
    )
}

export default Header