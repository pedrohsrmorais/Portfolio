import fq_print1 from '../imgs/fq_prints/fq_print1.jpg';
import fq_print2 from '../imgs/fq_prints/fq_print2.jpg';
import fq_print3 from '../imgs/fq_prints/fq_print3.jpg';
import fq_print4 from '../imgs/fq_prints/fq_print4.jpg';
import celular from '../imgs/fq_prints/celular.png';


export default function Layer({ param, language }) {

    if (param === true) {
        return (<div>
            <img src={celular} className='imageCellLayer' alt='imageCellLayer' />


            <div className="layer">
                {language === 'english' ?
                    <div className='layerText'>
                        A dynamic React Native application designed to enhance
                        the learning experience for students of physical chemistry, implemented
                        intuitive navigation and integrated multimedia resources to provide users
                        with a rich and immersive learning environment. <br></br><br></br>

                        <button className='layerTextButton'
                            onClick={() => {
                                window.open("https://github.com/pedrohsrmorais/FQ-Quiz", "_blank");
                            }}>Github</button>

                    </div> :
                    <div className='layerText'>
                        Um aplicativo React Native dinâmico projetado para aprimorar
                        a experiência de aprendizagem para estudantes de físico-química, implementa a
                        navegação intuitiva e nativa, além recursos multimídia integrados para oferecer aos usuários
                        um ambiente de aprendizagem rico e envolvente. <br></br><br></br>

                        <button className='layerTextButton'
                            onClick={() => {
                                window.open("https://github.com/pedrohsrmorais/FQ-Quiz", "_blank");
                            }}>Github</button>
                    </div>
                }

                <img src={fq_print1} className='imageLayer' alt='imageLayer' />
                <img src={fq_print2} className='imageLayer' alt='imageLayer' />
                <img src={fq_print3} className='imageLayer' alt='imageLayer' />
                <img src={fq_print4} className='imageLayer' alt='imageLayer' />

            </div>
        </div>
        )
    } else if (param === false) {
        return (
            <div></div>
        )
    }
}