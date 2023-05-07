import Link from "next/link"
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiChevronDown, BiMenu } from "react-icons/bi";
import SideNav from "../SideNav/SideNav";

function LogoBar(props) {
    const [stickyNav, setStickyNav] = useState(false)

    useEffect(() => {

        const stickyNavHandler = () => {
           window.pageYOffset > 300 ? setStickyNav(true) : setStickyNav(false)
        }
    
        window.addEventListener('scroll',stickyNavHandler )
    
    })
    return (
        <>
            <div className={`bg-white py-5 ${stickyNav?'navbarSticky' : null}`}>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className={`${stickyNav?'hidden' : 'block'}`}>
                                <Link href="/">
                                    <span className="text-2xl block leading-none text-primary">ISLAMIC</span>
                                    <span className="text-sm leading-none text-black">Home Decor</span>
                                </Link>
                            </div>
                            <div className={`relative group/sidenav border-t-2 border-transparent hover:border-t-black w-[240px] xl:w-[270px]   ${stickyNav?'block' : 'hidden'}`}>
                                <div className="flex items-center gap-x-0.5 py-2.5">
                                    <BiMenu className="text-black text-3xl" />
                                    <span className="text-black font-normal">Shop By Department </span>
                                </div>

                                <div className="absolute left-0 top-[105%] invisible opacity-0 group-hover/sidenav:top-[99%] group-hover/sidenav:visible group-hover/sidenav:opacity-100 trns-1 bg-white w-full shadow-md border border-gray-400">
                                    <SideNav/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <form action="#">
                                <div className="flex items-center">
                                    <input type="text" placeholder="I'm Loking For" className="w-[350px] xl:w-[400px] p-3 h-11 text-gray-400 text-sm focus:outline-none border border-gray-300" />
                                    <button type="submit" className="h-11 px-4 bg-primary font-normal text-white">Search</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <ul className="flex items-center gap-x-3">
                                <li>
                                    <AiOutlineHeart className="inline-block hover:text-primary text-gray-400 text-4xl" />
                                </li>
                                <li>
                                    <button type="button" onClick={() => props.cartHandler(true)}>
                                        <AiOutlineShoppingCart className="inline-block hover:text-primary text-gray-400 text-4xl" />
                                    </button>
                                </li>
                                <li className="flex items-center gap-0.5">
                                    <AiOutlineUsergroupAdd className="inline-block hover:text-primary text-gray-400 text-4xl" />
                                    <div className="inline-block">
                                        <button type="button" onClick={() => props.LoginBoxHandler(true)} className="block text-sm">
                                            Login
                                        </button>
                                        <Link href='/register' className="block text-sm text-gray-400">Register</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoBar