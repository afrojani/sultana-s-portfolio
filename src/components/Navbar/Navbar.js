import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href='/' className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Sultana Afroj Ani
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#blogs" className="mr-5 hover:text-white">
                        Blogs
                    </a>
                    <Link to='/about' className='mr-5 hover:text-white'>About Me</Link>
                    <a href="assets/images/SultanaAniResume.pdf" download="assets/images/SultanaAniResume.pdf" className="mr-5 hover:text-white btn btn-primary">
                        <button>Resume</button>
                    </a>

                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Hire Me
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </a>
            </div>
        </header>
    );
};

export default Navbar;