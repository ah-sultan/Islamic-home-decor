import { useState } from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaList, FaAngleDown } from 'react-icons/fa'


function CetagoryTopBar(props) {
    const [showSort, setShowSort] = useState(false)
    const [sortValue, setSortValue] = useState('Relevance')

    const showSortVisible = showSort ? {
        transform: 'scale(1) translate(0)',
        visibility: 'visible',
        opacity: 1,

    } : undefined

    function sortHandler(visibility, value) {
        setShowSort(visibility)
        setSortValue(value)
    }

    const sortTile = {
        0: 'Name, A to Z',
        1: 'Name, Z to AZ',
        2: 'Price, low to high',
        3: 'Price, high to low',
    }

    const sortTitle = [
        {
            id: 1,
            title: 'Name, A to Z'
        },

        {
            id: 2,
            title: 'Name, A to Z'
        },

        {
            id: 3,
            title: 'Name, A to Z'
        }
    ]

    return (
        <div className="w-full bg-gray-100 py-2 px-6 flex flex-wrap items-center justify-between mb-12">
            <p className="font-normal text-sm text-black">254 Product Found</p>

            {/* Nice Selection */}
            <div className="w-auto flex  bg-white border-gray-200 py-1 px-2">
                <p className="text-sm">Sort By:</p>
                <div className="pl-2.5 w-[158px relative">
                    <div className="flex items-center justify-between" onClick={() => setShowSort(!showSort)}>
                        <span className="text-sm text-black">{sortValue}</span>
                        <FaAngleDown className="ml-2" />
                    </div>
                    <ul className="absolute z-10 min-w-[180px] top-[125%] left-0 shadow-sm bg-white border border-gray-100 trns-1 scale-75 -translate-x-[21px] opacity-0 invisible" style={showSortVisible}>

                        {
                            sortTitle.map((item, index) => {
                                return (
                                    <li key={index} className={`py-2 px-4 pr-7 text-black text-sm hover:bg-gray-100 ${sortValue === sortTitle[0] ? 'bg-primary-200 !font-bold' : undefined}`} onClick={() => sortHandler(false, item.title)}>{item.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* Buttton section */}
            <div className="center-child gap-x-5">
                <button className={`text-lg text-primary ${props.viewTypeBtn === 'grid' ? 'text-primary-900' : undefined}`} onClick={() => props.pViewHandler('grid')}>
                    <BsGrid3X3GapFill />
                </button>
                <button className={`text-lg text-primary ${props.viewTypeBtn === 'list' ? 'text-primary-900' : undefined}`} onClick={() => props.pViewHandler('list')}>
                    <FaList />
                </button>
            </div>
        </div>
    )
}

export default CetagoryTopBar 