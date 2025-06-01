import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { isSunset, toggleTheme } = useTheme();

    // Function to handle smooth scrolling to sections
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="navbar bg-base-100 px-0 my-0 sticky top-0 z-50 h-20">
            <div className="navbar-start">
            </div>

            <div className="navbar-center border-solid border-1 hidden rounded-full lg:flex h-10">
                <ul className="menu menu-horizontal px-4 gap-8">
                    <button 
                        onClick={() => scrollToSection('about')}
                        className="hover:text-teal-400 cursor-pointer bg-transparent border-none"
                    >
                        About
                    </button>
                    <button 
                        onClick={() => scrollToSection('project')}
                        className="hover:text-teal-400 cursor-pointer bg-transparent border-none"
                    >
                        Project
                    </button>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="hover:text-teal-400 cursor-pointer bg-transparent border-none"
                    >
                        Contact
                    </button>
                </ul>
            </div>
            
            <div className="navbar-end gap-2">
                <button className="border-solid border-1 py-2 px-3 flex lg:hidden shadow-md rounded-full cursor-pointer" onClick={()=>document.getElementById('my_modal_2').showModal()}> Menu
                </button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="text-lg ml-2">Menu</h3>              
                        <ul tabIndex={0} className="menu menu-sm dropdown-content w-full">
                            <button 
                                onClick={() => {
                                    scrollToSection('about');
                                    document.getElementById('my_modal_2').close();
                                }}
                                className='block my-2 w-full text-left bg-transparent border-none cursor-pointer'
                            >
                                <span className='border-b border-gray-300 pb-1 block'>
                                    About
                                </span>
                            </button>
                            <button 
                                onClick={() => {
                                    scrollToSection('project');
                                    document.getElementById('my_modal_2').close();
                                }}
                                className='block my-2 w-full text-left bg-transparent border-none cursor-pointer'
                            >
                                <span className='border-b border-gray-300 pb-1 block'>
                                    Project
                                </span>
                            </button>
                            <button 
                                onClick={() => {
                                    scrollToSection('contact');
                                    document.getElementById('my_modal_2').close();
                                }}
                                className='block my-2 w-full text-left bg-transparent border-none cursor-pointer'
                            >
                                <span className='border-b border-gray-300 pb-1 block'>
                                    Contact Me
                                </span>
                            </button>
                        </ul>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

                <button 
                    className="border-solid border-1 rounded-full flex items-center justify-center shadow-md"
                    onClick={toggleTheme}
                >
                    <label className="swap swap-rotate">
                        {/* Controlled checkbox that reflects the current theme state */}
                        <input 
                            type="checkbox" 
                            className="theme-controller" 
                            value="sunset"
                            checked={isSunset}
                            onChange={toggleTheme}
                        />

                        {/* sun icon - shows when NOT sunset (light theme) */}
                        <svg
                            className={`h-6 w-10 fill-current my-2 ${isSunset ? 'hidden' : 'block'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,1,0,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon - shows when sunset (dark theme) */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-10 my-2 text-teal-400 ${isSunset ? 'block' : 'hidden'}`}
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            >
                            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                        </svg>
                    </label>
                </button>
            </div>
        </div>
    )
}

export default Header;