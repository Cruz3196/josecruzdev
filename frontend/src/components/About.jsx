import React from 'react';
import josecruz from "../assets/josecruz.png";

const About = () => {
    return (
        <div id="about" className="py-12 px-4">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-bold text-3xl sm:text-4xl mb-8">About Me</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto py-5 lg:py-10">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-left">
                        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl mb-4">
                            I'm Cruz. I'm a computer science major, and a full stack developer.
                        </h1>
                        <p className="py-2 text-base leading-7 sm:leading-8">
                            With a passion for creating innovative and user-friendly applications. After several years in the automotive industry as a service technician, I decided to make a career change and pursue a career in software development. I have been self learning for about two years, and recently decided to study computer science through online programs, with a goal of earning a bachelor's degree in computer science.
                        </p>
                        <p className="py-2 text-base leading-7 sm:leading-8">
                            I am comfortable working with React, Node.js, and MongoDB. I also have experience in HTML, CSS, and JavaScript. I am always eager to learn new technologies. 
                        </p>
                    </div>

                    {/* Responsive Image */}
                    <div className="order-1 lg:order-2 lg:flex justify-center ">
                        <div className="stack w-60 h-100 mx-1 sm:mx-5 lg:w-90 lg:h-150">
                            <img 
                                src={josecruz} 
                                alt="Jose Cruz" 
                                className="w-60 h-100 mx-1 sm:mx-5 lg:w-90 lg:h-150 rounded-md rotate-8 sm:rotate-10 shadow-lg"
                            />
                                <div className="bg-teal-400 grid place-content-center rounded-box">2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
