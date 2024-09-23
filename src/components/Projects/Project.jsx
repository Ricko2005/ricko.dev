import React, { useState } from 'react';
import './Project.css';
import { assets } from '../../assets/assets';

const projectsData = [
  { id: 1, category: 'PHP', image: assets.Gax },
  { id: 2, category: 'Laravel', image: assets.Macbook },
  { id: 3, category: 'React', image: assets.Galaxi },
  { id: 4, category: 'Tout', image: assets.Air },
  { id: 5, category: 'PHP', image: assets.Task },
  { id: 6, category: 'React', image: assets.js },
];

export const Project = () => {
  const [activeCategory, setActiveCategory] = useState('Tout');

  // Filtrer les projets selon la catégorie active
  const filteredProjects = (() => {
    if (activeCategory === 'Tout') {
      return [
        { id: 1, image: assets.Gax },
        { id: 2, image: assets.Macbook },
        { id: 3, image: assets.Galaxi },
        { id: 4, image: assets.Air },
        { id: 5, image: assets.Task },
        { id: 6, image: assets.js },
      ];
    }
    return projectsData.filter((project) => project.category === activeCategory);
  })();

  return (
    <section className="project">
      <img src={assets.Projects} alt="" />
      <h1>Mes <span>projects</span></h1>

      {/* Catégories de filtres */}
      <h4 className="flexible">
        <h2 onClick={() => setActiveCategory('Tout')} style={{ cursor: 'pointer' }}>
          Tout
        </h2>
        <h2 onClick={() => setActiveCategory('PHP')} style={{ cursor: 'pointer' }}>
          PHP
        </h2>
        <h2 onClick={() => setActiveCategory('Laravel')} style={{ cursor: 'pointer' }}>
          Laravel
        </h2>
        <h2 onClick={() => setActiveCategory('React')} style={{ cursor: 'pointer' }}>
          React
        </h2>
      </h4>

      <div className="work">
        <br />

        {/* Affichage des projets filtrés */}
        <div className={`cards ${activeCategory === 'Tout' ? 'grid-layout' : ''}`}>
          {filteredProjects.map((project) => (
            <div className="card" key={project.id}>
              <img src={project.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;



