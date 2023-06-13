import React from 'react';
import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const image_hosting_token =import.meta.env.VITE_image_upload_token;
const AddAClass = () => {
    const { user} = useAuth();
    const [axiosSecure] = UseAxiosSecure();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {className, instructorName, email, availableSeats, price, status } = data;
                const newClass = {className, instructorName, price: parseFloat(price), email, availableSeats, status, image: imgURL }
                console.log(newClass);
                axiosSecure.post('/classes', newClass)
                .then(data => {
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-right',
                            icon: 'success',
                            title: 'Your item successfully added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };
    console.log(image_hosting_token)
    return (
        <div className='sm:w-full md:w-9/12 mx-auto my-8 bg-gradient-to-r p-4'>
            <Helmet>
                <title>Treaty Yoga | Add A Class</title>
            </Helmet>
            <h2 className='text-4xl font-bold text-fuchsia-600 text-center my-6'>Add A Class</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='form-control'>
                        <label htmlFor="">Class Name</label>
                        <input type='text' className='input input-bordered' {...register("className", { required: true })} placeholder='Class Name' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Instructor Name</label>
                        <input type='text' className='input input-bordered' {...register("instructorName", { required: true })} defaultValue={user?.displayName} readOnly placeholder='Enter your name' />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4' >
                    <div className='form-control'>
                        <label htmlFor="">Instructor Email</label>
                        <input type='email' className='input input-bordered'  {...register("email", { required: true })} readOnly defaultValue={user?.email} placeholder='Enter your Email' />

                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Available Seats</label>
                        <input type='number' className='input input-bordered'  {...register("availableSeats", { required: true })} placeholder='Available seats' />

                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4' >
                    <div className='form-control'>
                        <label htmlFor="">Price</label>
                        <input type='text' className='input input-bordered'  {...register("price", { required: true })} placeholder='Price' />

                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Status</label>
                        <select className='border-2 p-3 rounded-xl' {...register("status")}>
                            <option value="Pending">Pending</option>

                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Class Image</label>
                    <input type="file" className='file-input form-control border-2  rounded-lg w-full' {...register("image")} placeholder='Choose File' />
                </div>

                <div className='mt-4'>
                    <input className='btn btn-primary bg-fuchsia-600 ' type="submit" value='Add A Class' />
                </div>
            </form>
        </div>
    );
};

export default AddAClass;