import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { AuthContext } from '../../Provider/AuthContextProvider';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { DataContext } from '../../Provider/DataContextProvider';


const AddTouristSpot = () => {
    const { user } = useContext(AuthContext)
    const { setReloadAfterDelete } = useContext(DataContext)
    const [desc, setDesc] = useState('')
    // console.log(desc);
    const handleAddTouristSpot = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.url.value;
        const tourists_spot_name = form.spotName.value;
        const country_Name = form.country.value;
        const location = form.location.value;
        const short_description = desc;
        const average_cost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitor.value;
        const user_name = user.displayName;
        const user_email = user.email;
        const newTouristSpot = { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_name, user_email }
        // console.log(newTouristSpot);
        fetch("http://localhost:5000/tourist-spot", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Added Successfully!',
                        text: 'Your tourist spot data has been added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                    setReloadAfterDelete(true)
                }
        })
        

    }
    return (
        <div className='max-w-[350px] my-20 md:max-w-screen-sm lg:max-w-6xl mx-auto'>
            <Helmet>
                <title>Asian Escape Hub | Home Page</title>
            </Helmet>
            <div>
                <h1 data-aos="fade-in" data-aos-duration="5000" className='text-4xl font-OpenSans text-primary font-semibold'>Add New Tourist Spot</h1>
            </div>
            <div className='mt-8'>
                <form onSubmit={handleAddTouristSpot} data-aos="fade-in" data-aos-duration="1500" >
                    <div className='flex flex-col md:flex-row  gap-8'>
                        <div className='grow w-full'>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Tourist Spot Name <span className='text-red-500'>*</span></label>
                            <input required name='spotName' type='text' placeholder='Sent Martin' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                        </div>
                        <div className='grow w-full'>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'> Average Cost ($)<span className='text-red-500'> *</span></label>
                            <input required name='averageCost' type='number' placeholder='170' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                        </div>

                    </div>
                    <br />
                    <div className='flex flex-col md:flex-row  gap-8'>
                        <div className='grow w-full'>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Seasonality<span className='text-red-500'> *</span></label>
                            <input required name='seasonality' type='text' placeholder='Winter' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                        </div>
                        <div className='grow w-full'>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Tavel Time (Days)<span className='text-red-500'> *</span></label>
                            <input required name='travelTime' type='text' placeholder='3-7 days' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                        </div>

                    </div>
                    <br />
                    <div className='flex flex-col md:flex-row  gap-8'>
                        <div className='grow w-full'>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Img Url<span className='text-red-500'> *</span></label>
                            <input required name='url' type='text' placeholder='http://example.jpg' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                        </div>
                        <div className='grow w-full'>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Total Visitors Per Year (Approx)<span className='text-red-500'> *</span></label>
                            <input required name='totalVisitor' type='text' placeholder='Approx 5 million' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                        </div>

                    </div>
                    <br />
                    <div className='flex flex-col md:flex-row  gap-8'>
                        <div className='grow w-full'>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Location<span className='text-red-500'> *</span></label>
                            <input required name='location' type='text' placeholder='Southern Bangladesh' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                        </div>
                        <div className='grow w-full'>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Country Name<span className='text-red-500'> *</span></label>
                            <select required name='country' className='  text-primary border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full'>
                                <option className=' cursor-pointer' defaultChecked value="">Select Country</option>
                                <option className=' cursor-pointer' value="Bangladesh">Bangladesh</option>
                                <option className=' cursor-pointer' value="Thailand">Thailand</option>
                                <option className=' cursor-pointer' value="Malaysia">Malaysia</option>
                                <option className=' cursor-pointer' value="Vietnam">Vietnam</option>
                                <option className=' cursor-pointer' value="Cambodia">Cambodia</option>
                                <option className=' cursor-pointer' value="Indonesia">Indonesia</option>
                            </select>
                        </div>

                    </div>
                    <br />
                    <div className='flex flex-col md:flex-row  gap-8'>
                        <div className='grow w-full'>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Your Name<span className='text-red-500'></span></label>
                            <input name='name' type='text' defaultValue={user?.displayName} placeholder='Mk Munna' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                        </div>
                        <div className='grow w-full '>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Your Email<span className='text-red-500'></span></label>
                            <input name='email' type='email' defaultValue={user?.email} placeholder='mkmunna@gmail.com' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                        </div>
                    </div>
                    <br />
                    <div className='grow w-full '>
                        <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Short Description<span className='text-red-500'> *</span></label>
                        <textarea required onChange={(e) => setDesc(e.target.value)} placeholder='Write a short description about this tourist spot' className='border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full  text-primary' name="" id="" cols="30" rows="4"></textarea>
                    </div>
                    <button
                        className="mt-6 block bg-primary disabled:bg-[#9fdf96] w-full select-none rounded-lg py-2 text-white">Add Tourist Spot</button>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;