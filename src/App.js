import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';

const App = () => {
  return (
    <div>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>


    </div>
  );
};

export default App;