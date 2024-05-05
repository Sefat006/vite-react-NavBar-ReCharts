import React from 'react';
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {membership_type, price, duration} = option;
    return (
        <div className='m-6 flex flex-col bg-blue-200 text-black p-5 rounded-md'>
            <h2>
                <span className="text-7xl">{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-4xl'>{membership_type}</h4>
            <p className='flex-grow'>{duration}</p>
            <button className='p-2 rounded-lg w-full bg-green-400'>Select</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;