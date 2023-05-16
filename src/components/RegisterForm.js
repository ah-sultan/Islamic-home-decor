import Captcha from "@/components/Captcha/Captcha";

function RegisterForm() {
    const [formData, setFormData] = useState(null)

    const firstName = useRef()
    const lastName = useRef()
    const newsletter = useRef()
    const address = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const captcha = useRef()

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
    </>
  )
}

export default RegisterForm