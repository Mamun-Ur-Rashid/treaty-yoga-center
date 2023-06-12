import React from 'react';

const PopularInstructorCart = ({popularInstructor}) => {
    const { displayName, email, photoURL } = popularInstructor;
    return (
        <div>
            <div className="card w-96 h-[550px] bg-base-100 shadow-xl">
                <figure><img className='w-full' src={photoURL} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Instructor Name: {displayName}</h2>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorCart;