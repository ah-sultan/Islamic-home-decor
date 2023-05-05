import Image from "next/image"
import Link from "next/link"

import { AiFillStar } from 'react-icons/ai'


function ProductCard(props) {
    const rate = Math.floor(props.rating.rate)
    const discount = 10
    return (
        <>
            <div className="w-full">
                <div className="w-full h-[240px] border bg-white overflow-hidden center-child">
                    <Image src={props.img} alt="product-image" width={270} height={150} className="max-h-full" />
                </div>
                <div className="pt-2">
                    <Link href="/">
                        <span className="text text-sm text-blue-400 capitalize">{props.title.substring(1, 30)}</span>
                    </Link>
                    <div className="my-6 flex items-center">
                        <div>
                            {
                                Array(rate).fill().map((_, index) => (
                                    <AiFillStar key={index} className="text-accent inline-block mr-0.5" />
                                ))
                            }

                            {
                                Array(5 - rate).fill().map((_, index) => (
                                    <AiFillStar key={index} className="text-gray-300 inline-block mr-0.5" />
                                ))
                            }
                        </div>
                        <span className="inline-block pl-3 text-blue-400 text-sm">{props.rating.count} reviews</span>
                    </div>
                    <div className="">
                        <span>
                            ${props.price}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard