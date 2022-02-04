import React from 'react';

const Contact = () => {
    return (
        <div className='socials-container'>
            <div className='form-box'>
                <div className='row'>
                    <h1>Happy to hear from you!</h1>
                </div>

                <div className='row'>
                    <form
                        data-netlify='true'
                        name='contact'
                        method='POST'
                        className='contact-form'
                        data-netlify-recaptcha='true'
                    >
                        <div>
                            <div>
                                <label htmlFor='name'>Name</label>
                            </div>
                            <div>
                                <input type='text' name='name' id='name' required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor='email'>Email</label>
                            </div>
                            <div>
                                <input type='email' name='email' id='email' required />
                            </div>
                        </div>

                        <div>
                            <div>
                                <label>Drop me a line</label>
                            </div>
                            <div>
                                <textarea name='message'></textarea>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>&nbsp;</label>
                            </div>
                            <div>
                                <button className='btn btn-submit' type='submit' value='Send it!'>
                                    Send it!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
