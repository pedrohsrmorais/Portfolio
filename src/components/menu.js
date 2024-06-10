import React, { useState, useEffect } from 'react';

export default function Menu({ language }) {
    const [scroll, setScroll] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        setScroll(window.scrollY);
        const about = document.getElementById('about').offsetTop;
        const formation = document.getElementById('formation').offsetTop;
        const projects = document.getElementById('projects').offsetTop;
        const contact = document.getElementById('contact').offsetTop;

        if (window.scrollY >= contact - window.innerHeight / 2) {
            setActiveSection('contact');
        } else if (window.scrollY >= projects - window.innerHeight / 2) {
            setActiveSection('projects');
        } else if (window.scrollY >= about - window.innerHeight / 2) {
            setActiveSection('about');
        } else if (window.scrollY >= formation - window.innerHeight / 2) {
            setActiveSection('formation');
        }else {
            setActiveSection('');
        }


    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log(scroll);
    }, [scroll]);

    useEffect(() => {
        handleScroll();
    }, [language]);

    function scrollTo(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div>
            <div className={`menu`}>
                <button></button>
                <button
                    onClick={() => scrollTo('about')}
                    className={activeSection === 'about' ? 'active' : ''}
                >
                    {language === 'english' ? `About me` : `Sobre mim`}
                </button>
                <button
                    onClick={() => scrollTo('formation')}
                    className={activeSection === 'formation' ? 'active' : ''}
                >
                    {language === 'english' ? `Formations` : `Formações`}
                </button>
                <button
                    onClick={() => scrollTo('projects')}
                    className={activeSection === 'projects' ? 'active' : ''}
                >
                    {language === 'english' ? `Projects` : `Projetos`}
                </button>
                <button
                    onClick={() => scrollTo('contact')}
                    className={activeSection === 'contact' ? 'active' : ''}
                >
                    {language === 'english' ? `Contact` : `Contato`}
                </button>
            </div>
        </div>
    );
}
