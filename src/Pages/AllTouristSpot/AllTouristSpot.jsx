import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { DataContext } from '../../Provider/DataContextProvider';
import Spot from '../../Components/Spot';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AllTouristSpot = () => {
    const { data, loading } = useContext(DataContext)
    console.log(data);
    return (
        <div className='my-20 max-w-[350px] md:max-w-screen-sm lg:max-w-6xl mx-auto'>
            <div>
                <Helmet>
                    <title>Asian Escape Hub | Tourist spots</title>
                </Helmet>
            </div>
            <Link to={'/'}><button className='flex items-center gap-3 mb-8 border-yellow-400 py-1 border-b text-primary'><IoMdArrowBack />Back To Home</button></Link>
            <h1 className='text-4xl mb-8 font-Montserrat font-semibold'>Visit & enjoy adventure life <br /> with full of dreams</h1>
            <p className='mb-8 w-3/4 leading-6'>Embark on an exhilarating journey filled with excitement and wonder! Experience the thrill of adventure and the joy of discovery as you explore new horizons and make unforgettable memories. Join us for an adventure-packed escapade where every moment is infused with the magic of possibility. Come, fulfill your dreams and embrace the spirit of adventure with us!</p>
            <div>
                <div className='flex justify-center items-center'>
                    <select name="" id="">
                        <option value="">Sort By</option>
                        <option value="">Average Cost</option>
                        <option value="">Price</option>
                    </select>
                </div>
                {
                    loading ? (
                    <div>loading...</div>
                    ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                                {
                                    data.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                                }
                            </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;