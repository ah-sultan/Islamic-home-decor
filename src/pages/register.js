import Link from "next/link"
import { useRef, useState } from "react";


import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import Captcha from "@/components/Captcha/Captcha";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";


function register() {
    const [formData, setFormData] = useState(null)

    const firstName = useRef()
    const lastName = useRef()
    const newsletter = useRef()
    const address = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const captcha = useRef()

    console.log(formData)
    const submitForm = (e) => {
        e.preventDefault()

        setFormData({
            firstName : firstName.current.value,
            lastName : lastName.current.value,
            newsletter : newsletter.current.checked,
            address : address.current.value,
            email : email.current.value,
            password : password.current.value,
            confirmPassword : confirmPassword.current.value,
            captcha : captcha.current.value,
            
        })
    }

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
                            <form action="#" onSubmit={submitForm}>
                                <div className="p-7 bg-white shadow-sm mt-6">
                                    {/* First name */}
                                    <div>
                                        <label className="mb-2 block" htmlFor="firstName">First Name <span className="text-red-600">*</span></label>
                                        <input id="firstName" type="text" className="form-input" required ref={firstName}/>
                                    </div>
                                    {/* Last name */}
                                    <div className="mt-4">
                                        <label className="mb-2 block" htmlFor="lastName">First Name <span className="text-red-600">*</span></label>
                                        <input id="text" type="lastName" className="form-input" required ref={lastName}/>
                                    </div>

                                    {/* News Letter */}
                                    <div className="mt-4">
                                        <input id="newsletter" type="checkbox" ref={newsletter}/>
                                        <label className="inline-block pl-3" htmlFor="lastName">Sign Up for Newsletter</label>
                                    </div>
                                </div>

                                <div className="p-7 bg-white shadow-sm mt-6">
                                    {/* Email  */}
                                    <div>
                                        <label className="mb-2 block" htmlFor="email">Email <span className="text-red-600">*</span></label>
                                        <input id="email" type="email" className="form-input" required ref={email} />
                                    </div>
                                    {/* Address */}
                                    <div className="mt-4">
                                        <label className="mb-2 block" htmlFor="address">Address <span className="text-red-600">*</span></label>
                                        <input id="address" type="text" className="form-input" required  ref={address}/>
                                    </div>
                                    {/* Password */}
                                    <div className="mt-4">
                                        <label className="mb-2 block" htmlFor="lastName">Password <span className="text-red-600">*</span></label>
                                        <input id="Password" type="password" className="form-input" required ref={password}/>
                                        <p className={`bg-gray-100 py-1 px-2 text-sm`}>Password Strength: {`No Password`}</p>
                                    </div>

                                    {/* Confirm Password name */}
                                    <div className="mt-4">
                                        <label className="mb-2 block" htmlFor="ConfirmPassword" >Confirm Password<span className="text-red-600">*</span></label>
                                        <input id="ConfirmPassword" type="password" className="form-input" required ref={confirmPassword}/>
                                    </div>

                                    {/* Captcha Login */}
                                    <div className="mt-4">
                                        <label className="mb-2 block" htmlFor="captcha">Please type the letters and numbers below<span className="text-red-600">*</span></label>
                                        <input id="captcha" type="password" className="form-input" required ref={captcha}/>
                                    </div>
                                    <div className="mt-4 flex items-center">
                                        <Captcha />
                                    </div>
                                </div>
                                <button type="submit" className="bg-accent py-3 w-full block text-center mt-5">Create An Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default register