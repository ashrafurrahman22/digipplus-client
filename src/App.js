import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';
import MainPayment from './Pages/Payments/MainPayment';
import Invoice from './Pages/Payments/Invoice';
import BankDetails from './Pages/Payments/BankDetails';

const App = () => {
  return (
    <div>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/payment' element={<MainPayment/>}>
        <Route index element={ <Invoice/> }></Route>
          <Route path="bankdetails" element={  <BankDetails/>  }></Route>
        </Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>


    </div>
  );
};

export default App;