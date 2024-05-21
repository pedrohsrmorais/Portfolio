import linkedin from '../imgs/logos/LinkedIn_logo.png';
import github from '../imgs/logos/GitHub-logo.png';
import outlook from '../imgs/logos/Outlook_logo.png';

export default function Contact({ language }) {
    const copyToClipboard = (text) => {

        navigator.clipboard.writeText(text).then(() => {

            if (language === 'english') {
                alert('text copied!');
            } else {
                alert('texto copiado com sucesso');
            }
        }).catch(err => {

            console.error('Erro ao copiar texto: ', err);
        });
    };

    return (
        <div className="contact" id='contact'>
            {language === 'english' ?
                <h2>Contact me right now via LinkedIn or email!</h2>
                :
                <h2>Me contate agora mesmo por linkedin ou email!</h2>
            }

            <img src={linkedin} className='imagesLogos' alt='linkedinLogo' onClick={
                () => { window.open("https://www.linkedin.com/in/pedro-henrique-morais-56008b204/", "_blank") }} />

            <img src={github} className='imagesLogos' alt='linkedinLogo' onClick={
                () => { window.open("https://github.com/pedrohsrmorais", "_blank") }
            } />

            <img src={outlook} className='imagesLogos' alt='outlookLogo' onClick={
                () => { copyToClipboard('pedrinhu.moraes@hotmail.com') }
            } />

        </div>
    );
}
