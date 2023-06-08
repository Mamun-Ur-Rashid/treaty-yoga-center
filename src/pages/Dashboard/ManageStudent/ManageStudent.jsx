import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserAltSlash, FaUserAstronaut, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageStudent = () => {
    const { data: students = [], refetch } = useQuery(['students'], async () => {
        const res = await fetch('http://localhost:5000/students')
        return res.json();
    })
    const handlerMakeAdmin = (student) => {
        fetch(`http://localhost:5000/student/admin/${student._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${student.displayName} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handlerMakeInstructor = (student) => {
        fetch(`http://localhost:5000/student/instructor/${student._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${student.DisplayName} is Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <h3 className='text-center text-3xl'>Total Students: {students.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>role</th>
                                <th>role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student, index) => <tr
                                    key={student._id}>
                                    <th>{index + 1}</th>
                                    <th>{student.displayName}</th>
                                    <th>{student.email}</th>
                                    <th>{student.role === 'admin' ? "admin" : <button onClick={() => handlerMakeAdmin(student)}><FaUserShield></FaUserShield></button>}</th>
                                    <th>{student.role === 'instructor' ? "instructor" : <button onClick={() => handlerMakeInstructor(student)}><FaUserAstronaut></FaUserAstronaut></button>}</th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageStudent;