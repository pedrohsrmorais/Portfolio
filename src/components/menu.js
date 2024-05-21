import me from '../imgs/me.jpg';

export default function Menu({ language }) {

    function scrollTo(id) {
        const element = document.getElementById(id);
        
        element.scrollIntoView({ behavior: 'smooth' });

    }

    return (
        <div>
            <div className="menu">
                <button></button>
                <button onClick={() => scrollTo('contact')}>{language === 'english' ? 'Contact' : 'Contato'}</button>
                <button onClick={() => scrollTo('projects')}>{language === 'english' ? 'Projects' : 'Projetos'}</button>
                <button onClick={() => scrollTo('about')}>{language === 'english' ? 'About me' : 'Sobre mim'}</button>
            </div>


            <img src={me} alt="me" className="imageMenu" />
            
            
        </div>
    );
}