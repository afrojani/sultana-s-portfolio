import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const Home = () => {
    return (
        <main className='container mx-auto text-gray-400 bg-gray-900 body-font'>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
};

export default Home;