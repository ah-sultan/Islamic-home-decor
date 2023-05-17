import Link from 'next/link'
import React from 'react'

function Breadcrumb(props) {
    return (
        <>
            <section className="py-2.5 bg-gray-200">
                <div className="container">
                    <ul className='flex items-center'>
                        <li className="text-sm text-blue-400 last:text-black capitalize" >
                            <Link href='/'>home</Link>
                        </li>
                            {
                                props.pages.map((title, index) => {
                                    return (
                                        <li ld={props.pages.length} key={index} className="flex items-center text-sm text-blue-400 capitalize before:content-['/'] before:inline-block before:px-2">
                                            
                                            {index === props.pages.length - 1? <span className="text-black">{
                                                title.length === 15? title.substring(1,15) : title.substring(0,30)
                                            }</span> : <Link className="line-clamp-1" href={title}>{title}</Link>}
                                            
                                        </li>
                                    )
                                })
                            }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Breadcrumb
