import { React } from "react";
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import './FAQ.css';

export default function FAQ(params) {
    return (
        <div>
            <section>
                <NavBar></NavBar>
            </section>

            <section>

                <section id='contact-header'>
                    <div id="faq-header" class='container'>
                        <h1>Frequently asked questions</h1>
                        <p>Get answers to the most common inquiries from our customers</p>

                        <div className="a-container">
                            <div className="faq-nav">
                                <div className="row">
                                    <div className="col-sm-11">How do I place an order</div>
                                    <div className="col-sm-1 plus"> + </div>
                                </div>
                            </div>
                            <div className="faq-nav">
                                <hr />
                                <div className="row">
                                    <div className="col-sm-11">How do I place an order</div>
                                    <div className="col-sm-1 plus"> + </div>
                                </div>
                            </div>
                            <div className="faq-nav">
                                <hr />
                                <div className="row">
                                    <div className="col-sm-11">How do I place an order</div>
                                    <div className="col-sm-1 plus"> + </div>
                                </div>
                            </div>
                            <div className="faq-nav">
                                <hr />
                                <div className="row">
                                    <div className="col-sm-11">How do I place an order</div>
                                    <div className="col-sm-1 plus"> + </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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