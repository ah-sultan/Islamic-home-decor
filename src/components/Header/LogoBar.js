import Link from "next/link"
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiChevronDown, BiMenu } from "react-icons/bi";
import SideNav from "../SideNav/SideNav";
import SearchBox from "../SearchBox/SearchBox";

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
                    <div className="flex flex-wrap items-center justify-between">
                        <div>
                            <div className={`${stickyNav?'md:hidden' : 'block'}`}>
                                <Link href="/">
                                    <span className="text-2xl block leading-none text-primary">ISLAMIC</span>
                                    <span className="text-sm leading-none text-black">Home Decor</span>
                                </Link>
                            </div>

                            {/* Menu icons Section */}
                            <div className={`relative group/sidenav hidden lg:block border-t-2 border-transparent hover:border-t-black w-[240px] xl:w-[270px]   ${stickyNav?'md:block' : 'hidden'}`}>
                                <div className="flex items-center gap-x-0.5 py-2.5">
                                    <BiMenu className="text-black text-3xl" />
                                    <span className="text-black font-normal">Shop By Department </span>
                                </div>

                                <div className="absolute left-0 top-[105%] invisible opacity-0 group-hover/sidenav:top-[99%] group-hover/sidenav:visible group-hover/sidenav:opacity-100 trns-1 bg-white w-full shadow-md border border-gray-400">
                                    <SideNav/>
                                </div>
                            </div>
                        </div>

                        {/* Search Bar ============ */}
                        <div className={`order-last md:order-none w-full md:w-auto mt-2 ${stickyNav?'hidden lg:block' : 'block'}`}>
                            <SearchBox/>
                        </div>
                        <div>
                            <ul className="flex items-center gap-x-3">
                                <li className="hidden md:block">
                                    <AiOutlineHeart className="inline-block hover:text-primary text-gray-400 text-4xl" />
                                </li>
                                <li className="relative">
                                    <button type="button" onClick={() => props.cartHandler(true)}>
                                        <AiOutlineShoppingCart className="inline-block hover:text-primary text-gray-400 text-4xl" />
                                        <span className="absolute p-0.5 rounded-full bg-accent -right-2 text-xs -bottom-2">12</span>
                                    </button>
                                    
                                </li>
                                <li className="flex items-center gap-0.5">
                                    <AiOutlineUsergroupAdd className="inline-block hover:text-primary text-gray-400 text-4xl" />
                                    <div className="hidden md:inline-block">
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