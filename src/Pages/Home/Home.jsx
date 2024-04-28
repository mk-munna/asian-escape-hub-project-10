import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import TouristSpots from "../../Components/TouristSpots";
// import Discounts2 from "../../Components/Discounts2";
// import Explore from "../../Components/Explore";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Asian Escape Hub | Home Page</title>
            </Helmet>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            {/* <Discounts2></Discounts2> */}
            {/* <Explore></Explore> */}
        </div>
    );
};

export default Home;