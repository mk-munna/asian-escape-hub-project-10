import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Country = () => {
    const [countries, setCountries] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                console.log(data)
            })
    }, [])
    console.log(countries);
    if (countries) {
        return (
            <div className='bg-gray-100'>



                <div className='px-6 md:pl-24 pt-24 -mt-1' >
                    <h1 className='pl-5 border-l-4 border-Common text-primary text-4xl font-Montserrat'>Special <span className='font-bold text-Common'>
                        Deals And <br />
                        Last Minute</span> Amazing Offers</h1>
                    <p className='md:w-[600px] mt-6'>Discover irresistible specials and seize last-minute marvels with our exclusive deals. Uncover unforgettable adventures at unbeatable prices</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 mt-12'>
                    {
                        countries.map(country => {
                            return (
                                <div key={country._id}>
                                    <Link to={`/tourist-spot-of-a-country/${country.country_name}`}>
                                        <a className="my-anchor-element">
                                            <div className="card card-compact w-full bg-base-100 shadow-xl">
                                                <figure><img className='mt-1 hover:scale-95 duration-700 rounded-lg' src={country.image} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{country.country_name}</h2>
                                                    <p>{country.description}</p>
                                                </div>
                                            </div></a>

                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <Tooltip anchorSelect=".my-anchor-element" place="top">
                    Click the card to see all the tourist spot of this country
                </Tooltip>
            </div >
        );
    }
    else {
        return (
            <div>
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }
};

export default Country;