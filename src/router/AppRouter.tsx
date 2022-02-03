import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import App from '../components/App';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Projects from '../components/Projects';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Experience' element={<Experience />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Education' element={<Education />} />
                <Route path='/Projects' element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;
