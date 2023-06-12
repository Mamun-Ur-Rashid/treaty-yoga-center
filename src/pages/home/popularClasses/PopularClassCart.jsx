import React from 'react';

const PopularClassCart = ({popularClass}) => {
    const {image, className, instructorName, price, availableSeats} = popularClass;
    // console.log(popularClass);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body bg-fuchsia-100">
                    <h2 className="card-title">{className}</h2>
                    <p>Instructor Name: {instructorName}</p>
                    <p>Price: ${price}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCart;