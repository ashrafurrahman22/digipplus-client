import React from 'react';

const BankDetails = () => {
    return (
        <div className='p-20 flex justify-between'>
           <div>
           <div className='flex items-center justify-between gap-32'>
                <h1>Account Number</h1>
                <input type="text" placeholder='Account Number' className='w-72 px-2 border border-black py-2 rounded' />
            </div>
            <div className='flex items-center justify-between gap-32 py-3'>
                <h1>Bank Name</h1>
                <input type="text" placeholder='Bank Name' className='w-72 px-2 border border-black py-2 rounded' />
            </div>
            <div className='flex items-center justify-between gap-32'>
                <h1>ISFC Code</h1>
                <input type="text" placeholder='ISFC Code' className='w-72 px-2 border border-black py-2 rounded' />
            </div>
            <div className='flex items-center justify-between gap-32 py-3'>
                <h1>Pan Number</h1>
                <input type="text" placeholder='Pan Number' className='w-72 px-2 border border-black py-2 rounded' />
            </div>
            <div className='flex items-center justify-between gap-32'>
                <h1>State Name</h1>
                <input type="text" placeholder='State Name' className='w-72 px-2 border border-black py-2 rounded' />
            </div>
                <input type="submit" value="Submit" className='bg-orange-600 w-44 my-10 btn btn-ghost text-white' />
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

export default BankDetails;