import { BiChevronRight } from 'react-icons/bi'
import { SideNavData } from './SideNavData'
import SideSubMenu from './SideSubMenu'
function SideNav() {
    return (
        <ul className='py-3.5 relative'>
            {
                SideNavData.map((list, index) => {
                    return (
                        <li key={index} className="py-2.5 hover:bg-primary px-4 hover:text-nav flex item-center justify-between text-base leading-none group">
                            <span>{list.title}</span>
                            <BiChevronRight className="text-xl" />
                            {
                                list.dropdown ? <SideSubMenu subMenudata={list.dropdown} /> : undefined
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SideNav