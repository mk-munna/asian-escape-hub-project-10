import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import TouristSpots from "../../Components/TouristSpots";
import WhyChooseUs from "../../Components/WhyChooseUs";

import Discounts2 from "../../Components/Discounts2";
import { useContext } from "react";
import { DataContext } from "../../Provider/DataContextProvider";
// import Explore from "../../Components/Explore";

const Home = () => {
const {theme} = useContext(DataContext)
    return (
        <div className={`${theme ? "bg-[#1d2835]" : ""}`}>
            <Helmet>
                <title>Asian Escape Hub | Home Page</title>
            </Helmet>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <TouristSpots></TouristSpots>
            <Discounts2></Discounts2>
            {/* <Explore></Explore> */}
        </div>
    );
};

export default Home;