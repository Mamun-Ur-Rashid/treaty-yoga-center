import React from 'react';

const InstructorCart = ({ instructor }) => {
    const { displayName, email, image } = instructor;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{displayName}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCart;