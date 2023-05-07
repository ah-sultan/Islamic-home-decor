import Image from "next/image"
import Link from "next/link"


// Images 
import aboutImg from '../../public/images/about-us/about-img.png'
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
function about() {
    return (
        <>
            <Breadcrumb pages={['Home', 'about']} />
            <section>
                <div class="container">
                    <div class="w-full lg:flex items-center pb-10 lg:pb-0 gap-7 mt-20">
                        <div class="w-5/12 h-auto rounded overflow-hidden my-5 lg:my-0">
                            <Image src={aboutImg} alt="about" class="w-full h" />
                        </div>
                        <div class="w-7/12">
                            <h1 class="text-[18px] font-medium text-qblack mb-2.5">What is e-commerce business?</h1>
                            <p class="text-[15px] text-qgraytwo leading-7 mb-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                            <ul class="text-[15px] text-qgraytwo leading-7 list-disc ml-5 mb-7">
                                <li>slim body with metal cover</li>
                                <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                            </ul>
                            <Link href="/contact" className="py-3 px-8 bg-accent">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about