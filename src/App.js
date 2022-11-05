import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';
import MainPayment from './Pages/Payments/MainPayment';
import Invoice from './Pages/Payments/Invoice';
import BankDetails from './Pages/Payments/BankDetails';
import JobsMain from './Pages/Jobs/JobsMain';
import JobsUi from './Pages/Jobs/JobsUi';

const App = () => {
  return (
    <div>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/jobs' element={<JobsMain/>}>
        <Route index element={ <JobsUi/> }></Route>
          <Route path="screening-task" element={  <JobsUi/>  }></Route>
          <Route path="status" element={  <JobsUi/>  }></Route>
        </Route>
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