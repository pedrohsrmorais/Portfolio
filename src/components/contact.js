import linkedin from '../imgs/logos/LinkedIn_logo.png';
import github from '../imgs/logos/GitHub-logo.png';

export default function Contact({ language }) {

    return (
        <div className="contact" id='contact'>
            {language === 'english'?
            <h2>Contact me right now via LinkedIn or email!</h2>
            :
            <h2>Me contate agora mesmo por linkedin ou email!</h2>
            }
            

            <img src={linkedin} className='imagesLogos' alt='linkedinLogo' onClick={
                () => { window.open("https://www.linkedin.com/in/pedro-henrique-morais-56008b204/", "_blank") }} />

            <img src={github} className='imagesLogos' alt='linkedinLogo' onClick={
                () => { window.open("https://github.com/pedrohsrmorais", "_blank") }
            } />

        </div>
    );
}
