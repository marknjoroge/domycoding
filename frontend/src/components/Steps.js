import { React } from 'react';

export default function Steps() {
    return (
        <section class="a-container" id="steps">
            <div class="header-card">
            </div>

            <div className='row'>

                <div className='col-md-7' style={{overflow: 'hidden'}}>
                    <img src="/assets/images/art2.svg" alt="corporate code art. header image" />
                </div>
                <div className='col-md-5'>
                    <div class="row">
                        <div class="col-sm-1">
                            <div class="node green"></div>
                            <div class="divider green"></div>
                            <div class="node green"></div>
                            <div class="divider green"></div>
                            <div class="node green"></div>
                            <div class="divider green"></div>
                            <div class="node green"></div>
                        </div>
                        <div class="col-sm-8">
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
            </div>
        </section>
    );
}
