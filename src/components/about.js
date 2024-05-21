

export default function About({ language }) {
    return (
        <div className="content">
            <div id='about'></div>


            {language === 'english' ?
                <>My name is Pedro Henrique. <br /> <br />
                    I hold a Bachelor's degree in Chemistry from UFRGS and a Technologist diploma in Systems Analysis and Development from Uniritter. My professional journey has been marked by significant experiences in commercial management and later, web services development. These roles have profoundly enriched my skills and contributed to my professional growth.  <br /> <br />
                    Recently, I've uncovered a deep-seated passion for Data Science. This realization has prompted me to embark on a new path, where I'm actively pursuing specialization through comprehensive training at the DNC School. My ultimate aim is to immerse myself fully in the dynamic realm of technology, leveraging my analytical prowess to craft innovative solutions for diverse challenges. <br /> <br />
                    This multifaceted experience has not only broadened my expertise but also instilled in me a profound appreciation for versatility. I thrive in environments that demand agility, where I can seamlessly pivot between disciplines and leverage my eclectic background to tackle complex challenges from multiple angles.
                    My unwavering commitment to flexibility and adaptability underscores my eagerness to fully immerse myself in the technology landscape. I am driven by the opportunity to harness my diverse skill set and analytical acumen to engineer intelligent and creative solutions across a spectrum of domains.
                </>
                :
                <>Meu nome é Pedro Henrique. <br /> <br />
                    Possuo uma licenciatura em Química pela UFRGS e um diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas pela Uniritter. Minha jornada profissional foi marcada por experiências significativas em gestão comercial e, posteriormente, desenvolvimento de serviços web. Esses papéis enriqueceram profundamente minhas habilidades e contribuíram para meu crescimento profissional. <br /> <br />
                    Recentemente, descobri uma paixão profunda pela Ciência de Dados. Essa realização me levou a embarcar em um novo caminho, onde estou buscando ativamente especialização por meio de treinamento abrangente na Escola DNC. Meu objetivo final é me imergir completamente no dinâmico campo da tecnologia, aproveitando minha perícia analítica para elaborar soluções inovadoras para diversos desafios. <br /> <br />
                    Essa experiência multifacetada não apenas ampliou minha experiência, mas também me inspirou uma profunda apreciação pela versatilidade. Eu prospero em ambientes que exigem agilidade, onde posso transitar perfeitamente entre disciplinas e aproveitar meu background eclético para enfrentar desafios complexos sob diferentes perspectivas.
                    Meu compromisso inabalável com a flexibilidade e adaptabilidade ressalta meu desejo de me imergir totalmente na paisagem tecnológica. Sou impulsionado pela oportunidade de aproveitar minha variada habilidade e acuidade analítica para engenhar soluções inteligentes e criativas em um espectro de domínios.
                </>}


        </div>
    )
}