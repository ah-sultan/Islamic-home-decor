import SideNav from "@/components/SideNav/SideNav"
import Image from "next/image"
// Swipper JS ==================
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import 'swiper/css';

// Images
import heroImg1 from '../../../public/images/hero/hero-image-1.jpg'
import heroImg2 from '../../../public/images/hero/hero-image-2.jpg'
import heroImg3 from '../../../public/images/hero/hero-image-3.jpg'


function Hero() {
    return (
        <>
            <section className="pt-8">
                <div className="container">
                    <div className="flex gap-x-px">
                        {/* Side Navbar */}
                        <div className="hidden lg:block lg:w-3/12">
                            <div className="bg-white border border-gray-200 h-full">
                                <SideNav />
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="w-full lg:w-9/12">
                            <Swiper  
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            loop={true}
                            className="HeroSWiper"
                            
                            >
                                <SwiperSlide>
                                    <Image src={heroImg1} alt="hero-image" width={900} height={650}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={heroImg2} alt="hero-image" width={900} height={650}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={heroImg3} alt="hero-image" width={900} height={650}/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero