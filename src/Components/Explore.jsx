import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TouristSpotsmall from "./TouristSpotsmall";
import { useContext } from 'react';
import { DataContext } from '../Provider/DataContextProvider';
import { BiBuildingHouse } from 'react-icons/bi';
import { GoArrowRight } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Explore = () => {
    const data = useContext(DataContext)
    return (
        <div className="bg-[#EEFFF5] py-24">
            <div className="lg:max-w-6xl  sm:max-w-[350px] md:max-w-screen-sm mx-auto flex flex-col lg:flex-row gap-8">
                <div className="lg:w-[550px] md:w-[650px] w-[300px] mx-auto">
                    <img src="	https://opencart.workdo.io/landholdings/image/cache/catalog/offerbanner/Fresh-products2-640x510.jpg" alt="" />
                </div>
                <div className='w-3/4 md:w-11/12 mx-auto lg:w-1/4'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper h-[480px] mx-auto"
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.25': {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            '@0.50': {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            '@0.65': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@0.70': {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            '@1.25': {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {
                            data.map((estate) => {
                                return (
                                    <SwiperSlide key={estate.id}>
                                        <TouristSpotsmall estate={estate} />
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                    <style jsx="true"> {`
                        .swiper-button-prev, .swiper-button-next {
                            color: yellow !important;
                            
                        }
                    `}</style>
                </div>
                <div className="w-[300px] md:w-11/12 lg:w-[350px] mx-auto mt-10 ">
                    <span  data-aos="fade-up" data-aos-duration="1500" className='border-l-2 border-[#f7bc3e] pl-2 text-sm text-primary font-semibold'>Luxury Apartments</span>
                    <h2 className="text-4xl font-bold text-primary  mt-4">Explore Apartment
                        Types</h2>
                    <p className="text-[12px] mt-8 leading-5">Embark on a journey through our diverse array of apartment types. From cozy studios to luxurious penthouses, discover the perfect living space tailored to your lifestyle. Explore our selection and find your ideal home today. </p>
                    <button className='flex text-white mt-8 items-center gap-2 px-4 py-2 rounded-lg bg-primary text-[12px] '><BiBuildingHouse></BiBuildingHouse> Show Producs <GoArrowRight></GoArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Explore;
