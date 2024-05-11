import React from 'react';
import me from '../imgs/me.jpg';

export default function Menu({language}) {
    return (
        <div>
            <div className="menu">
                <button></button>
                <button>{language === 'english' ? 'Contact' : 'Contato'}</button>
                <button>{language === 'english' ? 'Projects' : 'Projetos'}</button>
                <button>{language === 'english' ? 'About me' : 'Sobre mim'}</button>
            </div>

            <img src={me} alt="me" className="image" />
        </div>
    );
}
