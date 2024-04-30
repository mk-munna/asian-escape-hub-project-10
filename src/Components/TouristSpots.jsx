
import { useContext, useEffect,  } from "react";
import { DataContext } from '../Provider/DataContextProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Spot from "./Spot";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
AOS.init();
const TouristSpots = () => {
    const {data,theme} = useContext(DataContext)
    // console.log(data);
    return (
        <div id='' className={` my-20 max-w-[350px] md:max-w-screen-sm lg:max-w-6xl mx-auto px-8 lg:px-0`}>
            <div className='' data-aos="fade-up" data-aos-duration="1500">
                <h1 className={`md:text-[40px] leading-[60px] text-2xl   lg:w-[800px] mx-auto ${theme? "text-gray-400" : "text-primary"} font-Montserrat font-bold text-center`}>Discover And Enjoy Our Featured Tourist Spot Listings</h1>
                <p className="mt-[30px] text-center lg:w-[700px] mx-auto text-sm font-Outfit">Explore our curated selection: exceptional properties, prime locations, and unmatched amenities. Your dream home awaits among our exclusive listings.</p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    data.slice(0, 6).map(spot => {
                        return (
                            <Spot key={spot._id} spot={spot}></Spot>
                        )
                    })
                }
            </div>
            <div className="flex justify-center">
                <Link to={'/tourist-spots'}><button data-aos="fade-up" data-aos-duration="1500" className="mt-12 flex items-center gap-2">View All Tourist Spots <GoArrowRight /></button></Link>
            </div>
        </div>
    );
};

export default TouristSpots;