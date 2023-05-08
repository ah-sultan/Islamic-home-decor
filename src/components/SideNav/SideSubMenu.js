import Link from "next/link"
import { useEffect, useState } from "react"

function SideSubMenu(props) {

    const [isTrue, setIsTrue] = useState(false)

    useEffect(() => {
        setIsTrue(props.showSubNav)
    })

    console.log(isTrue)
    return (
        <div className={`md:w-[270px] bg-white md:shadow-md md:absolute top-7 md:invisible md:opacity-0 trns-1 left-full md:border border-gray-100 px-4 group-hover:top-0 group-hover:visible origin-top group-hover:opacity-100  trns-1 ${isTrue? 'block' : 'hidden md:block'}`}>
            <ul>
                {
                    props.subMenudata.map((list, index) => (
                        <li key={index} className="py-2.5 border-b border-b-gray-200 last:border-0">
                            <Link href={list.url}>
                                <span className="text-black hover:text-primary ">{list.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideSubMenu