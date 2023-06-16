import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../shared/socialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, logOut } = useAuth();
    const navigate = useNavigate();
    const onSubmit = data => {
        // console.log(data);

        // create user
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser= { displayName: data.name, email: data.email, photoURL: data.photoUrl };
                        console.log("signup",saveUser);
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    logOut()
                                    .then(()=>{})
                                    navigate('/login');
                                    // Swal.fire({
                                    //     title: 'Success',
                                    //     text: 'User profile Updated',
                                    //     icon: 'success',
                                    //     confirmButtonText: 'Cool'
                                    // })
                                    // navigate('/');
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    };
    return (
        <div className='bg-slate-300'>
            <Helmet>
                <title>Treaty Yoga | SignUP</title>
            </Helmet>
            <div className="grid md:grid-cols-2  my-12 md:w-3/4 mx-auto gap-4">
                <div className='flex justify-center items-center'><img src="https://i.ibb.co/CbtLfxV/login.png" alt="" /></div>

                <div className="shadow-2xl  p-4">
                    <h1 className="text-4xl text-center p-4 font-bold">SignUP!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                        <div className='form-control'>
                            <label htmlFor="">Name</label>
                            <input className='input input-bordered' {...register("name", { required: true })} placeholder='Enter your name' />
                            {errors.name && <span className='mt-3 text-red-600'>Name  is required</span>}
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">photo URL</label>
                            <input className='input input-bordered' {...register("photoUrl", { required: true })} placeholder='Photo url' />
                            {errors.photoURL && <span className='mt-3 text-red-600'>Photo URL  is required</span>}
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">Email</label>
                            <input className='input input-bordered'  {...register("email", { required: true })} placeholder='Enter your Email' />
                            {errors.email && <span className='mt-3 text-red-600'>Email  is required</span>}
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">Password</label>
                            <input className='input input-bordered' type='password' {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder='Enter your password' />
                            {errors.password?.type == 'required' && <span className='mt-3 text-red-600'>Password field required</span>}
                            {errors.password?.type === 'minLength' && <span className='mt-3 text-red-600'>Password must be 6 characters long</span>}
                            {errors.password?.type === 'maxLength' && <span className='mt-3 text-red-600'>Password must be less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='mt-3 text-red-600'>Password must have one upperCase, one lowerCase, one number and one special characters</span>}
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">Confirm Password</label>
                            <input className='input input-bordered' type='password' {...register("confirmPassword", {
                                required: true,
                                validate: (value) => value === watch('password') || "Passwords do not match"
                            })} placeholder='Enter your confirm password' />
                            {errors.password?.type == 'required' && <span className='mt-3 text-red-600'>Confirm Password field required</span>}
                            {errors.confirmPassword && <span className='mt-3 text-red-600'>{errors.confirmPassword.message}</span>}
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='form-control'>
                                <label htmlFor="">Gender</label>
                                <select className='border-2 p-3 rounded-xl' {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div className='form-control'>
                                <label htmlFor="">Phone Number</label>
                                <input className='input input-bordered' type="number" {...register("PhoneNumber",)} placeholder='Enter your number' />
                            </div>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="">Address</label>
                            <input className='input input-bordered' type="text" {...register("address", { min: 60, max: 100 })} placeholder='Enter your address' />
                        </div>

                        <div className='form-control'>
                            <input type="submit" className='btn btn-primary' value="SignUP" />
                        </div>
                    </form>
                    <p className='my-4 text-center'><small className='text-red-500 text-center'>Already registered? <Link to='/login' className='underline text-md'>Go to LogIn</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;