import React from 'react';
// import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='project-container' id='portfolio'>
            <h1>A few of my standout projects</h1>
            <div className='container flex1'>
                <div className='card'>
                    <div className='card__side card__side--front'>
                        <div className='card__picture card__picture--1'></div>
                    </div>

                    <div className='card__side card__side--back '>
                        <h4 className='card__heading'>Live Chatroom</h4>
                        <div className='card__details'>
                            <ul>
                                Technologies used__
                                <li> React language/library</li>
                                <li>Redux state manager</li>
                                <li>Firebase database</li>
                                <li>SASS </li>
                            </ul>
                        </div>
                        <div className='card__cta'>
                            <a
                                href='https://heychat22.netlify.app/'
                                target='_blank'
                                className='btn btn--white'
                                rel='noreferrer'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card__side card__side--front'>
                        <div className='card__picture card__picture--2'>
                            &nbsp;
                        </div>
                    </div>

                    <div className='card__side card__side--back card__side--back-2'>
                        <h4 className='card__heading'>
                            Budget App <br /> Implementing all 4 main CRUD
                            operations.
                        </h4>
                        <div className='card__details'>
                            <ul>
                                Technologies used__
                                <li> React language/library</li>
                                <li>Redux state manager</li>
                                <li>Firebase database</li>
                                <li>SASS </li>
                                <li>Webpack </li>
                                <li>Jest testing</li>
                                <li>Heroku environment variables </li>
                            </ul>
                        </div>
                        <div className='card__cta'>
                            <a
                                href='https://budget-b0t.herokuapp.com/'
                                target='_blank'
                                className='btn btn--white'
                                rel='noreferrer'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card__side card__side--front'>
                        <div className='card__picture card__picture--3'>
                            &nbsp;
                        </div>
                    </div>

                    <div className='card__side card__side--back card__side--back-3'>
                        <h4 className='card__heading'>
                            E-Commerce App
                            <br /> (w/Commerce.JS)
                        </h4>
                        <div className='card__details'>
                            <ul>
                                Technologies used__
                                <li> React language/library</li>
                                <li>Material UI</li>
                                <li> Commerce.Js</li>
                            </ul>
                        </div>
                        <div className='card__cta'>
                            <a
                                href='https://storefront-ify.netlify.app/#/'
                                target='_blank'
                                className='btn btn--white'
                                rel='noreferrer'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card__side card__side--front'>
                        <div className='card__picture card__picture--4'></div>
                    </div>

                    <div className='card__side card__side--back '>
                        <h4 className='card__heading'>To-Do App</h4>
                        <div className='card__details'>
                            <ul>
                                Technologies used__
                                <li> React language/library</li>
                                <li>SASS </li>
                            </ul>
                        </div>
                        <div className='card__cta'>
                            <a
                                href='https://todo-bot-app.herokuapp.com/'
                                target='_blank'
                                className='btn btn--white'
                                rel='noreferrer'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card__side card__side--front'>
                        <div className='card__picture card__picture--5'>
                            &nbsp;
                        </div>
                    </div>

                    <div className='card__side card__side--back '>
                        <h4 className='card__heading'>Tour App</h4>
                        <div className='card__details'>
                            <ul>
                                Technologies used__
                                <li>CSS keyframes animaton</li>
                                <li>CSS clip-path</li>
                                <li>CSS transform property</li>
                                <li>CSS cubic bezier</li>
                            </ul>
                        </div>
                        <div className='card__cta'>
                            <a
                                href='https://naturesweb.netlify.app/'
                                target='_blank'
                                className='btn btn--white'
                                rel='noreferrer'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card__side card__side--front'>
                        <div className='card__picture card__picture--6'>
                            &nbsp;
                        </div>
                    </div>

                    <div className='card__side card__side--back '>
                        <h4 className='card__heading'>
                            StackNetwork <br /> A social network for developers
                        </h4>

                        <div className='card__details'>
                            <ul>
                                Technologies used__
                                <li>ReactJS</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>MongoDB</li>
                                <li>Heroku</li>
                            </ul>
                        </div>
                        <div className='card__cta'>
                            <a
                                href='https://stack-net.herokuapp.com/'
                                target='_blank'
                                className='btn btn--white'
                                rel='noreferrer'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
