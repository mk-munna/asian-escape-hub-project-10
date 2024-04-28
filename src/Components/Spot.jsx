import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BiCart, BiHeart } from 'react-icons/bi';

import { GiHomeGarage } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Estate = ({ estate }) => {
    // console.log(estate);
    const [isSale, setIsSale] = useState(false)
    const {id, title, price, status, area, facilities, image } = estate;
    const maxTitleLength = 20
    let displayTitle = ''
    if (title.length > maxTitleLength) {
        displayTitle =  title.slice(0,16)+'...'
    } else {
        displayTitle = title
    }
    useEffect(() => {
        if (status === 'For Rent') {
            setIsSale(false)
        }
        if (status === 'For Sale') {
            setIsSale(true)
        }
    }, [status])
    // console.log(isSale)
    // console.log(displayTitle);
    return (
        <div className='animate__animated animate__fadeInUp'>
            <div className="w-[280px] bg-base-100 shadow-xl  hover:scale-[1.01] duration-500 ">
                <figure className=" relative">
                    <img width={"100%"} src={image} className="rounded-xl" />
                    <span className={`absolute ${isSale ? 'bg-primary' : 'bg-[#a87a3a]'} px-2 py-[2px] rounded-md top-0 left-0 text-white font-Outfit`}>{status}</span>
                    <div className="tooltip absolute top-8 right-5" data-tip="Add to wishlist">
                        <button className='bg-white hover:bg-primary hover:text-white  p-2 rounded-md text-lg'><span><BiHeart></BiHeart></span></button>
                    </div>
                    <div className="tooltip absolute top-20 right-5" data-tip="Add to Cart">
                        <button className='bg-white hover:bg-primary hover:text-white  p-2 rounded-md text-lg'><span><BiCart></BiCart></span></button>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-Amaranth font-medium ">{displayTitle}</h2>
                    <h1 className='text-3xl text-primary font-bold font-Amaranth'>${price} </h1>
                    <div>
                        <span className='bg-slate-200 px-2 py-[2px] text-sm font-Outfit rounded-md'>{area}</span>
                        <hr className='my-3' />
                        <p className='font-Outfit font-semibold '>Facilities :</p>
                        <p className='font-Outfit text-[12px]'>{facilities.map((facility, index) => {
                            return <li key={index}>{facility}</li>
                        })}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/estate/${id}`}><button className='bg-[#379c8b] px-4 py-2 text-white rounded-lg flex items-center gap-2'><GiHomeGarage></GiHomeGarage>View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estate:PropTypes.object
};
export default Estate;