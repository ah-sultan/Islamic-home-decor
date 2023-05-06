import Link from 'next/link'
import React from 'react'

function Breadcrumb(props) {
    return (
        <>
            <section className="py-2 bg-gray-100">
                <div className="container">
                    <ul className='flex '>
                        {
                            props.pages.map((title, index) => {
                                return (
                                    <li className="text-sm capitalize after:content-['/'] after:inline-block after:px-1.5 after:last:content-[none]" key={index}>
                                        <Link href={`/${title}`}>
                                            {title}
                                        </Link>
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