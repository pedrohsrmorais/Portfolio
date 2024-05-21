import { useState } from 'react';

import muvin from '../imgs/muvin.png';
import fqquiz from '../imgs/fqquiz.png';
import agenda from '../imgs/agenda.jpg';
import appTransporte from '../imgs/appTransporte.jpg';

import Layer from './layer';

export default function Projects({ language }) {

    const projects = [
        { id: 1, image: muvin, text: 'Muvin' },
        { id: 2, image: fqquiz, text: 'FQQuiz' },
        { id: 3, image: agenda, text: 'Agenda' },
        { id: 4, image: appTransporte, text: 'appTransporte' }
    ];

    function ProjectFunction(param) {
        switch (param) {
            case 'Muvin':
                window.open("https://www.ufrgs.br/museudeinformatica/desktop/index.html", "_blank");
                break;
            case 'FQQuiz':
                openLayer();
                break;
            case 'Agenda':
                window.open("https://github.com/pedrohsrmorais/Agenda", "_blank");
                break;
            case 'appTransporte':
                window.open("https://github.com/pedrohsrmorais/Gerenciamento-de-transporte-de-carga", "_blank");
                break;
            default:
                break;
        }
    }


    const [layer, setLayer] = useState(false)

    const openLayer = () => setLayer(true);
    const closeLayer = () => setLayer(false);

    return (
        <div className="grid-container">
            {projects.map(project => (
                <div
                    key={project.id}
                    className="grid-item"
                    onClick={() => ProjectFunction(project.text)}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={project.image} alt={`Imagem ${project.id}`} />
                    <p>{project.text}</p>
                </div>
            ))}


            {layer === true
                ?
                <div>
                    <button className='layerExit' onClick={closeLayer}>x</button>
                    <div className="closeLayer" onClick={closeLayer}></div>
                </div>
                :
                <div></div>
            }

            <Layer param={layer} language={language} />

        </div>
    );
}
