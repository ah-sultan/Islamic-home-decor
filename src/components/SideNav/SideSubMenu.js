import Link from "next/link"

function SideSubMenu(props) {
    return (
        <div className="w-[270px] bg-white shadow-md absolute top-7 invisible opacity-0 trns-1 left-full border border-gray-100 px-4 group-hover:top-0 group-hover:visible group-hover:opacity-100">
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