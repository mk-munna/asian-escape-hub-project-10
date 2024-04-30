import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Provider/DataContextProvider';
import { AuthContext } from '../../Provider/AuthContextProvider';
import Swal from 'sweetalert2';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyList = () => {
    const { data, setReloadAfterDelete } = useContext(DataContext)
    const { user } = useContext(AuthContext)
    const [resultData, setResultData] = useState(null)
    useEffect(() => {
        const resultData = data.filter(data => data.user_email === user.email);
        setResultData(resultData)
    },[data])
    // console.log(resultData);
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/touristSpot/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist spot has been deleted.",
                                icon: "success"
                            });
                            setReloadAfterDelete(true)
                        }
                    })
                
            }
        });
        
    }
    if (resultData) {
        return (
            <div className='my-20 max-w-[350px] md:max-w-screen-sm lg:max-w-6xl mx-auto'>
                <div>
                    <h1 className='text-primary font-OpenSans font-semibold text-3xl'>My Added Tourist Spots</h1>
                    <p className='mt-6 w-full md:w-3/4'>Manage your tourism contributions effortlessly. Review, edit, or delete tourist spots you've added. Your inputs shape unforgettable experiences for travelers worldwide.</p>
                </div>
                <div className='mt-12'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tourist Spot Name</th>
                                    <th>Country</th>
                                    <th>Location</th>
                                    <th>Average Cost</th>
                                    <th>Travel Time</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {
                                    resultData.map((spot,index) => {
                                        return (
                                            <tr key={spot._id}>
                                                <th>{index + 1}</th>
                                                <td>{spot.tourists_spot_name}</td>
                                                <td>{spot.country_Name}</td>
                                                <td>{spot.location}</td>
                                                <td>${spot.average_cost}</td>
                                                <td>{spot.travel_time}</td>
                                                <td>
                                                    <Link to={`/update/${spot._id}`}><button className='bg-primary text-white text-[12px] px-2 py-[2px] rounded-[4px]'>Update</button></Link>
                                                </td>
                                                <td><button onClick={() => handleDelete(spot._id)} className='bg-[#dbfde8] px-2 py-[2px] rounded-[4px]'><MdOutlineDeleteOutline className='text-xl '/></button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        );
    } else {
        return (
            <div className='flex justify-center items-center'>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
};

export default MyList;