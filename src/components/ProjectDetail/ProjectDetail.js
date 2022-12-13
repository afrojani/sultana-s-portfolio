import React from 'react';
import { projects } from "../../data";

const ProjectDetail = () => {
    return (
        <div className='container mx-auto text-gray-400 bg-gray-900 body-font grid grid-cols-1 gap-4'>
            {
                projects.map((project) => (
                    <React.Fragment>
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row">
                                <div>
                                    <img src={project.shot1} alt='' className="max-w-sm rounded-lg shadow-2xl m-3" />
                                    <img src={project.shot2} alt='' className="max-w-sm rounded-lg shadow-2xl m-3" />
                                    <img src={project.shot3} alt='' className="max-w-sm rounded-lg shadow-2xl m-3" />
                                </div>
                                <div>
                                    <h1 className="text-5xl font-bold">{project.name}</h1>
                                    <p className="py-6">{project.description}</p>
                                    <a href={project.liveurl} className='btn-md rounded btn-primary my-5 mx-5'>Live Link</a>
                                    <a href={project.clientlink} className='btn-sm rounded btn-primary my-5'>Git Client side link</a>
                                    <a href={project.serverlink} className='btn-sm rounded btn-primary ml-6 my-5'>Git server side link</a>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default ProjectDetail;