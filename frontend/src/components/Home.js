import { React } from 'react';
import AdBanner from './AdBanner';
import Calculator from './Calculator';
import Footer from './Footer';
import NavBar from './NavBar';
import Stats from './Stats';

import './Home.css';
import Steps from './Steps';

export default function HomePage() {
    return (
        <div>
            <NavBar></NavBar>
            <section id="header">
                <div class="container">
                    <div className='row'>
                        <div className='col-md-6'>
                            <div class="custom-title">Coding homework help from STEM experts</div>
                            <div class="header-details">Take a chance to benefit from our service and improve your coding skills.
                            </div>
                            <div class="styled-button">
                                <a href="/">Place an order</a>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src="/assets/images/header.svg" alt="corporate code art. header image" />
                        </div>
                    </div>
                </div>
            </section>

            <Stats></Stats>

            <Steps></Steps>

            <Calculator></Calculator>

            <section className='banner1'>
                <AdBanner text="Do not hesitate to ask for programming help, no matter what task you have"></AdBanner>
            </section>

            <section className='banner2'>
                <AdBanner text="Ask an epert to do your coding task"></AdBanner>
            </section>

            <section>
                <Footer></Footer>
            </section>
        </div>
    );
}
