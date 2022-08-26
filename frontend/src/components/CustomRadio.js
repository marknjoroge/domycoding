import { React } from 'react';
import './CustomRadio.css';

export default function CustomRadio() {
    return (
        // <div className='wrapper'>
        //     <label for="option-1" class="option option-1">
        //         <div class="dot"></div>
        //         <span>Student</span>
        //     </label>
        //     <br/>
        //     <input type="radio" name="select" id="option-1" checked />
        // </div>
        <div className='radio-div'>
            <div className='radio-title'>4h</div>
            <div className='hide-till'>deadline</div>
            <div><input type="radio" name="deadline" id="as" checked/></div>
            <div>today at <span>3 PM</span></div>
        </div>
    );
}