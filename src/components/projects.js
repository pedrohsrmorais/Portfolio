import React from 'react';
import me from '../imgs/me.jpg';

export default function Projects({ language }) {
    // Array de objetos contendo informações sobre as imagens e textos
    const projects = [
        { id: 1, image: me, text: 'Muvin' },
        { id: 2, image: me, text: 'FQ-Quiz' },
        { id: 3, image: me, text: 'Agenda' },
        { id: 4, image: me, text: 'Texto da imagem 4' }
    ];

    return (

        <div className="grid-container">
            {projects.map(project => (
                <div key={project.id} className="grid-item">
                    <img src={project.image} alt={`Imagem ${project.id}`} />
                    <p>{project.text}</p>
                </div>
            ))}
        </div>
    );
}
