import React from 'react';

const Invoice = () => {
    return (
        <div className='p-20 flex justify-between'>
            <div>
            <h2 className='text-xl'>No voice yet</h2>
            <p className='text-2xl font-semibold'>Remember to add your bank details</p>
            </div>

            <div>
                <div>
                <h2 className='text-2xl'>Lifetime Earning</h2>
                <h2 className='text-3xl font-bold'>₹ 0</h2>
                </div>
                <div>
                <h2 className='text-2xl'>This Month Earning</h2>
                <h2 className='text-3xl font-bold'>₹ 0</h2>
                </div>
            </div>
        </div>
    );
};

export default Invoice;