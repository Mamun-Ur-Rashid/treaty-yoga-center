import React from 'react';

const ClassCard = ({ singleClass }) => {
    const { image, className, instructorName, availableSeats, price } = singleClass;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-full' src={image} alt="Movie" /></figure>
                <div className="card-body bg-lime-200 rounded-xl">
                    <h2 className="card-title ">{className}</h2>
                    <p>Instructor Name: {instructorName}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <p>Price: $ {price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;