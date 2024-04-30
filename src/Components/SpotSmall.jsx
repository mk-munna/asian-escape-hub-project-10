import PropTypes from 'prop-types';
import { BiCart, BiHeart } from 'react-icons/bi';
import { FaCircleDollarToSlot } from 'react-icons/fa6';

import { IoIosArrowRoundForward, IoIosTimer } from 'react-icons/io';
import { IoLocationSharp, IoPeople } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SpotSmall = ({ spot }) => {
    const { _id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_name, user_email } = spot;
    const maxTitleLength = 20
    let displayTitle = ''
    if (tourists_spot_name.length > maxTitleLength) {
        displayTitle = tourists_spot_name.slice(0, 16) + '...'
    } else {
        displayTitle = tourists_spot_name
    }
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className=''>
            <div className="w-full bg-base-100 shadow-xl  hover:scale-[1.01] duration-500 ">
                <figure className=" relative">
                    <img width={"100%"} src={image} className="rounded-xl" />
                    <span className={`absolute text-sm bg-primary px-2 py-[2px] rounded-md top-3 left-3 text-white font-Outfit`}>{seasonality}</span>
                    <div className="tooltip absolute top-8 right-5" data-tip="Add to wishlist">
                        <button className='bg-white  hover:bg-primary hover:text-white  p-2 rounded-md text-lg'><span><BiHeart></BiHeart></span></button>
                    </div>
                    <div className="tooltip absolute top-20 right-5" data-tip="Add to Cart">
                        <button className='bg-white hover:bg-primary hover:text-white  p-2 rounded-md text-lg'><span><BiCart></BiCart></span></button>
                    </div>
                </figure>
                <div className=" p-6 space-y-3">
                    <h2 className="card-title text-xl font-OpenSans font-semibold ">{displayTitle}</h2>
                    <p className='flex items-center'>
                        <span className='text-primary'><IoLocationSharp></IoLocationSharp></span>
                        <span className=' px-2 py-[2px] text-sm font-Outfit rounded-md'>{location}</span>
                    </p>
                    <p className='flex items-center'>
                        <span className='text-primary'><FaCircleDollarToSlot></FaCircleDollarToSlot></span>
                        <span className=' px-2 py-[2px] text-sm font-Outfit rounded-md'>Average Cost <span className='text-xl text-[#F7921E]'>&nbsp;${average_cost}</span></span>
                    </p>
                    <hr className='my-3' />
                    <div className='flex'>
                        <p className='flex items-center'>
                            <span className='text-primary'><IoIosTimer /></span>
                            <span className=' px-2 py-[2px] text-[10px] font-Outfit rounded-md'>{travel_time}</span>
                        </p>
                        <p className='flex items-center'>
                            <span className='text-primary'><IoPeople /></span>
                            <span className=' px-2 py-[2px] text-[10px] font-Outfit rounded-md'>{totalVisitorsPerYear}</span>
                        </p>

                    </div>
                    <div className='flex justify-end'>
                        <Link to={`/tourist-spot/${_id}`}><button className='text-sm flex items-center font-semibold'>View Details <IoIosArrowRoundForward /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SpotSmall.propTypes = {
    spotSmall: PropTypes.object
};
export default SpotSmall;