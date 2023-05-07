import Image from 'next/image'
import img1 from '../../../public/images/cart/cartImg.jpg'
import Overlay from '../Overlay/Overlay'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

function SiteCartCard(props){
    return(
        <>
        <div className="flex">
           <div className="flex-1">
                <a href="#">
                    <Image src={props.img} alt="img"/>
                </a>
           </div>
           <div className="pl-15px flex-[3] xs:flex-[2]">
                <div className="flex items-center justify-between mb-2">
                    <a href="#" className="text-sm leading-relaxed font-normal text-black hover:text-primary">{props.title}</a>
                    <button className="text-xl leading-relaxed font-normal text-black hover:text-primary" type="button">×</button>
                </div>
                <h6 className="text-sm leading-relaxed font-normal text-gray-600">1 x <span className="text-lg leading-relaxed font-medium text-primary">${props.price}</span></h6>
           </div>
        </div>
        </>
    )
}



function SideCart(props) {

    const showCart = props.showCart
     const cartItems = 7

  return (
    <>
        <Overlay showOverlay={showCart}/>
        <div className={`fixed  w-[300px] sm:w-[400px] h-full z-[150] top-0 bottom-0 -right-[500px] duration-500 trns-1 invisible `} style={showCart? {visibility : 'visible', right : '0'} : undefined}>
                <div className="bg-white py-5 h-full grid px-4">
                    <div className="max-h-full overflow-hidden grid">
                        {/* Cart Header Section =============== */}
                        <div className="flex justify-between mb-8 border-b border-gray-200 pb-2">
                            <h6 className="text-xl leading-relaxed font-medium">Your Cart Items {cartItems}</h6>
                            <button className="group/closeBtn w-5 h-5 relative" onClick={() => props.cartHandler(false)}>
                                <AiOutlineClose className="group-hover/closeBtn:rotate-180 trns-1 text-2xl"/>
                            </button>
                        </div>
                        {/* Product Card ===============*/}
                        <div className="overflow-y-scroll">
                            <ul className=" pr-3">
                                {
                                    Array(7).fill().map((_, index) => {
                                        return(
                                            <li key={index} className="mb-8 border-b border-b-gray-200 pb-4">
                                                <SiteCartCard img={img1} title="Women's Elizabeth Coat" price="43.28"/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Button Section ===============*/}
                    <div className="self-end">
                        <Link  onClick={() => props.cartHandler(false)} href="/cart" className="py-2.5 px-15px block text-base leading-relaxed text-white text-center trns-1 bg-black hover:bg-primary-900 mb-3">View Cart</Link>
                        <Link  onClick={() => props.cartHandler(false)} href="/checkout" className="py-2.5 px-15px block text-base leading-relaxed text-white text-center trns-1  bg-primary">Check Out</Link>
                    </div>
                </div>
        </div>
    </>
  )
}
export default SideCart
