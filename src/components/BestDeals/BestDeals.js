import Link from 'next/link'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

// Deals image
import deals_img from '../../../public/images/best-deals/deals-img.png'
import Image from 'next/image';

function BestDeals(props) {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return `<button type="button" class=" ${className} slider-dots"></button>`
        },
        el: ".bestDealsDots",
        type: 'bullets',
    
        
    }
    return (
        <>
            <section className="pt-8">
                <div className="container">
                    <div className="border bg-white shadow-sm">
                        <div className="flex items-center justify-between py-3 px-5 border-b-2 border-gray-300">
                            <div className="flex items-center">
                                <h2 className="section-title mr-16">Deals Of The Day</h2>
                                {/* Countdown Section */}
                                <div className="flex items-center">
                                    <span>Ends after: </span>
                                    <div className="bg-primary inline-flex ml-1 text-white">
                                        <div className="w-[50px] text-white center-child">
                                            <span>07</span>h
                                        </div> :
                                        <div className="w-[50px] text-white center-child">
                                            <span>38</span>m
                                        </div> :
                                        <div className="w-[50px] text-white center-child">
                                            <span>38</span>s
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="text-black">
                                <Link href="/about">
                                    View All
                                </Link>
                            </button>
                        </div>

                        {/* Card Section */}
                        <div className="mt-8 p-5 pt-0 group-btn relative">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={24}
                                agination={pagination}
                                modules={[Pagination]}
                                className="testimoniaSwiper"
                                navigation = {{
                                        nextEl: '.nextSlide',
                                        prevEl: '.prevSlide',
                                }}
                            >
                                {
                                    props.product.map((data, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <ProductCard img={data.image} title={data.title} rating={data.rating} price={data.price} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            {/* Button Section */}
                            <button className="trns-1 absolute w-10 h-10 rounded-full center-child left-0  top-1/2 -translate-y-1/2 -mt-5 text-gray-400 z-30 hover:bg-primary hover:text-white prevSlide">
                                <BsChevronLeft className="text-xl"/>
                            </button>
                            <button className="trns-1 absolute w-10 h-10 rounded-full center-child right-0  top-1/2 -translate-y-1/2 -mt-5 text-gray-400 z-30 hover:bg-primary hover:text-white nextSlide">
                                <BsChevronRight className="text-xl"/>
                            </button>

                            <div className="flex justify-center gap-x-3 bestDealsDots mt-5 ">
                                    <button className="slider-dots"></button>
                                    <button className="slider-dots"></button>
                                    <button className="slider-dots"></button>
                            </div>
                        </div>

                        {/* Banner Image */}
                        <div>
                            <Image src={deals_img} alt="deals-img" width={1000} height={200} className="w-full max-h-full"/>
                        </div>
                     </div>
                </div>
            </section>
        </>
    )
}

export default BestDeals