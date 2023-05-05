import React from 'react'

const list = [
    {
        title: 'Call: 09678-300400',
        url: 'Call: 09678-300400'
    },
    {
        title: 'FB',
        url: 'FB'
    },

    {
        title: 'FB gropup',
        url: 'FB'
    },
    {
        title: 'PAY NOW',
        url: 'PAY NOW'
    },

]

function TopBar() {
    return (
        <>
            <div className="bg-gray-100 py-1">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <p className="text-black text-sm">Please Call us to check the Stock before Placing the order!</p>
                        <ul className="flex items-center justify-end gap-7">
                            {
                                list.map((list, index) => (
                                    <li key={index} className=" font-light text-sm relative after:absolute after:content-['|'] after:-right-3.5 after:top-1/2 after:-translate-y-1/2">
                                        <a href={list.url}>{list.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar