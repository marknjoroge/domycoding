import { React } from 'react';
import StyledButton from './StyledButton';
import './AdBanner.css';

export default function AdBanner(params) {
    return (
        <div className='cust-ad-banner'>
            <div>
                <div>
                    <h4>{params.text}</h4>
                </div>
            </div>
            <div className='the-but'>
                <StyledButton></StyledButton>
            </div>
        </div>
    );
}