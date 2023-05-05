import Link from 'next/link'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function BestDeals(props) {
    return (
        <>
            <section className="pt-8">
                <div className="container">
                    <div className="border border-gray-200 shadow-md">
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
                        <div className="mt-8 p-5 pt-0">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={24}
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestDeals