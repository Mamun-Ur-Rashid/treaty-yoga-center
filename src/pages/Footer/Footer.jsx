import React from 'react';
import { FaAddressBook, FaMapMarkerAlt, FaPhone, FaRegAddressCard, FaSearchLocation } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className=" p-10 bg-gray-600 text-white ">
                <div className='grid grid-cols-3'>
                    <div className='space-y-2'>
                        <img className='text-center' src="https://i.ibb.co/tB6MH7F/yoga-64.png" alt="yoga-64" border="0"></img>
                        <p className='text-2xl font-bold'>Treaty Yoga and <br /> Meditation Center</p>
                        <p> Providing reliable tech since 2015</p>
                        <p>email:treaty&yoga@gmail.com</p>
                        <p className='inline-flex gap-2'><FaPhone></FaPhone>: +96 25142631</p>
                        <p className='inline-flex gap-2 ml-4'><FaPhone></FaPhone>: +86 36259874</p>
                        <p className='inline-flex gap-2'><FaMapMarkerAlt></FaMapMarkerAlt> : 24/1025 NewYork</p>

                        </div>
                    <div className=''>
                        <span className="text-xl font-bold">Main Yoga Services</span>
                       <p> <a className="link link-hover">strength and grace</a></p>
                       <p> <a className="link link-hover">wake Up Inside</a></p>
                       <p> <a className="link link-hover">Healthy Core</a></p>
                       <p> <a className="link link-hover">Hip Release</a></p>
                       <p> <a className="link link-hover">Wild Thing To Lunge</a></p>
                       
                    </div>
                    <div>
                        <span className="text-xl font-bold">Treaty Yoga and Meditation Center</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;