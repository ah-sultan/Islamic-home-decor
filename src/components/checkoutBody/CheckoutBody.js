import { useRef, useState } from "react"
const accor = [
    {
        title : 'Direct bank transfer',
        text : 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
    },

    {
        title : 'Check payments',
        text : 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
    },

    {
        title : 'Cash on delivery',
        text : 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
    }

]
function CheckoutBody() {
    const [formData, setFormData] = useState(null)

    const firstName = useRef()
    const lastName = useRef()
    const countryName = useRef()
    const streetName = useRef()
    const apartment = useRef()
    const state = useRef()
    const postCode = useRef()
    const phoneNumber = useRef()
    const emailAddress = useRef()
    const orderNotes = useRef()
    const paymentsMethode = useRef()


    const submitForm = (e) => {
        e.preventDefault()

        setFormData({
            firstName : firstName.current.value,
            lastName : lastName.current.value,
            countryName : countryName.current.value,
            streetName : streetName.current.value,
            apartment : apartment.current.value,
            state : state.current.value,
            postCode : postCode.current.value,
            phoneNumber : phoneNumber.current.value,
            emailAddress : emailAddress.current.value,
            orderNotes : orderNotes.current.value,
            paymentsMethode : paymentsMethode.current.value
        })
    }
    
  return (
    <>
    
        <section>
            <div className="container">
                <form onSubmit={submitForm} >
                <div className="py-16 lg:py-20 xl:py-20">
                    <div className="flex flex-col lg:flex-row gap-x-8">
                        <div className="w-full lg:w-7/12 lg-px-0">
                            <div>
                                <h4 className="text-2xl font-semibold text-black mb-7">Billing Details</h4>
                                {/* Form Section */}
                                <div className="flex flex-col md:flex-row gap-x-6 mb-6">
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="fName" className="block text-base text-dark-700 mb-2.5">First Name</label>
                                        <input type="text" id="fName" className="form-input" ref={firstName}/>
                                    </div>
                                    <div className="w-full md:w-1/2 mt-6 md:mt-0">
                                        <label htmlFor="lName" className="block text-base text-dark-700 mb-2.5">Last Name</label>
                                        <input type="text" id="lName" className="form-input" ref={lastName}/>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="selectCountry" className="block text-base text-dark-700 mb-2.5">Country Name</label>
                                    <select id="lName" className="form-input bg-transparent" ref={countryName} >
                                        <option value="Select Country">Select Country</option>
                                        <option value="United State">United State</option>
                                        <option value="Canada">Canada</option>
                                        <option value="England">England</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-base text-dark-700 mb-2.5">Street Address</label>
                                    <input type="text" placeholder="House number and street name" id="companyName" className="form-input mb-2.5" ref={streetName}/>
                                    <input type="text" placeholder="Apartment, suite, unit etc." id="companyName" className="form-input" ref={apartment}/>
                                </div>
                                <div className="flex flex-col md:flex-row gap-x-6 mb-6 ">
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="stateCounty" className="block text-base text-dark-700 mb-2.5">State / County</label>
                                        <input type="text" id="stateCounty" className="form-input" ref={state}/>
                                    </div>
                                    <div className="w-full md:w-1/2 mt-6 md:mt-0">
                                        <label htmlFor="postCodeZIp" className="block text-base text-dark-700 mb-2.5" >Postcode / ZIP</label>
                                        <input type="text" id="postCodeZIp" className="form-input" ref={postCode} />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-x-6 mb-6">
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="phone" className="block text-base text-dark-700 mb-2.5">Phone</label>
                                        <input type="text" id="phone" className="form-input" ref={phoneNumber}/>
                                    </div>
                                    <div className="w-full md:w-1/2 mt-6 md:mt-0">
                                        <label htmlFor="email" className="block text-base text-dark-700 mb-2.5">Email Address</label>
                                        <input type="email" id="email" className="form-input" ref={emailAddress}/>
                                    </div>
                                </div>
                                <div className="py-7">
                                    <h4 className="text-lg leading-1.2 text-black font-semibold mb-2.5">Additional information</h4>
                                    <label className="block text-base text-gray-800 mb-2.5" id="message"> Order notes </label>
                                    <textarea type="text" placeholder="Notes about your order, e.g. special notes for delivery." id="message" className="w-full border border-gray-100 h-[160px] form-input text-gray-800 focus:outline-none" ref={orderNotes}/>
                                </div>
                            </div>
                        </div>
                        {/* Ordere Information card ======= */}
                        <div className="w-full sm:w-[480px] lg:w-5/12 mt-7 xl:mt-0">
                            <h4 className="text-2xl font-semibold text-black mb-7">Your order</h4>
                            <div className="p-5 sm:px-9 sm:py-11 bg-gray-200">
                                <ul className="flex justify-between mb-5 sm:mb-7 border-b border-b-gray-300">
                                    <li className="text-base leading-relaxed text-black font-semibold">Product Name</li>
                                    <li className="text-base leading-relaxed text-black font-semibold">Price</li>
                                </ul>
                                <div className="py-3 sm:pt-7 sm:pb-5 border-y border-gray-200 ">
                                    <ul className="flex justify-between mb-2.5">
                                        <li className="text-dark-700 text-base leading-relaxed">Product Name X 1</li>
                                        <li className="text-dark-700 text-base leading-relaxed">$100</li>
                                    </ul>
                                    <ul className="flex justify-between mb-2.5">
                                        <li className="text-gray-800 text-base leading-relaxed">Product Name X 1</li>
                                        <li className="text-gray-800 text-base leading-relaxed">$100</li>
                                    </ul>
                                </div>
                                <ul className="flex justify-between mt-4 sm:mt-7 mb-2 sm:mb-4 border-b">
                                    <li className="text-black font-semibold text-base leading-relaxed">Shipping</li>
                                    <li className="text-gray-800 text-base leading-relaxed">$100</li>
                                </ul>
                                <div className="py-2 sm:py-3 border-y border-gray-200 border-t border-t-gray-500">
                                    <ul className="flex justify-between ">
                                        <li className="text-black font-semibold text-base leading-relaxed">Total:</li>
                                        <li className="text-primary font-semibold leading-relaxed">$100</li>
                                    </ul>
                                </div>
                                {/* Pyments System */}
                                <ul className="mt-4 sm:mt-9">
                                    {
                                        accor.map((items, index) => {
                                            return(
                                                <li key={index} className="mb-2 sm:mb-3">
                                                    <input type="radio" id={items.title} name="payments" value={items.title} ref={paymentsMethode}/>
                                                    <label htmlFor={items.payments} className="text-base inline-block pl-2">{items.title}</label>
                                                    
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <button type="submit" className="w-full mt-6 py-4 bg-primary text-center block text-white text-base leading-none uppercase hover:bg-black font-bold">Place Order</button>
                        </div>
                    </div>
                </div>
                </form>
                
            </div>
        </section>
    </>
  )
}

export default CheckoutBody