import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/digipplus-logo-70x70.38a25d5cef0d.png'
import '../../Styles/Home.css'

const Home = () => {
    return (
        <div className='px-32 py-6'>
            
            <div className='text-center py-3'>
            
            <img src={logo} className="mx-auto" alt="" />
            <h1 className='text-3xl font-bold py-2'>Welcome To Diggipplus</h1>
            </div>

            <div id='mike'>
                <p className='text-xl mt-[-100] py-3'>Announcements 📢📢</p>
            </div>

            

            <div>
            <p className='bg-base-300 p-3 rounded'>We are working on adding Project and Internship Details , So just fill up profile only</p>
            <h1 className='text-2xl text-green-700 py-4'>Internships</h1>
            </div>

            <Link to='/jobs' className='card card-body bg-base-100 shadow-xl shadow-green-600 w-72 p-10 my-3'>
                <h1 className='text-xl text-green-700'>Solution Writing</h1>
                <h1>Write Solution</h1>
            </Link>

        </div>
    );
};

export default Home;