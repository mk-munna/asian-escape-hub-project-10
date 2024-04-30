import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DataContext } from '../../Provider/DataContextProvider';
import { IoMdArrowBack } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import SpotForCountry from '../../Components/SpotForCountry';

const CountryDataPage = () => {
    const {country} = useParams()
    const { data, loading } = useContext(DataContext)
    const [resultData, setResultData] = useState(null)
    useEffect(() => {
        const resultData = data.filter(data => data.country_Name === country);
        setResultData(resultData)
    }, [data])
    const [sortOption, setSortOption] = useState('')
    const [sortedData, setSortedData] = useState([])
    console.log(sortOption);
    // console.log(data);
    useEffect(() => {
        if (resultData) {
            if (sortOption === 'average_cost') {
            setSortedData([...resultData].sort((a, b) => a.average_cost - b.average_cost))
        } else {
            setSortedData([...resultData])
        }
        }
        
    }, [resultData, sortOption, data])
    console.log(resultData,country);
    return (
        <div className='my-20 max-w-[350px] md:max-w-screen-sm lg:max-w-6xl mx-auto'>
            <div>
                <Helmet>
                    <title>Asian Escape Hub | Tourist spots</title>
                </Helmet>
            </div>
            <Link to={'/'}><button className='flex items-center gap-3 mb-8 border-yellow-400 py-1 border-b text-primary'><IoMdArrowBack />Back To Home</button></Link>
            <h1 className='text-4xl mb-8 font-Montserrat font-semibold'>View all Tourist Spot <br /> of <span className='text-Common'>{country}</span></h1>
            <p className='mb-8 leading-6'>Embark on an exhilarating journey filled with excitement and wonder! Experience the thrill of adventure and the joy of discovery as you explore new horizons and make unforgettable memories. Join us for an adventure-packed escapade where every moment is infused with the magic of possibility. Come, fulfill your dreams and embrace the spirit of adventure with us!</p>
            <div>
                <div className='flex justify-end lg:pr-48 items-center text-sm mb-8 gap-2'>
                    Sort By
                    <select className='border border-primary px-2 text-[12px] py-1 rounded-full' onChange={e => setSortOption(e.target.value)} name="" id="">
                        <option value="">Default</option>
                        <option value="average_cost">Average Cost</option>
                    </select>
                </div>
                {
                    loading ? (
                        <div>loading...</div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                            {
                                sortedData.map(spot => <SpotForCountry key={spot._id} spot={spot}></SpotForCountry>)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CountryDataPage;