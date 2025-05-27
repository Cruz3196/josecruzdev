import { useState } from 'react'
import { Link } from 'react-router-dom';
import ProjectData from './ProjectData'; // Import your data

const Projects = () => {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleExpansion = (projectId) => {
        setExpandedProjects(prev => ({
        ...prev,
        [projectId]: !prev[projectId]
        }));
    }

    return (
        <div id="project" className="py-12 px-4">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-bold text-3xl sm:text-4xl mb-5 sm:mb-5">Creative Works</h2>
                <p className="text-base">Here's some of my projects that I have worked on.</p>
                
                {/* Map over ProjectData */}
                {ProjectData.map((project) => {
                const isExpanded = expandedProjects[project.id] || false;
                const shownContent = isExpanded 
                    ? project.description 
                    : `${project.description.substring(0, 200)}...`;

                return (
                    <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto py-5 lg:py-10">
                    {/* Text Content */}
                        <div className="order-2 lg:order-2 text-left">
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
                    
                        {/* Responsive Image */}
                        <div className="order-1 lg:order-1 flex justify-center">
                            <img
                            src={project.image}
                            alt={project.title.toLowerCase()}
                            className="xs:w-90 h-50 mx-1 sm:w-100 sm:h-70 sm:mx-5 lg:w-110 lg:h-70"
                            />
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    )
}

export default Projects;