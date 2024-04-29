import { useContext, useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { RiBook2Line } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContextProvider";

import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const SignUp = () => {

    const { signUp, setLoading, updateUserProfile, setUser,user } = useContext(AuthContext)

    // password state
    const [livePassword, setLivePassword] = useState('');
    const [liveConfirmPassword, setLiveConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    // error state
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [fulfillBar, setFulfillBar] = useState(0);
    const [fulfilState, setFulfillState] = useState('');

    // password validation before firebase authentication
    useEffect(() => {
        if (livePassword.length > 0) {
            let newError = '';

            if (!/[A-Z]/.test(livePassword)) {
                newError = 'Password must have an uppercase letter';
            } else if (!/[a-z]/.test(livePassword)) {
                newError = 'Password must have a lowercase letter';
            } else if (!/\d/.test(livePassword)) {
                newError = 'Password must have a digit';
            } else if (!/[^a-zA-Z0-9]/.test(livePassword)) {
                newError = 'Password must have at least one special character';
            } else if (livePassword.length < 6) {
                newError = 'Password must have at least 6 characters';
            } else {
                newError = '';
            }

            setPasswordError(newError);
        } else {
            setPasswordError('');
        }
    }, [livePassword,]);
    useEffect(() => {

        if (livePassword.length > 0) {
            let fulfilledConditions = 0;

            if (/[A-Z]/.test(livePassword)) {
                fulfilledConditions++;
            } 
            if (/[a-z]/.test(livePassword)) {
                fulfilledConditions++;
            }
            if (/\d/.test(livePassword)) {
                fulfilledConditions++;
            } 
            if (/[^a-zA-Z0-9]/.test(livePassword)) {
                fulfilledConditions++;
            } 
            if (livePassword.length >= 6) {
                fulfilledConditions++;
            } 
            if (livePassword.length === 0) {
                fulfilledConditions = 0;
            }
            setFulfillBar(fulfilledConditions);
        }
    }, [livePassword]);


    useEffect(() => {
        if (livePassword.length === 0) {
            setFulfillBar(0)
            setFulfillState('')
        }
        if (fulfillBar === 1) {
            setFulfillState('very week');
        }
        if (fulfillBar === 2) {
            setFulfillState(' week');
        }
        if (fulfillBar === 3) {
            setFulfillState(' medium');
        }
        if (fulfillBar === 4) {
            setFulfillState(' strong');
        }

        if (fulfillBar > 4 && livePassword.length >= 6) {
            setFulfillState(' hard');
        }
},[livePassword,fulfillBar])

    // Confirm password validation
    useEffect(() => {
        if (liveConfirmPassword.length > 0) {
            if (livePassword !== liveConfirmPassword) {
                setConfirmPasswordError(2);
            } else {
                setConfirmPasswordError(3);
            }
        } else {
            setConfirmPasswordError(1);
        }

    }, [livePassword, fulfillBar, liveConfirmPassword]);
    // console.log(passwordError);
    // console.log(fulfillBar);
    // console.log(confirmPasswordError);
    // console.log(livePassword);



    //----- validation done before initialization of firebase----
    // auth start
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        const { name, email, url, password, confirmPassword } = data;
        if (password === confirmPassword) {
            signUp(email, password)
                .then(result => {
                    // console.log(result.user);
                    updateUserProfile(result.user, name, url)
                        .then(() => {
                            setUser({ ...user, displayName: name, photoURL: url })
                            toast.success('Successfully signed up!')
                    })
                }).catch(err => {
                    setLoading(false);
                    console.log(err.message);
                    const firebaseError = err.message
                    if (firebaseError.includes('already')) {
                        toast.error('Email is already in use. Please try with another email address');
                    }
                    if (firebaseError.includes('network')) {
                        toast.error('Network failed! please check you network connection');
                    }
            })

        } else {
            toast.error('Passwords do not match')
        }
    }
    return (
        <div className="max-w-[350px] md:max-w-screen-sm my-20 lg:max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 justify-evenly">
            <Helmet>
                <title>Asian Escape Hub | Sign Up</title>
            </Helmet>
            <div className="text-gray-700 rounded-xl">
                <h4 className="block font-OpenSans text-5xl leading-snug text-blue-gray-900">
                    Register Account
                </h4>
                <p className="block mt-1 font-sans text-base leading-relaxed text-gray-700">
                    Welcome to Luxy Realty. Enter your details to register.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-lg lg:w-[700px]">
                    <h2 className="mt-6 mb-2 text-xl font-OpenSans">Your Personal Details</h2>
                    <hr />
                    <div className="mt-6 flex items-center gap-4">
                        <div className="w-[160px] text-right">
                            <label htmlFor="name" className="mb-2 text-[12px] text-black font-OpenSans">Full Name </label>
                        </div>
                        <input {...register("name",)} type="text" id="name" name="name" className="bg-gray-50 focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300" placeholder="Your Name" />
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="w-[160px] text-right">
                            <label htmlFor="email" className="mb-2 text-[12px] text-black font-OpenSans">Your Email <span className="text-red-500">*</span></label>
                        </div>
                        <input  {...register("email")} type="email" id="email" name="email" className="bg-gray-50 focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300" placeholder="Your Email" required />
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="w-[160px] text-right">
                            <label htmlFor="url" className="mb-2 text-[12px] text-black font-OpenSans">Your Photo Url </label>
                        </div>
                        <input {...register("url")} type="text" id="url" name="url" className="bg-gray-50 focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300" placeholder="Your Photo Url"  />
                    </div>

                    <div className="flex gap-12 items-center">
                        <h2 className="mt-6 mb-2 text-xl font-OpenSans">Your Password</h2>
                        <p>
                            {
                                fulfilState && (
                                    
                                    <small>
                                        Password strength :  <span className="inline-flex items-center px-3 mt-4 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">  {fulfilState}</span>
                                    </small>
                                )
                            }
                        </p>
                    </div>
                    <hr />
                    <div className="mt-6 flex items-center gap-4">
                        <div className="w-[160px] text-right">
                            <label htmlFor="password" className="block mb-2 text-sm font-base text-black font-Outfit">Password <span className="text-red-500">*</span></label>
                        </div>
                        <input  {...register("password")} onChange={e => { setLivePassword(e.target.value) }} type="text" id="password" name="password" className="bg-gray-50 focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300" placeholder="Your Password" required />
                        
                    </div>
                    {/* error */}
                    <div className="ml-[150px]">
                        {
                            passwordError && (
                                <p className="text-red-500 mt-2 text-xs mt">
                                    {passwordError}
                                </p>
                            )
                        }
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="w-[160px] text-right">
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-base text-black font-Outfit">Confirm Password <span className="text-red-500">*</span></label>
                        </div>
                        <input {...register("confirmPassword")} onChange={e => setLiveConfirmPassword(e.target.value)} type="text" id="confirm-password" name="confirmPassword" className="bg-gray-50 focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300" placeholder="Confirm Password" required />
                    </div>
                    {/* error */}
                    <div className="ml-[150px]">
                        {confirmPasswordError === 1 && (
                            <p className="text-red-500 mt-2 text-xs mt">
                            </p>
                        )}
                        {confirmPasswordError === 2 && (
                            <p className="text-red-500 mt-2 text-xs mt">
                                Password do not match
                            </p>
                        )}
                        {confirmPasswordError === 3 && (
                            <p className="text-primary mt-2 text-xs mt">
                                Password Match
                            </p>
                        )}
                    </div>

                    {/* Checkbox for Terms and Conditions */}
                    <div className="flex gap-6 items-center mt-12">
                        <input onChange={e => setAgree(e.target.checked)} type="checkbox" id="agree" name="agree" className="checkbox checkbox-sm" />
                        <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="agree">
                            I agree the
                            <Link to="#" className="font-medium transition-colors hover:text-gray-900">
                                &nbsp;Terms and Conditions
                            </Link>
                        </label>
                    </div>
                    <button
                        disabled={!agree || passwordError}
                        className="mt-6 block bg-primary disabled:bg-[#9fdf96] w-full select-none rounded-lg py-2 text-white"
                    >
                        Sign up
                    </button>
                    <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                        Already have an account? &nbsp;
                        <Link to="/login" className="cursor-pointer font-Outfit font-semibold">Sign In</Link>
                    </p>
                </form>
            </div>
            {/* Sidebar */}
            <div className="lg:w-[300px] mt-6 border border-gray-200 rounded-xl p-6">
                <p className="flex items-center gap-2 text-base uppercase font-semibold">
                    <BiUser className="text-primary font-Outfit" />Account Setting
                </p>
                <div className="mt-4 pl-8 flex flex-col mb-6 gap-4">
                    <Link to="/login" className="cursor-pointer font-Outfit text-sm">Login</Link>
                    <Link to="/sign-up" className="cursor-pointer font-Outfit text-sm">Register</Link>
                    <Link to="#" className="cursor-pointer font-Outfit text-sm">Forgotten Password</Link>
                    <Link to="#" className="cursor-pointer font-Outfit text-sm">My account</Link>
                    <Link to="#" className="cursor-pointer font-Outfit text-sm">Address Book</Link>
                </div>
                <hr />
                <p className="flex items-center gap-2 mt-6 text-base uppercase font-semibold">
                    <TfiWrite className="text-primary font-Outfit" />My Orders
                </p>
                <div className="mt-4 mb-6 pl-8 flex flex-col gap-4">
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Order History</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Download</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Return</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Transaction</p></Link>
                </div>
                <hr />
                <p className="flex items-center gap-2 mt-6 text-base uppercase font-semibold">
                    <RiBook2Line className="text-primary font-Outfit" />My Stuff
                </p>
                <div className="mt-4 pl-8 flex flex-col gap-4">
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Wishlist</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Reward Points</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Coupon</p></Link>
                </div>
            </div>
            <div><Toaster /></div>
        </div>
    );
}

export default SignUp;
