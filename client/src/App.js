import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => (
    <>
        <BrowserRouter>

            <Navbar />
            <Routes className="app__body">
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>

        </BrowserRouter>
    </>
);

export default App;