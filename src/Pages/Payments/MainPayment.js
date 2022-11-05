import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainPayment = () => {
    return (
        <div class="drawer bg-base-100 drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            {/* <h2 style={{fontFamily:"inter"}} className='text-5xl text-left ml-3 my-3 font-bold text-purple-500'>Dashboard</h2> */}
            <Outlet></Outlet>
        </div>
        <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-72 py-20 gap-5 text-white text-base-content">

                <li className='text-green-700 text-md uppercase'>Payment Navigation</li>
                <li><Link to="/payment" className='btn btn-ghost bg-base-300'>Invoices</Link></li>
                <li><Link to="/payment/bankdetails" className='btn btn-ghost bg-base-300'>My Bank Details</Link></li>
            </ul>

        </div>
        </div>
    );
};

export default MainPayment;