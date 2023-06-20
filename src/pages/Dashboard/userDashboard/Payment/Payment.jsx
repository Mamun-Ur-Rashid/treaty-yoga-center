import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import CheckoutForm from './checkoutForm/CheckoutForm';
import useCart from '../../../../Hooks/useCart';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);
const Payment = () => {
    const cart = useLoaderData();
    console.log("payment",cart);
    const {price} = cart;
    //  const [cart, refetch] = useCart();
    //  const total = cart.reduce((sum, selectClass) => sum + selectClass.price, 0);
    //  const price = parseFloat(total.toFixed(2));
    console.log(cart);

    return (
        <div className='w-full'>
            <h3 className='text-center font-bold text-3xl'>Payment</h3>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price} cart={cart}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;