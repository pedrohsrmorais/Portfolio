import React, { useState } from 'react';


export default function Contact({ language }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-form">
            {language === 'english' ?
                <h2>Contact me</h2>
                :
                <h2>Entre em Contato</h2>
            }

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {language === 'english' ?
                        <label htmlFor="name">Name:</label>
                        :
                        <label htmlFor="name">Nome:</label>
                    }

                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    {language === 'english' ?
                        <label htmlFor="message">Messege:</label>
                        :
                        <label htmlFor="message">Mensagem:</label>
                    }

                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                {language === 'english' ?
                    <button type="submit">Submit</button>
                    :
                    <button type="submit">Enviar</button>
                }

            </form>
        </div>
    );
}
