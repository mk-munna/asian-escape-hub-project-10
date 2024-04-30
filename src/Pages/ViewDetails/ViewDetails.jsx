import React, { useContext, useEffect, useState, } from 'react';
import { DataContext } from '../../Provider/DataContextProvider';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';


import { Helmet } from 'react-helmet-async';
import { IoLocationSharp, IoPeople } from 'react-icons/io5';
import { IoIosTimer, IoMdArrowBack } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

// /swiper
const ViewDetails = () => {

    // const location = useLocation()
    // console.log(location)
    const { data, loading } = useContext(DataContext)
    const inputId = useParams();

    const [resultData, setResultData] = useState(null)
    useEffect(() => {
        const resultData = data.find(data => data._id === inputId.id);
        setResultData(resultData)
    }, [data, inputId])
    // console.log(inputId);
    // console.log(data);
    console.log(resultData);
    if (resultData) {
        const { _id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_name, user_email } = resultData;
        // const relatedProducts = data.filter(d => d.segment === resultData.segment)
        // console.log(relatedProducts);
        return (
            <div className='max-w-[350px] md:max-w-screen-sm lg:max-w-6xl  mx-auto'>
                <Helmet>
                    <title>{tourists_spot_name}</title>
                </Helmet>
                <div className=' py-16'>
                    <Link to={'/tourist-spots'}><button className='flex items-center gap-3 mb-8 border-yellow-400 py-1 border-b text-primary'><IoMdArrowBack />Back To Tourist Spot</button></Link>
                    <div className=' flex flex-col lg:flex-row gap-12'>
                        <div className='flex justify-center'>
                            <img src={image} alt="" />
                        </div>
                        <div className=''>

                            <div className='flex gap-6'>
                                <p className='text-sm mb-2'><span className='font-semibold text-primary'>Country :</span> {country_Name}</p>
                                <p className='text-[12px] text-black mb-2 bg-[#f2ffa5] px-1 font-Outfit rounded-md'>{seasonality}</p>
                                <p className='text-[12px] mb-2 bg-[#dcfff6] px-1 font-Outfit rounded-md'>{travel_time}</p>

                            </div>
                            <p className='text-4xl mt-4 font-OpenSans font-medium'>{tourists_spot_name}</p>
                            <hr className='mt-8 mb-5' />
                            <p className='text-3xl'><span>Average Cost : </span> <span className='text-5xl text-primary font-Montserrat font-no pt-4'>${average_cost}</span></p>
                            <div className='flex gap-16 mt-6'>
                                <p className='flex items-center'>
                                    <span className='text-primary'><IoLocationSharp></IoLocationSharp></span>
                                    <span className=' px-2 py-[2px] text-sm font-Outfit rounded-md'> Location: &nbsp; {location}</span>
                                </p>
                                <div>
                                    <p className='flex items-center'>
                                        <span className='text-primary'><IoPeople /></span>
                                        <span className=' px-2 py-[2px] text-sm font-Outfit rounded-md'>
                                            Visitors Per Year : &nbsp;{totalVisitorsPerYear}</span>
                                    </p>
                                </div>

                            </div>
                            
                            <hr className='my-4'/>
                            <div className=''>
                                <p className='text-sm'>Added By : </p>
                                <div className='flex gap-16 text-sm mt-4'>
                                    <p className='flex items-center gap-2'>
                                        <AiOutlineUser />
                                        <span>{user_name}</span>
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <MdOutlineMarkEmailRead />
                                        <span>{user_email}</span>
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className='flex gap-6'>
                                <button className='flex gap-2 bg-primary hover:bg-[#3f9c27] duration-300 rounded-md items-center px-3 text-white py-1'><CiShoppingCart className='text-xl' />Add to Cart</button>
                                <button className='flex gap-2 hover:bg-primary hover:text-white duration-300 bg-gray-200 rounded-md items-center px-2 py-1'><CiHeart className='text-xl' /> Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 italic'>
                        <h1 className=' font-Amaranth'>Description : </h1>
                        <p>{short_description}</p>
                    </div>
                </div>
            </div>
        );

    } else {
        return (
            <div>
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

};

export default ViewDetails;