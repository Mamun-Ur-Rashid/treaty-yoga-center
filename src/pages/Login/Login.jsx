import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../shared/socialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [show, setShow] = useState();
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
        .then( result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'success!',
                text: 'Successfully login',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
            navigate(from, { replace: true});
        })
        console.log(data);

    };
    return (
        <div>
            <Helmet>
                <title>Treaty Yoga | login</title>
            </Helmet>
            <div className="grid md:grid-cols-2 bg-base-200 my-12 md:w-3/4 mx-auto">
                <div><img src="" alt="" /></div>

                <div className="shadow-2xl bg-base-100 p-4">
                    <h1 className="text-4xl text-center p-4 font-bold">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>

                        <div className='form-control'>
                            <label htmlFor="">Email</label>
                            <input className='input input-bordered'  {...register("email", { required: true })} placeholder='Enter your Email' />
                            {errors.email && <span className='mt-3 text-red-600'>Email  is required</span>}
                        </div>
                        <div className='form-control relative'>
                            <label htmlFor="">Password</label>
                            <input className='input input-bordered' type={show ? "text" : "password"} {...register("password", {
                                required: true,
                            })} placeholder='Enter your password' />
                            <p onClick={() => setShow(!show)}>
                                {
                                    show? <FaEye className='absolute top-10 right-10'></FaEye> :
                                    <FaEyeSlash className='absolute top-10 right-10'></FaEyeSlash>
                                }
                            </p>
                            {errors.password?.type == 'required' && <span className='mt-3 text-red-600'>Password field required</span>}
                        </div>
                        <div className='form-control'>
                            <input type="submit" className='btn btn-primary' value="Login" />
                        </div>
                    </form>
                    <p className='my-4 text-center'><small className='text-red-500 text-center'>New here? <Link to='/signUp' className='underline text-md'>Create a new Account</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;