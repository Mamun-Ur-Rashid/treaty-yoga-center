import React from 'react';

const Home = () => {
    return (
        <div className='mt-28'>
            <h1>this is home page</h1>
            <button className="btn btn-active">Default</button>
            <button className="btn btn-active btn-neutral">Neutral</button>
            <button className="btn btn-active btn-primary">Primary</button>
            <button className="btn btn-active btn-secondary">Secondary</button>
            <button className="btn btn-active btn-accent">Accent</button>
            <button className="btn btn-active btn-ghost">Ghost</button>
            <button className="btn btn-active btn-link">Link</button>
        </div>
    );
};

export default Home;