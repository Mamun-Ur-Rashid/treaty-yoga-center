import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
        const { error, status } = useRouteError();

  return (
        <section className='flex items-center h-screen p-16  text-gray-900'>
      <div className='w-3/4 grid md:grid-cols-2 border-2 p-14 shadow-2xl bg-[#7FA0CC] items-center justify-between px-5 mx-auto'>
        <div>
          <img className='image-2' src="https://i.ibb.co/qYnvZmx/240-F-203961417-s-VVKp-Ihvqabve-OJkb-Iv2rqvz4-R8-Hbfz-J.jpg" alt="" /> 
        </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-[#BFD3EF] text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;