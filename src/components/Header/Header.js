import { useState } from "react"
import SideCart from "../SideCart/SideCart"
import LogoBar from "./LogoBar"
import Navbar from "./Navbar"
import TopBar from "./TopBar"
import LoginBox from "../LoginBox/LoginBox"

function Header() {
    const [showCart, setShowCart] = useState(false)
    const [showLoginBox, setShowLoginBox] = useState(false)

    const cartHandler = (value) => {
        setShowCart(value)
    }

    const loginBoxHandler = (value) => {
        setShowLoginBox(value)
    }
    return (
        <>
            <header >
                <div>
                    <TopBar />
                    <LogoBar cartHandler={cartHandler} LoginBoxHandler={loginBoxHandler} />
                    <Navbar />
                </div>
                <SideCart showCart={showCart} cartHandler={cartHandler} />
                <LoginBox showLoginBox={showLoginBox} LoginBoxHandler={loginBoxHandler} />
            </header>
        </>
    )
}

export default Header