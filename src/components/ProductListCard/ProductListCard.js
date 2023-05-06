
import Image from "next/image"
import Link from "next/link"
import {AiFillEye, AiOutlineHeart, AiOutlineBarChart} from 'react-icons/ai'

import { AiFillStar } from 'react-icons/ai'


function ProductListCard(props) {
    const rate = Math.floor(props.rating.rate)
    const discount = 10
    const totalDiscount = props.price - discount / 10

    
    return (
        <>
            <div className="w-full flex gap-x-8 p-8 border border-transparent hover:border-gray-300">
                <div className="w-3/12 center-child relative">
                    <Image src={props.img} alt="product-image" width={270} height={150} />
                    <span className="inline-blcok px-2  py-0.5 text-sm absolute right-0 top-0 text-white bg-primary">-{discount}%</span>
                </div>

                <div className="w-6/12">
                    <Link href="/">
                        <span className="text text-sm text-blue-400 capitalize h-10">{props.title.substring(1, 40)}</span>
                    </Link>
                    <div className="pt-4">
                      <p className="text-sm leading-loose text-gray-800">{props.description.substring(1, 100)}</p>
                    </div>
                </div>

                  <div className="w-3/12">
                      <div>
                          <span className="text-primary text-lg">
                              ${props.price}
                          </span>
                          <del className="inline-block pl-2 text-base text-gray-400">
                              {totalDiscount.toFixed(2)}$
                          </del>
                      </div>
                      <div className="flex gap-x-5 items-center mt-2">
                          <button className="flex items-center text-black  hover:text-primary">
                                <AiFillEye/>
                                <span className="capitalize text-sm pl-2">Wishlist</span>
                          </button>
                          <button className="flex items-center text-black  hover:text-primary">
                          <AiOutlineHeart/>
                                <span className="capitalize text-sm pl-2">Compare</span>
                          </button>
                      </div>
                  </div>
            </div>
        </>
    )
}

export default ProductListCard
