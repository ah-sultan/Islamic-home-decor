import { BiChevronDown } from "react-icons/bi"
import Link from "next/link"
import { topNavdata } from "./Navbdata"

function TopNav() {
    return (
        <>
            <ul className="flex items-center gap-x-5 pl-2.5">
                {
                    topNavdata.map((list, index) => (
                        <li key={index}>
                            <Link href={list.url}>
                                <div className="flex item-center gap-x-3.5 text-white py-3">
                                    <span className="text-base leading-none">{list.title}</span>
                                    <BiChevronDown className="text-xl" />
                                </div>
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <Link href="dropShipping">
                        <span className="text-nav font-semibold underline ml-2.5">
                            Start Dropshipping
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default TopNav