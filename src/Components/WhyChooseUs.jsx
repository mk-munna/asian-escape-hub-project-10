import React from 'react';
import { FaInternetExplorer } from 'react-icons/fa6';
import { LiaSolarPanelSolid } from 'react-icons/lia';
import { MdBikeScooter } from 'react-icons/md';
import { PiPaperPlaneTiltLight } from 'react-icons/pi';

const WhyChooseUs = () => {
    return (
        <div className='flex flex-col gap-12 lg:gap-0 lg:flex-row px-6 bg-[#F3F8F6] py-32'>
            <div className='w-full'>
                <span className='px-5 rounded-lg text-base py-2 text-primary bg-[#E1EFE0] font-semibold'>why choose us</span>
                <h1 className=' mt-10 md:leading-[58px] font-Montserrat font-bold text-3xl leading-10 md:text-5xl'>
                    People why choose our travel adventure
                </h1>
                <div className='mt-12 flex flex-col md:flex-row gap-6'>
                    <div>
                        <div className='flex gap-4'>
                            <div>
                                <PiPaperPlaneTiltLight className='text-[40px] text-primary' />
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Best security</p>
                                <p>layers and proactive measures combined effectively.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-10'>
                            <div>
                                <LiaSolarPanelSolid className='text-[40px] text-primary' />
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Solar energy</p>
                                <p>Sunlight for sustainable power and clean energy. </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <div>
                                <FaInternetExplorer className='text-[40px] text-primary' />
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Free internet</p>
                                <p>Explore, connect, learn, and create without costs."</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-10'>
                            <div>
                                <MdBikeScooter className='text-[40px] text-primary' />
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Mountain biking</p>
                                <p>Rugged terrain, thrilling rides, adrenaline rush. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img src="https://i.ibb.co/Gph54XS/year-image-1.png" alt="" />
            </div>
        </div>
    );
};

export default WhyChooseUs;