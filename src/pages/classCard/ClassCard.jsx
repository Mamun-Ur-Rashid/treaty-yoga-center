import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import useClasses from '../../Hooks/useClasses';


const ClassCard = ({ singleClass }) => {
    const { image, className, instructorName, availableSeats, price } = singleClass;
    const { user } = useAuth();
//    const [, refetch] = useClasses();
    const navigate = useNavigate();
    const location = useLocation();

    const handlerSelectedClass = (singleClass) => {
        if (user && user?.email) {
            const selectedClass = { className, instructorName, availableSeats, price, email:user?.email }
            fetch('http://localhost:5000/selectedClasses',{
                method: 'POST',
                headers: {'content-type': "application/json"},
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your class added successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to selected the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from : location}});
                }
              })
        }
    }
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
                        <button onClick={() => handlerSelectedClass(singleClass)} className="btn btn-primary w-full">Selected Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;