
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { RiSettingsLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { RiBuilding2Line } from "react-icons/ri";
import { TbBuildingWarehouse } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { LuMails, LuPlus } from "react-icons/lu";

import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegMoon, FaRegUser, FaRegUserCircle } from "react-icons/fa";
import './nav.css'
import { AuthContext } from "../Provider/AuthContextProvider";
import { BiUserCircle } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../Provider/firebase.config";
import toast from "react-hot-toast";
import { CiLight } from "react-icons/ci";


const Nav = () => {
    const themeFromLocalStorage = localStorage.getItem("theme")
    const [theme, setTheme] = useState(themeFromLocalStorage);
    // console.log(theme);
    const { user, loading } = useContext(AuthContext)
    const [myValue, setMyValue] = useState('');
    // console.log(myValue);
    useEffect(() => {
        if (theme) {
            // save theme to local storage
            localStorage.setItem("theme", "true");
            document.querySelector("html").setAttribute("data-theme", "dark");
        } else {
            localStorage.removeItem("theme");
            document.querySelector("html").setAttribute("data-theme", "light");
        }
    }, [theme])
    const handleClick = () => {
        signOut(auth)
            .then(() => {
                toast.success(' successfully logged out!')
            }).catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className='font-Outfit'>
            {/* top bar */}
            <div className=" py-6">
                {/* content */}
                <div className="lg:max-w-[1200px]  items-center md:max-w-screen-sm flex-col lg:flex-row md:flex-row gap-8 flex mx-auto">
                    <div className="flex flex-col gap-8 lg:flex-row md:flex-row">
                        <h1 className="flex items-center gap-2 md:text-xl justify-center text-3xl font-semibold text-primary"><img className="w-10" src="https://i.ibb.co/tJw0FRY/image-removebg-preview-2.png" alt="" /><span>AsianEscapeHub</span></h1>

                        <label className=" border rounded-full md:w-[250px] lg:w-[300px] mx-auto px-4  h-10 flex items-center gap-2">
                            <Link to={'/login'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></Link>
                            <input type="text" className="text-[12px] grow md:w-[120px] lg:w-[150px] focus:outline-none focus:border-none" placeholder="Search" />
                            <select onChange={e => setMyValue(e.target.value)} className="h-9 border text-white text-[12px] rounded-full px-2  bg-[#0F172A]">
                                <option value={"default"}>Country</option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                        </label>
                    </div>
                    {/* part 2 */}
                    <div className=" gap-[120px] hidden lg:flex md:hidden">
                        <div className="text-[12px]">
                            <span className="font-semibold">Monday - Friday :</span> <br />
                            8:00 AM - 9:00 PM
                        </div>
                        <div className="text-[12px] text-right ">
                            Support 24/7: <br />
                            <span className="font-bold text-sm">+66 442-424-444</span>


                        </div>
                    </div>
                    {/* part 3 */}
                    <div className="flex gap-6 ml-6 ">
                        <div className="flex justify-center items-center text-2xl ">
                            <div className="dropdown dropdown-end w-10">
                                {
                                    loading ? (
                                        <div className="skeleton w-8 h-8 rounded-full shrink-0"></div>
                                    ) : (
                                        user ? (
                                            <div className="tooltip  tooltip-left" data-tip={user?.displayName || 'Unknown'}>
                                                <div>
                                                    <div tabIndex={0} role="button" className=" m-1">
                                                        {
                                                            user?.photoURL ? (
                                                                <img src={user?.photoURL} alt="" className="w-8 h-8 rounded-full " />
                                                            ) : (
                                                                <div className="bg-[#3bd8d8] text-lg w-8 h-8 flex justify-center items-center rounded-full">
                                                                    {
                                                                        user?.displayName ? (

                                                                            <p>{user?.displayName.charAt(0).toUpperCase()}</p>
                                                                        ) : (
                                                                            <p>U</p>
                                                                        )
                                                                    }
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                    <ul tabIndex={0} className="dropdown-content z-[2] menu p-1 shadow-xl bg-base-100 rounded-box w-[160px]">
                                                        <li><a><RiSettingsLine /> Settings</a></li>
                                                        <li onClick={handleClick}><a><IoIosLogOut /> Logout</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div tabIndex={0} role="button" className=" m-1"><AiOutlineUser /></div>
                                                <ul tabIndex={0} className="dropdown-content z-[2] menu p-1 shadow-xl bg-base-100 rounded-box w-28">
                                                    <li><Link to={'/login'}><HiOutlineUser /> Login</Link></li>
                                                    <li><Link to={'/sign-up'}><BiUserCircle /> Register</Link></li>
                                                </ul>
                                            </div>
                                        )
                                    )
                                }

                            </div>
                        </div>
                        <div className="flex items-center">
                            {
                                theme ? (
                                    <FaRegMoon className="text-xl cursor-pointer " onClick={() => setTheme(!theme)} />
                                ) : (
                                    <CiLight className="text-3xl cursor-pointer -ml-1" onClick={() => setTheme(!theme)} />
                                )
                            }
                        </div>
                        <div className="flex items-center">
                            <button className="md:text-[12px] lg:text-sm bg-primary text-white px-2 rounded-md">My List</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* nav bar */}
            <div className=" bg-primary">
                <div className="lg:max-w-[1200px] navbar mx-auto">
                    <div className="navbar-center">
                        <div className="dropdown z-10">
                            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu flex flex-col gap-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink to={'/'} className={"flex items-center gap-2"}><IoHomeOutline />Home</NavLink>
                                <NavLink to={'/tourist-spots'} className={"flex items-center gap-2"}><RiBuilding2Line />All Tourist Spot</NavLink>
                                <NavLink to={'/Add-new-Tourist-spot'} className={"flex items-center gap-2"}><LuPlus />Add Tourist Spot</NavLink>
                                <NavLink to={'/contact'} className={"flex items-center gap-2"}><TbBuildingWarehouse />Contact</NavLink>
                                <NavLink to={'/sign-up'} className={"flex items-center gap-2"}><FaRegUserCircle></FaRegUserCircle>Register</NavLink>
                                <NavLink to={'/login'} className={"flex items-center gap-2"}><FaRegUser />Login</NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="w-3/4 hidden text-white lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-8 text-base">
                            <NavLink to={'/'} className={"flex items-center gap-2 hover:bg-none hover:border-b border-[#ffff00] pb-1"}><IoHomeOutline />Home</NavLink>
                            <NavLink to={'/tourist-spots'} className={"flex items-center gap-2"}><RiBuilding2Line />All Tourist Spot</NavLink>
                            <NavLink to={'/Add-new-Tourist-spot'} className={"flex items-center gap-2"}><LuPlus />Add Tourist Spot</NavLink>
                            <NavLink to={'/contact'} className={"flex items-center gap-2"}><TbBuildingWarehouse />Contact</NavLink>
                            <NavLink to={'/sign-up'} className={"flex items-center gap-2 hover:bg-none hover:border-b border-[#ffff00] pb-1"}><FaRegUserCircle></FaRegUserCircle>Register</NavLink>
                            <NavLink to={'/login'} className={"flex items-center gap-2"}><FaRegUser />Login</NavLink>
                        </ul>
                    </div>
                    <div className="w-1/4 flex-grow flex justify-end">
                        <div className="flex items-center  gap-2  text-white">
                            <LuMails />
                            <span className="">mkmunna@yahoo.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;

