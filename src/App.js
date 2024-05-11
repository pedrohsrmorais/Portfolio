import React, { useState } from 'react';
import US from 'country-flag-icons/react/3x2/US';
import BR from 'country-flag-icons/react/3x2/BR';

// Styles
import './styles/body.css';
import './styles/menu.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/contact.css'

// Components
import Menu from './components/menu';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

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

            <Projects language={language} />

            <Contact language={language} />

        </div>
    );
}
