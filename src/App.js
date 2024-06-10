import React, { useState } from 'react';
import US from 'country-flag-icons/react/3x2/US';
import BR from 'country-flag-icons/react/3x2/BR';

// Styles
import './styles/body.css';
import './styles/menu.css';
import './styles/about.css';
import './styles/formation.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/layer.css';

// Components
import Menu from './components/menu';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Formation from './components/formation';

export default function App() {
    const [language, setLanguage] = useState('english');

    const handleFlag = () => {

        setLanguage(language === 'english' ? 'portuguese' : 'english');
    };


    return (
        <div>
            <Menu language={language} />

            {language === 'english' ?
                <US title="United States" className="countryflag" onClick={handleFlag} /> :
                <BR title="United States" className="countryflag" onClick={handleFlag} />
            }

            <About language={language} />

            <Formation language={language} />

            <div id='projects'></div>
            <Projects language={language} />

            <Contact language={language} />



        </div>
    );
}
