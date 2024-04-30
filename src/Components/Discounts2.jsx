import { BiBuildingHouse } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";

import { useContext } from "react";

import { DataContext } from "../Provider/DataContextProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SpotSmall from "./SpotSmall";
import { Link } from "react-router-dom";
// ..
AOS.init();
const Discounts2 = () => {
    const {data, theme} = useContext(DataContext)
    return (
        <div>
            <div className={`pt-20   ${theme ? "bg-slate-800 text-slate-400" : "bg-[#EAF0FF]"} lg:h-[510px] text-black font-semibold px-[60px] flex gap-6 flex-col lg:flex-row pt-[70px] bg-cover bg-no-repeat`}>
                <div data-aos="fade-right" data-aos-duration="1500" className="w-[300px] md:w-full lg:w-[550px] ">
                    <span data-aos="fade-down" data-aos-duration="1500" className='border-l-2 border-[#f7bc3e] pl-2'>Today Discounts</span>
                    <h2 className="text-3xl mt-4">Change Begins <br /> with travel</h2>
                    <p className="text-[12px] mt-8 leading-5">Embark on transformative journeys where change begins with travel. Discover discounted products and services, curated to fulfill diverse needs, ensuring the best value for your adventures. </p>
                    <Link to={'/tourist-spots'}><button className='flex text-white mt-8 items-center gap-2 px-4 py-2 rounded-lg bg-primary text-[12px] '><BiBuildingHouse></BiBuildingHouse>All Tourist Spots<GoArrowRight></GoArrowRight></button></Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {
                        data.slice(0, 3).map(spot => {
                            return (
                                <SpotSmall key={spot._id} spot={spot}></SpotSmall>
                            )
                        })
                    }
                </div>
            </div>
            <div className="h-1">
            </div>
        </div>
    );
};

export default Discounts2;