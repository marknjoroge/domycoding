import { React } from "react";
import CustomRadio from "./CustomRadio";
import ListItemWithIcon from "./ListItemWithIcon";
import StyledButton from "./StyledButton";

import './Calculator.css';

export default function Calculator() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="my-calc" id="my-custom-tab">
                            <div className="row my-custom-tab-header">
                                <div className="col tab-btn active-btn">programming</div>
                                <div className="col tab-btn">Calculations</div>
                            </div>
                            <div className="my-custom-tab-body">
                                <div className="row">
                                    <div className="col-md">
                                        <label for="discipline" style={{ fontSize: '13px' }}>Discipline</label>
                                        <br />
                                        <input name="discpline" id="discpline" />
                                    </div>
                                    <div className="col-md">
                                        <div className="row my-custom-tab-header" id="task-size">
                                            <div className="col tab-btn active-btn">Extra small</div>
                                            <div className="col tab-btn">Small</div>
                                            <div className="col tab-btn active-btn">Medium</div>
                                            <div className="col tab-btn">Large</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-5 ">
                                        <div className="row">
                                            <div className="col"><CustomRadio></CustomRadio></div>
                                            <div className="col"><CustomRadio></CustomRadio></div>
                                            <div className="col"><CustomRadio></CustomRadio></div>
                                            <div className="col"><CustomRadio></CustomRadio></div>
                                        </div>
                                    </div>
                                    <div className="col-xs-5">
                                        <div className="row">
                                            <div className="col"><CustomRadio></CustomRadio></div>
                                            <div className="col"><CustomRadio></CustomRadio></div>
                                            <div className="col"><CustomRadio></CustomRadio></div>
                                            <div className="col"><CustomRadio></CustomRadio></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div>We'll send you the order for review by</div>
                                        <div id="delivery-time">Aug 26, 2022 at 7:02 PM.</div>
                                    </div>
                                    <div className="col">
                                        <div>Approximate price:</div>
                                        <div>$420</div>
                                    </div>
                                    <div className="col">
                                        <StyledButton></StyledButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="my-calc-side">
                            <div className='title'>Small</div>
                            <div className="row">
                                <div className="col">
                                    <div className="container">
                                        <div className='title2'>Example</div>
                                        <div>
                                            up to 3 short practice problems or theoretical questions
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='title2'>Possible deliverables</div>
                                    <div>
                                        <ListItemWithIcon></ListItemWithIcon>
                                        <ListItemWithIcon></ListItemWithIcon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}