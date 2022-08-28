import { React } from 'react';
import AdBanner from './components/AdBanner';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import StyledButton from './components/StyledButton';

import './ContactUs.css';

export default function ContactUs() {
    return (
        <div>
            <section>
                <NavBar></NavBar>
            </section>

            <section id='contact-header'>
                <div class='container'>
                    <h1>Contact us</h1>
                    <p>Use one of the following methods to reach us whenever you need.</p>

                    <div className='row' id='contact-cards'>
                        <div class="col-lg-5 custom-card" id="contact-card-1">
                            <div class="custom-title">Phone</div>
                            <div class="custom-sub-title">US, CA 1-833-382-1675</div>
                            <div className='custom-card-body'>Toll-free for US & Canada (1-855…) only. International callers are charged for incoming calls.</div>
                            <div className='custom-card-body'>Working hours: Monday 00:00 AM - Saturday 08:00 PM (UTC).</div>
                        </div>

                        <div class="col-lg-5 custom-card" id="contact-card-2">
                            <div class="custom-title">Location</div>
                            <div class="custom-sub-title">______</div>
                            <div className='custom-card-body'>Toll-free for US & Canada (1-855…) only. International callers are charged for incoming calls.</div>
                        </div>

                        <div class="col-lg-5 custom-card" id="contact-card-3">
                            <div class="custom-title">Chat</div>
                            <div class="custom-sub-title">______</div>
                            <div className='custom-card-body'>We’re glad to answer your questions:</div>
                            <div className='custom-card-body'> Monday 00:00 AM - Saturday 08:00 PM (UTC).</div>
                            <button>Live chat</button>
                        </div>

                        <div class="col-lg-5 custom-card" id="contact-card-4">
                            <div class="custom-title">Email</div>
                            <div class="custom-sub-title">______</div>
                            <div className='custom-card-body'>Toll-free for US & Canada (1-855…) only. International callers are charged for incoming calls.</div>
                            <div className='custom-card-body'>Working hours: Monday 00:00 AM - Saturday 08:00 PM (UTC).</div>
                        </div>
                    </div>

                </div>

            </section>

            <section id='contact-ad-1'>
                <AdBanner text="Ask an expert to do your coding task"></AdBanner>
            </section>

            <section>
                <Footer></Footer>
            </section>
        </div>
    );
}