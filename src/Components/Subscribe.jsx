import React from 'react';
import './subscribe.css';

const Subscribe = (props) => {
    const plans = [
        { name: 'Basic Plan', channels: '50+ Channels', price: '$10/month' },
        { name: 'Standard Plan', channels: '100+ Channels', price: '$20/month' },
        { name: 'Premium Plan', channels: '200+ Channels', price: '$30/month' }
    ];

    return (
        <div className="subscription-container">
            <h1>{props.header}</h1>
            <div className="subscription-cards">
                {plans.map((plan, index) => (
                    <div className="card" key={index}>
                        <h2>{plan.name}</h2>
                        <p>{plan.channels}</p>
                        <p>{plan.price}</p>
                        <button>Subscribe</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subscribe;
