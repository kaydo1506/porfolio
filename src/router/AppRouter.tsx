import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import App from '../components/App';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

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
            <Footer />
        </BrowserRouter>
    );
};
export default AppRouter;
