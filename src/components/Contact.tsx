import React from 'react';

const Contact = () => {
    return (
        <div className='socials-container'>
            <div className='form-box'>
                <div className='row'>
                    <h2>Happy to hear from you</h2>
                </div>

                <div className='row'>
                    <form method='post' action='' className='contact-form'>
                        <div>
                            <div>
                                <label htmlFor='name'>Name</label>
                            </div>
                            <div>
                                <input type='text' name='name' id='name' placeholder='Your name' required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor='email'>Email</label>
                            </div>
                            <div>
                                <input type='email' name='email' id='email' placeholder='Your email' required />
                            </div>
                        </div>

                        <div>
                            <div>
                                <label>Drop me a line</label>
                            </div>
                            <div>
                                <textarea name='message' placeholder='Your message'></textarea>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>&nbsp;</label>
                            </div>
                            <div>
                                <input className='btn' type='submit' value='Send it!' />
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
