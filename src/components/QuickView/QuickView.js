import Image from 'next/image'
import { useState, useEffect } from 'react';

import { FaStar, FaRegHeart, FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa'

// Swiper JS  
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

function QuickView(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count <= 0) {
            setCount(0)
        }
    })

    const product = props.product
    const images = Array(5).fill(product.img)
    const rate = Math.floor(product.rating.rate)
    const discount = 10
    const discountprice = product.price - discount / 10

    return (
        <div className="fixed left-0 right-0 top-0 bottom-0 z-[120] bg-[rgba(0,0,0,.9)]">
            <div className="absolute bg-slate-900 left-0 right-0 bottom-0 top">

            </div>
            <div className="container center-child h-full">
                <div className="bg-white w-10/12 mx-auto p-8">
                    <div className="flex flex-col lg:flex lg:flex-row gap-y-7 gap-x-8 items-start">
                        {/* Images Section */}
                        <div className="lg:w-5/12">
                            <div className="border">
                                {/* Main Image Section */}
                                <Swiper
                                    spaceBetween={10}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"

                                >
                                    {
                                        images.map((image, index) =>
                                            <SwiperSlide key={index}>
                                                <div className="center-child p-5">
                                                    <Image src={image} alt="products" className="mx-auto" width={300} height={420} />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                            {/* Thumb Images */}
                            <div className="mt-6">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={5}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"

                                >
                                    {
                                        images.map((image, index) =>
                                            <SwiperSlide key={index}>
                                                <div className="p-4 border">
                                                    <Image src={image} alt="img-1" width={500} height={600} className="w-full" />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                        </div>
                        {/* Text Section  */}
                        <div className="lg:w-7/12">
                            <h4 className="text-xl leading-normal font-medium text-black mb-3">{product.title}</h4>
                            <h6 className="text-primary text-lg leading-relaxed mb-2">${product.price} <span className="text-gray-500"><del>${discountprice}</del></span></h6>
                            {/* Reviews Section */}
                            <div>
                                <div className="inline-flex gap-x-1.5 mr-3">
                                    {
                                        Array(rate).fill().map((_, id) => <FaStar key={id} className="text-accent text-sm leading-none" />)
                                    }

                                    {
                                        Array(5 - rate).fill().map((_, id) => <FaStar key={id} className="text-gray-300 text-sm leading-none" />)
                                    }
                                </div>
                                <span className="text-sm md:text-base leading-none text-gray-400 font-normal">( {product.rating.count} Customer Review )</span>
                            </div>

                            {/* Product Colors */}
                            <div className="flex items-center mt-4">
                                <span className="text-sm leading-relaxed font-semibold text-gray-800 inline-block mr-4">Color:</span>
                                <div>
                                    {
                                        props.variable ? product.colorHex.map((color, id) => {
                                            return <button key={id} className={`w-6 h-6 rounded-full mr-1.5 border border-gray-300`} style={{ background: 'red' }}></button>
                                        }) : 'No Colors'
                                    }
                                </div>
                            </div>
                            {/* Product Size */}
                            <div className="flex items-center mt-3 mb-3">
                                <span className="text-sm leading-relaxed font-semibold text-gray-800 inline-block min-w-[70px]">Size:</span>
                                <div>
                                    {
                                        props.variable ? product.size.map((size, id) => {
                                            return <button key={id} className={`w-7  mr-2 text-sm text-gray-800 uppercase font-semibold`}>{size}</button>
                                        }) : 'No Size'
                                    }
                                </div>
                            </div>

                            {/* Drescription section */}
                            <p className="text-sm leading-relaxed text-gray-600 font-normal mb-4">{product.description.substring(0,300)} ...</p>

                            {/* Button Section */}
                            <div className="flex gap-x-2 sm:gap-x-2.5 mb-7">
                                <div className="w-18 md:w-24 h-12 rounded-sm bg-gray-800 flex items-center justify-between px-2">
                                    <button type="button" className="text-white text-lg leading-5 font-medium" onClick={() => setCount(count - 1)}>-</button>
                                    <input type="text" value={count <= 0 ? '0' : count} onChange={(e) => setCount(e.target.value)} className="border-0 bg-transparent text-sm leading-relaxed text-white text-center font-normal focus:outline-none w-1/2" />
                                    <button type="button" className="text-white text-lg leading-5 font-medium" onClick={() => setCount(count + 1)}>+</button>
                                </div>
                                <button className="px-2.5 sm:px-8 rounded-sm h-12 bg-primary text-white font-semibold text-[12px] sm:text-sm leading-relaxed block uppercase hover:bg-black trns-1 tracking-widest">Add To Cart</button>
                                <button className="w-12 h-12 rounded-sm center-child bg-gray-800 text-white text-lg hover:bg-black trns-1"><FaRegHeart /></button>
                            </div>

                            {/* info section */}
                            <p className="text-base leading-relaxed text-tGreay-200 font-semibold">SKU <span className="font-normal text-tGreay-150 hover:text-primary-900">{product.sku}</span></p>
                            <p className="text-base leading-relaxed text-tGreay-200 font-semibold my-2.5">Categories: <span className="font-normal text-tGreay-150 hover:text-primary-900">{product.category}</span></p>

                            {/* Share */}
                            <div>
                                <span className="text-base leading-relaxed text-black font-semibold">Share</span>
                                <div className="inline-flex gap-x-5 pl-6">
                                    <a href="#" className="text-gray-500 hover:text-primary"><FaFacebookF /></a>
                                    <a href="#" className="text-gray-500 hover:text-primary"><FaTwitter /></a>
                                    <a href="#" className="text-gray-500 hover:text-primary"><FaGoogle /></a>
                                    <a href="#" className="text-gray-500 hover:text-primary"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default QuickView
