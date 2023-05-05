import Link from "next/link"
import ProductCard from "../ProductCard/ProductCard"
import Image from "next/image"
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';

// images 
import productImage from '../../../public/images/main-product/banner-img.png'
function MainProduct(props) {
  return (
    <>
        <section className="pt-8">
                <div className="container">
                    <div className="border bg-white shadow-sm">
                        <div className="flex items-center justify-between py-3 px-5 border-b-2 border-gray-300">
                            <h2 className="section-title mr-16">Consumer Electric</h2>
                            <ul className="flex items-center justify-end gap-x-6">
                            {
                                // Menu Section
                                ['Electronics', 'Audios & Theaters','Camera','TV & Videos'].map((title, index) => (
                                    <li key={index} className="text-black text-sm hover:text-accent">{title}</li>
                                ))
                            }
                            </ul>
                        </div>
                        
                        {/* Top Header Section */}
                        <div className="flex">
                            {/* Left Sidebar */}
                            <div className="w-9/12">
                                {/* Banner Images */}
                                <div className="p-5">
                                    <Image src={productImage} alt="images"/>
                                </div>
                                {/* Menu Item */}
                                <div className="px-5 border-b border-b-gray-400 pb-3.5 flex items-center justify-between">
                                    <ul className="flex gap-x-6">
                                        {
                                            ['New Arrivals', 'Best Selling', 'Sales'].map((title, index) => (
                                                <li className="text-gray-400 hover:text-black" key={index}>{title}</li>
                                            ))
                                        }
                                    </ul>
                                    <div className="flex items-center gap-x-4">
                                        <button className="slider-arrow text-black"><BsChevronLeft/></button>
                                        <button className="slider-arrow text-black"><BsChevronRight/></button>
                                    </div>
                                </div>
                                {/* Card Section */}
                                <div className="mt-8 p-5 pt-0 group-btn relative">
                                    <Swiper
                                    slidesPerView={4}
                                    spaceBetween={24}
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
                                </div>
                            </div>
                            <div className="w-3/12 border-l border-gray-200">
                                <div className="px-5">
                                    <h5 className="text-black border-b border-gray-200 py-4">Recommended For You</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default MainProduct