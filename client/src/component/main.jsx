import React from 'react';
import Home from './home';
import Welcome from './welcome';
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'


const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Welcome/>} ></Route>
                <Route path='posts' element={<Home/>}></Route>
            </Routes>
        </div>
    );
}

export default Main;
