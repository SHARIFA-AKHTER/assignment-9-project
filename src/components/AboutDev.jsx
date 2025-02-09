import React from 'react';

const AboutDev = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4 sm:p-8 md:p-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">About the Developer</h1>
            <p className="text-base sm:text-lg mb-4 max-w-3xl mx-auto px-4">
                Hello! I'm Sharifa Akhter, a passionate web developer with a love for building
                functional and visually appealing applications. I specialize in front-end
                development using modern technologies like React, Tailwind CSS, and Firebase.
            </p>
            <p className="text-base sm:text-lg mb-4 max-w-3xl mx-auto px-4">
                Throughout my career, I've had the opportunity to work on several exciting
                projects, including e-commerce platforms, coupon applications, and more.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside mb-6 mx-auto max-w-3xl px-4 text-base sm:text-lg">
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Firebase Authentication</li>
                <li>Node.js</li>
                <li>API Integration</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Connect with Me</h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                <a href="https://www.linkedin.com/in/sharifa-akhter-784bb6252/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-500 text-base sm:text-lg hover:underline">
                    LinkedIn
                </a>
                <a href="https://github.com/SHARIFA-AKHTER" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-800 text-base sm:text-lg hover:underline">
                    GitHub
                </a>
                <a href="mailto:sr0589071@gmail.com" 
                   className="text-red-500 text-base sm:text-lg hover:underline">
                    Email
                </a>
            </div>
        </div>
    );
};

export default AboutDev;


