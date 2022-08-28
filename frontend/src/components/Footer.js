import { React } from 'react';

import './Footer.css';

export default function Footer(params) {
    return (
        <>
            <footer>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='the-stuff'>
                            <div><h5>Company</h5></div>
                            <div><a href='#'>How it works</a></div>
                            <div><a href='#'>Contact us</a></div>
                            <div><a href='#'>Pricing</a></div>
                            <div><a href='#'>Guarantees</a></div>
                            <div><a href='#'>FAQ</a></div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='the-stuff'>
                            <div><h5>Terms</h5></div>
                            <div><a href='#'>Privacy policy</a></div>
                            <div><a href='#'>Revision policy</a></div>
                            <div><a href='#'>Terms and conditions</a></div>
                            <div><a href='#'>Money back guarantee</a></div>
                            <div><a href='#'>Notice on social responsibility</a></div>
                            <div><a href='#'>Cookie policy</a></div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='the-stuff'>
                            <div><h5>Services</h5></div>
                            <div><a href='#'>Python homework help</a></div>
                            <div><a href='#'>Java homework help</a></div>
                            <div><a href='#'>C++ homework help</a></div>
                            <div><a href='#'>Javascript homework help</a></div>
                            <div><a href='#'>HTML homework help</a></div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='the-stuff'>
                            <div><h5>We accept</h5></div>
                            <div><a href='#'>Python homework help</a></div>
                            <div><a href='#'>Java homework help</a></div>
                            <div><a href='#'>C++ homework help</a></div>
                            <div><a href='#'>Javascript homework help</a></div>
                            <div><a href='#'>HTML homework help</a></div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-lg-9'>
                        <div className='the-stuff'>
                            <h5>We accept</h5>
                            <div>
                                If you doubt that the statement that says: “I don’t do my programming homework and still feel happy” is far from the reality where actual students live in, you are wrong. You won’t have to feel de
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='the-stuff'>
                            <h5>Writera Limited</h5>
                            <div>
                                depressed or feel guilty about not checking ou
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='the-footing'>
                        Copyright © 2008 - 2022 Writera Limited. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}