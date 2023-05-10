import { useEffect, useState } from "react"
import {RiDeleteBinLine} from 'react-icons/ri'
import Image from "next/image"
import img1 from '../../../public/images/hero/hero-img-7.png'


function CartCard(props){
  const [count, setCount] = useState(0)
  useEffect(() =>{
    if(count <=0){
      setCount(0)
    }
  })
  return(
    <div className="flex items-center w-full mb-6 pb-6 border-b border-gray-100">
      <div className="rounded overflow-hidden basis-[20%]">
        <Image src={img1} width={150} height={300}/>
      </div>
      <div className="pl-4 md:pl-6 basis-[80%]">
        <div className="flex justify-between items-center">
        <h5 className="text-sm md:text-lg text-dark-900 font-semibold ">Rey Nylon Backpack</h5>
        <span className="center-child py-0.5 md:py-0.5 px-1 md:px-2 border border-black rounded-sm text-xs leading-none md:text-sm">$50</span>
        </div>
        <div className="flex items-center md:mt-2 mb-3 md:mb-7">
            <span className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal">Red</span>
            <span className="h-3 md:h-5 border-l border-gray-300 mx-4"></span>
            <span className="text-[12px] md:text-sm text-tGreay-900 leading-relaxed font-normal">XL</span>
        </div>
        <div className="flex justify-between items-start border-t border-gray-300 pt-3">
          
          <div className="flex">
            {/* cart item counter  */}
            <div className="border-y border-black w-fit  items-center grid grid-cols-3">
              <button type="button" className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-black text-base leading-none border-x border-black border-solid" onClick={() => setCount(count - 1)}>-</button>
              <span className="flex-[3] text-sm leading-none text-black inline-block text-center">{count <= 0? '0' : count}</span>
              <button type="button" className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-black text-base leading-none border-x border-black border-solid" onClick={() => setCount(count + 1)}>+</button>
            </div>
            {/* remove cart Item */}
            <button className="text-gray-500 ml-3 text-2xl">
              <RiDeleteBinLine/>
            </button>
          </div>
          
          {/* Cart price */}
          <p className="pt-2 text-sm md:text-base leading-1.2 text-gray-800 font-medium">
            <span className="mr-2 inline-block">Total:</span>
            <span>$70</span>
          </p>
          </div>
      </div>
    </div>
  )
}

export default CartCard
