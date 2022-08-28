import { React } from "react";
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import './Guarantees.css';

export default function Guarantees(params) {
    return (
        <div>
            <section>
                <NavBar></NavBar>
            </section>


            <section id='contact-header'>
                <div id="guarantees-header" class='container'>
                    <h1>Our guarantees</h1>
                    <p>All of our customers are entitled to high-quality service, and here are the policies that ensure it.</p>

                    <div id="guarantee-card-1" class="custom-card">
                        <div class="custom-title">Free revisions</div>
                        <div className='custom-card-body'>If you find an error in your assignment or notice that your expert has failed to follow your requirements, you can ask us to edit your project for free. This service is available before you approve your order and within 7 days after the approval.</div>
                        <div><a href="#">Find out more</a><span></span></div>
                    </div>
                    
                    <div id="guarantee-card-2" class="custom-card">
                        <div class="custom-title">Money-back guarantee</div>
                        <div className='custom-card-body'>Do you need to cancel your order? Are you unhappy with how we’ve completed your assignment? Don’t worry, you can get a refund if something goes wrong. Submit your claim, explaining what the problem is, and we’ll determine the appropriate amount of compensation in your situation.</div>
                        <div><a href="#">Find out more</a><span></span></div>
                    </div>
                    
                    <div id="guarantee-card-3" class="custom-card">
                        <div class="custom-title">Confidentiality guarantee</div>
                        <div className='custom-card-body'>Our company cares about your privacy, which is why we’ve implemented a data encryption system on our website. It ensures a secure connection and prevents unauthorized parties from accessing the data. We also don’t disclose your personal information publicly.</div>
                        <div><a href="#">Find out more</a><span></span></div>
                    </div>
                </div>
                
            </section>

            <section class='contact-ad-1'>
                <AdBanner text="Ask an expert to do your coding task"></AdBanner>
            </section>

            <section>
                <Footer></Footer>
            </section>
        </div>
    );
}
