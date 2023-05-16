import Link from "next/link"
import { useRef, useState } from "react";


import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import RegisterForm from "@/components/RegisterForm";

function register() {

    return (
        <>
            <Breadcrumb pages={['Register']} />
            <section className="py-20 bg-gray-100">
                <div className="container">
                    <div className="w-full md:w-[600px] mx-auto">
                        <div>
                            <div>
                                <Link href="/" className="flex items-center rounded-sm overflow-hidden">
                                    <div className="center-child w-12 h-12 bg-blue-950">
                                        <FaFacebookF className="text-white" />
                                    </div>
                                    <div className="bg-blue-900 h-12 flex items-center w-full px-4 text-white">
                                        <span>Sign With Facebook</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="mt-3">
                                <Link href="/" className="flex items-center rounded-sm overflow-hidden">
                                    <div className="center-child w-12 h-12 bg-rose-950">
                                        <FaGoogle className="text-white" />
                                    </div>
                                    <div className="bg-rose-900 h-12 flex items-center w-full px-4 text-white">
                                        <span>Sign With Google</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <h3 className="section-title mt-7 mb-5">New Customers</h3>
                        <p className="text-gray-700 ">Creating an account has many benefits: check out faster, keep more than one address, track orders and more</p>
                        <div>
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default register