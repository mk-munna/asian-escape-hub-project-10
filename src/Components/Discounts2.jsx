import { BiBuildingHouse } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";

import { useContext } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { DataContext } from "../Provider/DataContextProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Discounts2 = () => {
    const data = useContext(DataContext)
    return (
        <div className='mt-20  bg-[#EAF0FF] lg:h-[510px] text-black font-semibold px-[60px] flex gap-6 flex-col lg:flex-row pt-[70px] bg-cover bg-no-repeat bg-[url("https://i.ibb.co/BqJRv89/best-bg.jpg")]'>
            <div data-aos="fade-right" data-aos-duration="1500" className="w-[300px] md:w-full lg:w-[300px] ">
                <span data-aos="fade-down" data-aos-duration="1500" className='border-l-2 border-[#f7bc3e] pl-2'>Today Discounts</span>
                <h2 className="text-3xl mt-4">Change Begins <br />At Home</h2>
                <p className="text-[12px] mt-8 leading-5">Discover a diverse range of products and services offered at discounted rates, catering to your every need. From fashion and electronics to household essentials and beyond, we curate exclusive deals to ensure you get the best value for your money. </p>
                <button className='flex text-white mt-8 items-center gap-2 px-4 py-2 rounded-lg bg-primary text-[12px] '><BiBuildingHouse></BiBuildingHouse> Show Producs <GoArrowRight></GoArrowRight></button>
            </div>
            <Swiper
                data-aos="fade-left" data-aos-duration="1500"
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper lg:w-3/4 z-10 w-[95%]"
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
                    '@0.60': {
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
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {
                    data.map((estate) => {
                        return (
                            <SwiperSlide key={estate.id}>
                                <TouristSpotsmall estate={estate}></TouristSpotsmall>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default Discounts2;