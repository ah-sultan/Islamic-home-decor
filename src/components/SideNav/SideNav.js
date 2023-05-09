import { BiChevronRight } from 'react-icons/bi'
import { SideNavData } from './SideNavData'
import SideSubMenu from './SideSubMenu'
import { useState } from 'react'
function SideNav() {
    const [showSubNav, setShowSubNav] = useState("0");

    const subNavToggler = (index) => {
        if (showSubNav === index) {
            return setShowSubNav("0");
        }
        setShowSubNav(index);


    }

    return (
        <ul className='py-3.5 relative'>
            {
                SideNavData.map((list, index) => {
                    return (
                        <li key={index} className="py-2.5 lg:hover:bg-primary lg:px-4 lg:hover:text-nav  text-sm lg:text-base leading-none group border-b">
                            <div className="flex item-center justify-between">
                                <span>{list.title}</span>
                                <button onClick={() => subNavToggler(index)}>
                                    <BiChevronRight className={`text-xl trns-1  lg:rotate-0 ${showSubNav === index ? '-rotate-90' : 'rotate-90'}`} />
                                </button>
                            </div>
                            {
                                list.dropdown ? <SideSubMenu subMenudata={list.dropdown} showSubNav={showSubNav === index ? true : false} /> : undefined
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SideNav