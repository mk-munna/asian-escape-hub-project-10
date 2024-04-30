import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiBuildingHouse } from 'react-icons/bi';
import { GoArrowRight } from 'react-icons/go';

import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {

    const handleType = (count) => {
        // access word count number
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }



    return (
        <div className='text-white'>
            <Swiper
                style={{
                    '--swiper-button-next': 'red',
                    '--swiper-pagination-color': 'yellow',
                }}
                speed={600}
                parallax={true}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div style={{
                        'backgroundImage':
                            'url(https://i.ibb.co/nzF7vDh/main-slider-1.jpg)',
                        'padding': '60px',
                        'backgroundSize': 'cover'
                    }}
                        className='flex flex-col h-[400px] justify-center lg:h-[500px]'>
                        <div className='px-8'>
                            <div className="font-Montserrat  text-3xl md:text-6xl lg:text-7xl" data-swiper-parallax="-300">
        
                                <div className='App'>
                                    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                        Thailand{' '}
                                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={['Trip', 'Travel', 'Explore', 'Know!']}
                                                loop={5}
                                                cursor
                                                cursorStyle=''
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                                onLoopDone={handleDone}
                                                onType={handleType}
                                            />
                                        </span>
                                    </h1>
                                </div>
                        </div>
                        <div className="text-sm font-Outfit mt-8" data-swiper-parallax="-200">
                                Vibrant cities, serene beaches, rich culture,br and warm hospitality. <br /> Your gateway to unforgettable experiences!
                        </div>
                        <div className="mt-8" data-swiper-parallax="-100">
                            <button className='flex items-center text-black gap-2 px-4 py-2 rounded-md bg-secondary text-[12px] animate__animated animate__fadeInUp '><BiBuildingHouse></BiBuildingHouse> Show Tourist Spots <GoArrowRight></GoArrowRight></button>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        'backgroundImage':
                            'url(https://i.ibb.co/PcmHpvk/main-slider-2.jpg)',
                        'padding': '60px',
                        'backgroundSize': 'cover'
                    }} className='flex flex-col justify-center h-[400px] lg:h-[500px]'>
                        <div className='px-8'>
                            <div className="font-Montserrat text-3xl md:text-6xl lg:text-7xl" data-swiper-parallax="-300">
                                <div className='App'>
                                    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                        Best{' '}
                                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={['Hotels', 'Shops', 'Places', 'Rooms!']}
                                                loop={5}
                                                cursor
                                                cursorStyle=''
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                                onLoopDone={handleDone}
                                                onType={handleType}
                                            />
                                        </span>
                                    </h1>
                                </div>
                            </div>
                            <div className="text-sm font-Outfit mt-8" data-swiper-parallax="-200">
                                Find Your<span className='font-extrabold'>Paradise</span>
                            </div>
                            <div className="mt-8" data-swiper-parallax="-100">
                                <button className='flex items-center text-black gap-2 px-4 py-2 rounded-md bg-secondary text-[12px] animate__animated animate__fadeInUp '><BiBuildingHouse></BiBuildingHouse> Show Tourist Spots <GoArrowRight></GoArrowRight></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        'backgroundImage':
                            'url(https://i.ibb.co/ZfHcqh1/main-slider-3.jpg)',
                        'padding': '60px',
                        'backgroundSize': 'cover'
                    }} className='flex flex-col justify-center h-[400px] lg:h-[500px]'>
                        <div className='px-8'>
                            <div className="font-Montserrat  text-3xl md:text-6xl lg:text-7xl" data-swiper-parallax="-300">
                                <div className='App'>
                                    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                        Asian{' '}
                                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={['Islands', 'Villa', 'Luxury Home', 'Resort!']}
                                                loop={5}
                                                cursor
                                                cursorStyle=''
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                                onLoopDone={handleDone}
                                                onType={handleType}
                                            />
                                        </span>
                                    </h1>
                                </div>
                            </div>
                            <div className="text-sm font-Outfit mt-8" data-swiper-parallax="-200">
                                Tropical paradises, crystal-clear waters, lush jungles, and vibrant <br /> cultures. Explore nature's wonders and unwind.
                            </div>
                            <div className="mt-8" data-swiper-parallax="-100">
                                <button className='flex items-center gap-2 px-4 py-2 text-black  bg-secondary text-[12px] rounded-sm '><BiBuildingHouse></BiBuildingHouse>Learn More<GoArrowRight></GoArrowRight></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;