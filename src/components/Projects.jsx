import React from 'react';
import { FaJava, FaJsSquare, FaPython, FaCode } from 'react-icons/fa'; // FaCode se usa como un marcador de posición para MATLAB

const Projects = () => {
  const projects = [
    {
      title: 'Java Project',
      description: 'git projects in Java language.',
      icon: <FaJava className="text-6xl text-blue-600" />, // Icono de Java
      link: 'https://github.com/ElBerserker/ProyectosJava'
    },
    {
      title: 'JavaScript Project',
      description: 'git projects in JavaScript language.',
      icon: <FaJsSquare className="text-6xl text-yellow-500" />, // Icono de JavaScript
      link: 'https://github.com/ElBerserker/ProyectosJavaScript'
    },
    {
      title: 'MATLAB Project',
      description: 'git projects in MATLAB language.',
      icon: <FaCode className="text-6xl text-blue-700" />, // Icono de MATLAB (usando FaCode como marcador de posición)
      link: 'https://github.com/ElBerserker/ProyectosMatlab'
    },
    {
      title: 'Python Project',
      description: 'git projects in Python language.',
      icon: <FaPython className="text-6xl text-green-500" />, // Icono de Python
      link: 'https://github.com/ElBerserker/ProyectosPython'
    }
  ];

  return (
    <section id="projects" className="bg-gray-700 text-gray-100 h-screen p-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-5xl mb-20 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 p-4 shadow rounded flex flex-col items-center transition-transform transform hover:scale-105"
          >
            {project.icon}
            <h3 className="text-xl mt-4 mb-2 text-center">{project.title}</h3>
            <p className="text-center">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

