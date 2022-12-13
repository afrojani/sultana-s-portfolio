import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from "../../data";

const Projects = () => {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto inline-block w-10 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>

                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Check out some of my recent works. Click the image to go to the live site. I have attached my git links of the projects too.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <React.Fragment key={project.imgurl}>
                            <a
                                href={project.liveurl}
                                className="sm:w-1/2 w-100 p-4">
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={project.imgurl}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.name}
                                        </h1>
                                        <p className="leading-relaxed">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                            <Link to='/details' className='btn rounded btn-primary my-5'>Details</Link>

                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;