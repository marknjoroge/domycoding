import { useState } from "react";
import CustomRadio from "./CustomRadio";
import ListItemWithIcon from "./ListItemWithIcon";
import StyledButton from "./StyledButton";

import './Calculator.css';

export default function Calculator() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="my-calc" id="my-custom-tab">
                            <div className="row my-custom-tab-header">
                                <button
                                    className={toggleState === 1 ? "col tab-btn active-btn" : "col tab-btn"}
                                    onClick={() => toggleTab(1)}
                                >
                                    programming
                                </button>
                                <button
                                    className={toggleState === 2 ? "col tab-btn active-btn" : "col tab-btn"}
                                    onClick={() => toggleTab(2)}
                                >
                                    Calculations
                                </button>
                            </div>
                            <div className={toggleState === 1 ? "my-custom-tab-body" : "hidden-body"}>
                                <div className="row">
                                    <div className="col-md">
                                        <label for="discipline" style={{ fontSize: '13px' }}>Discipline</label>
                                        <br />
                                        <input name="discpline" id="discpline" />
                                    </div>
                                    <div className="col-md">
                                        <div className="row my-custom-tab-header" id="task-size">
                                            <button className="col tab-btn active-btn">Extra small</button>
                                            <button className="col tab-btn">Small</button>
                                            <button className="col tab-btn">Medium</button>
                                            <button className="col tab-btn">Large</button>
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