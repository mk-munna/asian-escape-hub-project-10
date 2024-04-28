
import { useContext,  } from "react";
import { DataContext } from '../Provider/DataContextProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const TouristSpots = () => {
    const data = useContext(DataContext)
    // console.log(data);

    return (
        <div id='estate' className="mt-[70px] px-8 lg:px-0">
            <div className='' data-aos="fade-up" data-aos-duration="1500">
                <h1 className="text-[40px] text-primary font-Amaranth font-semibold text-center">Discover Our Estate Listings</h1>
                <p className="mt-[30px] text-center lg:w-[700px] mx-auto text-sm font-Outfit">From luxurious beachfront villas to modern city apartments, our diverse portfolio offers something for every lifestyle and preference. Start your journey towards finding your dream home today with our meticulously curated estate listings</p>
            </div>
            <div className='mt-10'>

            </div>
        </div>
    );
};

export default TouristSpots;