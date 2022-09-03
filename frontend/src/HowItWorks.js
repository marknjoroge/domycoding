import { React } from "react";
import AdBanner from "./components/AdBanner";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import './HowItWorks.css';

export default function HowItWorks(params) {
    return (
        <>
            <section>
                <NavBar></NavBar>
            </section>

            <section id='contact-header'>
                <div class='container'>
                    <h1>How it works</h1>
                    <p>Purchasing programming help has never been easier. Follow these steps, and you’ll get an assignment that meets all your demands.</p>
                </div>
            </section>

            <section className="how-step">

                <div class="a-container how-steps" id="steps">
                    <div class="row">
                        <div class="col-xs-1">
                            <div class="node green"></div>
                            <div class="divider green"></div>
                            <div class="node green"></div>
                            <div class="divider green"></div>
                            <div class="node green"></div>
                            <div class="divider green"></div>
                            <div class="node green"></div>
                        </div>
                        <div class="col-xs-7">
                            <ul id="progress">
                                <li>
                                    <div class="details">
                                        <div class="det-title">
                                            Step 1
                                        </div>
                                        <div class="det-body">
                                            Open the order form and fill it out with your details.
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="details">
                                        <div class="det-title">
                                            Step 2
                                        </div>
                                        <div class="det-body">
                                            Proceed to payment and purchase your assignment.
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="details">
                                        <div class="det-title">
                                            Step 3
                                        </div>
                                        <div class="det-body">
                                            We start working over your task, you can check on our progress anytime.
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="details">
                                        <div class="det-title">
                                            Step 4
                                        </div>
                                        <div class="det-body">
                                            You get the final copy of your custom-made assignment.
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="calc-sec">
                <Calculator></Calculator>
            </section>

            <section class="banner1">
                <AdBanner text="Improve your programming assignment with the help of our tech experts"></AdBanner>
            </section>

            <section>
                <Footer></Footer>
            </section>
        </>
    );
}