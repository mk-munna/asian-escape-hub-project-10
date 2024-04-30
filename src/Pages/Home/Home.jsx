import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import { useEffect } from "react";
import TouristSpots from "../../Components/TouristSpots";
import WhyChooseUs from "../../Components/WhyChooseUs";
// import Discounts2 from "../../Components/Discounts2";
// import Explore from "../../Components/Explore";

const Home = () => {
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mk-munna/Luxy-Realty-Api/main/estates.json")
            .then(res => res.json())
            .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div>
            <Helmet>
                <title>Asian Escape Hub | Home Page</title>
            </Helmet>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <WhyChooseUs></WhyChooseUs>
            {/* <Discounts2></Discounts2> */}
            {/* <Explore></Explore> */}
        </div>
    );
};

export default Home;