import React from 'react';
import './NavBar.css';
import StyledButton from './StyledButton';

export default function NavBar() {
    window.onscroll = function () {
        if (window.pageYOffset == 0) {
            // document.getElementById("navbar").style.position = "fixed";
            // document.getElementById("bottom-nav-part").style.top = "0px";
            //         // document.getElementById("top-nav-part").style.top = "0px";
            //         document.getElementById("bottom-nav-part").style.width = "90%";
            //         document.getElementById("bottom-nav-part").style.backgroundColor = "#C6CEBF";
            //     } else {
            //         document.getElementById("bottom-nav-part").style.top = "0px";
            //         document.getElementById("bottom-nav-part").style.width = "100%";
            //         document.getElementById("bottom-nav-part").style.borderRadius = "0";
            //         // document.getElementById("top-nav-part").style.top = "-90px";
            //         document.getElementById("bottom-nav-part").style.backgroundColor = "white";
        }
    }

    return (
        <div id='navbar'>
            <div class="container">
                <div id="top-nav-part">
                    <div>
                        <a id="home-link" href="/">DoMyCoding.</a>
                    </div>
                </div>
                <hr />
                <div id="bottom-nav-part">

                    <div class="innernav">
                        <a class="nav-link" href="/howitworks">How it works</a>
                        <a class="nav-link" href="/contact">Contact us</a>
                        <a class="nav-link" href="/pricing">Pricing</a>
                        <a class="nav-link" href="/faq">FAQ</a>
                        <a class="nav-link" href="/guarantees">Guarantees</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
