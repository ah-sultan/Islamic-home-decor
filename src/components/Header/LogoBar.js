import Link from "next/link"
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUsergroupAdd } from 'react-icons/ai';

function LogoBar(props) {
    return (
        <>
            <div>
                <div className="container">
                    <div className="flex items-center justify-between py-5">
                        <div>
                            <Link href="/">
                                <span className="text-2xl block leading-none text-primary">ISLAMIC</span>
                                <span className="text-sm leading-none text-black">Home Decor</span>
                            </Link>
                        </div>
                        <div >
                            <form action="#">
                                <input type="text" placeholder="I'm Loking For" className="w-[400px] p-3 py-2 text-gray-400 text-sm focus:outline-none border border-gray-100" />
                                <button type="submit" className="py-2 px-4 bg-primary font-medium text-white">Search</button>
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