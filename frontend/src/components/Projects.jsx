import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectData from '../utils/ProjectData';

const Projects = () => {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleExpansion = (projectId) => {
        setExpandedProjects(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    return (
        <div id="project" className="py-12 px-4">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-bold text-3xl sm:text-4xl mb-5 sm:mb-5">Creative Works</h2>
                <p className="text-base">Here's some of my projects that I have worked on.</p>

                {/* Map over ProjectData and get the index */}
                {ProjectData.map((project, index) => {
                    const isExpanded = expandedProjects[project.id] || false;
                    const shownContent = isExpanded
                        ? project.description
                        : `${project.description.substring(0, 200)}...`;

                    // Check if the index is even. The first item is index 0 (even).
                    const isEvenIndex = index % 2 === 0;

                    return (
                        <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto py-5 lg:py-10">
                            {/* Text Content: Conditionally set order */}
                            <div className={`order-2 ${isEvenIndex ? 'lg:order-2' : 'lg:order-1'} text-left`}>
                                <h1 className="font-bold text-3xl sm:text-3xl mb-4">
                                    {project.title}
                                </h1>
                                <p className="py-2 text-base leading-7 sm:leading-8">
                                    {shownContent}
                                </p>
                                <button
                                    className="text-teal-400"
                                    onClick={() => toggleExpansion(project.id)}
                                >
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </button>
                                <div className="py-3 flex justify-start items-start">
                                    <button className="btn btn-link text-teal-400 px-0">
                                        <Link to={project.sourceCode} target="_blank">
                                            Source Code
                                        </Link>
                                        <i className="bi bi-code text-base cursor-pointer"></i>
                                    </button>
                                    <button className="btn btn-link text-teal-400">
                                        <Link to={project.liveDemo} target="_blank">
                                            Live Demo
                                        </Link>
                                        <i className="bi bi-box-arrow-up-right text-base cursor-pointer"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Responsive Image: Conditionally set order */}
                            <div className={`order-1 ${isEvenIndex ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
                                <img
                                    src={project.image}
                                    alt={project.title.toLowerCase()}
                                    className="xs:w-90 h-50 mx-1 sm:w-100 sm:h-70 sm:mx-5 lg:w-150 lg:h-100 xl:w-130 xl:h-90 "
                                />
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;