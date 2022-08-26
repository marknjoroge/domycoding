import React from 'react';
import './NavBar.css';
import StyledButton from './StyledButton';

export default function NavBar() {
    window.onscroll = function () {
        if (window.pageYOffset == 0) {
            document.getElementById("navbar").style.top = "60px";
            // document.getElementById("top-nav-part").style.top = "0px";
            document.getElementById("navbar").style.backgroundColor = "#C6CEBF";
        } else {
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("navbar").style.width = "100%";
            document.getElementById("navbar").style.borderRadius = "0";
            // document.getElementById("top-nav-part").style.top = "-90px";
            document.getElementById("navbar").style.backgroundColor = "white";
        }
    }

    return (
        <div>
            <div class="top-nav-part">
                {/* <div class="container">
                    <div>
                        <a id="home-link" href="#home">DoMyCoding.</a>
                    </div>
                    <div class="innernav">
                        <a class="nav-link" href="#about">How it works</a>
                        <a class="nav-link" href="#academics">Contact us</a>
                        <a class="nav-link" href="#portfolio">Pricing</a>
                        <a class="nav-link" href="#contact">FAQ</a>
                        <a class="nav-link" href="#contact">Guarantees</a>
                    </div>
                </div> */}
            </div>
            <div id="navbar">
                <div class="container">
                    <div>
                        <a id="home-link" href="#home">DoMyCoding.</a>
                    </div>
                    <div class="innernav">
                        <a class="nav-link" href="#about">How it works</a>
                        <a class="nav-link" href="#academics">Contact us</a>
                        <a class="nav-link" href="#portfolio">Pricing</a>
                        <a class="nav-link" href="#contact">FAQ</a>
                        <a class="nav-link" href="#contact">Guarantees</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
