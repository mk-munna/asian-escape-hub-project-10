import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { DataContext } from '../../Provider/DataContextProvider';

const UpdateTouristSpot = () => {
    const { id } = useParams()
    // console.log(id);
    const { setReloadAfterDelete, data } = useContext(DataContext);
    const [desc, setDesc] = useState('')
    const [resultData, setResultData] = useState(null)


    useEffect(() => {
        const resultData = data.find(data => data._id === id);
        setResultData(resultData)
    }, [data, id])
    
    // console.log(data);
    console.log(resultData);
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
        const newTouristSpot = { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, }
        console.log(newTouristSpot);
        fetch(`https://asian-escape-server-7wg5vnwib-mk-monnas-projects.vercel.app/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Updated Successfully!',
                        text: 'Your tourist spot data has been updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                    setReloadAfterDelete(true)
                }
            })


    }
    if (resultData) {
        const { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, } = resultData;
        return (
            <div className='max-w-[350px] my-20 md:max-w-screen-sm lg:max-w-6xl mx-auto'>
                <div>
                    <h1 data-aos="fade-in" data-aos-duration="5000" className='text-4xl font-OpenSans text-primary font-semibold'><span className='text-Common'>Update</span> Tourist Spot</h1>
                </div>
                <div className='mt-8'>
                    <form onSubmit={handleAddTouristSpot} data-aos="fade-in" data-aos-duration="1500" >
                        <div className='flex flex-col md:flex-row  gap-8'>
                            <div className='grow w-full'>
                                <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Tourist Spot Name <span className='text-red-500'>*</span></label>
                                <input defaultValue={tourists_spot_name} required name='spotName' type='text' placeholder={tourists_spot_name} className=' border border-Common px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                            </div>
                            <div className='grow w-full'>
                                <label className='font-OpenSans text-sm  block mb-2 text font-medium'> Average Cost ($)<span className='text-red-500'> *</span></label>
                                <input defaultValue={average_cost} required name='averageCost' type='number' placeholder={average_cost} className=' border border-Common px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                            </div>

                        </div>
                        <br />
                        <div className='flex flex-col md:flex-row  gap-8'>
                            <div className='grow w-full'>
                                <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Seasonality<span className='text-red-500'> *</span></label>
                                <input defaultValue={seasonality} required name='seasonality' type='text' placeholder={seasonality} className=' border border-Common px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                            </div>
                            <div className='grow w-full'>
                                <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Tavel Time (Days)<span className='text-red-500'> *</span></label>
                                <input defaultValue={travel_time} required name='travelTime' type='text' placeholder={travel_time} className=' border border-Common px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                            </div>

                        </div>
                        <br />
                        <div className='flex flex-col md:flex-row  gap-8'>
                            <div className='grow w-full'>
                                <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Img Url<span className='text-red-500'> *</span></label>
                                <input defaultValue={image} required name='url' type='text' placeholder={image} className=' border border-Common px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                            </div>
                            <div className='grow w-full'>
                                <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Total Visitors Per Year (Approx)<span className='text-red-500'> *</span></label>
                                <input defaultValue={totalVisitorsPerYear} required name='totalVisitor' type='text' placeholder={totalVisitorsPerYear} className=' border border-Common px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                            </div>

                        </div>
                        <br />
                        <div className='flex flex-col md:flex-row  gap-8'>
                            <div className='grow w-full'>
                                <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Location<span className='text-red-500'> *</span></label>
                                <input defaultValue={location} required name='location' type='text' placeholder={location} className=' border border-Common px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                            </div>
                            <div className='grow w-full'>
                                <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Country Name<span className='text-red-500'> *</span></label>
                                <select required name='country' className='  text-primary border border-Common px-6 py-[10px] rounded-md focus:outline-none w-full'>
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
                        <br />
                        <div className='grow w-full '>
                            <label className='font-OpenSans text-sm  block mb-2 text font-medium'>Short Description<span className='text-red-500'> *</span></label>
                            <textarea defaultValue={short_description} required onChange={(e) => setDesc(e.target.value)} placeholder={short_description} className='border border-Common px-6 py-[10px] rounded-md focus:outline-none w-full  text-primary' name="" id="" cols="30" rows="4"></textarea>
                        </div>
                        <button
                            className="mt-6 block bg-common bg-primary w-full select-none rounded-lg py-2 text-white">Add Tourist Spot</button>
                    </form>
                </div>
            </div>
        );
    } else {
        return (
            <div>Loading..</div>
        )
    }
};

export default UpdateTouristSpot;