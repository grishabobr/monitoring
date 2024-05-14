import '../../../App.css';
import { useState, useEffect } from 'react';

function getColor(value, p1, p2) {
    if (value < p1) {
        return 'linear-gradient(180deg, rgba(189,57,57,1) 22%, rgba(87,26,48,1) 100%)';
    }
    if (value < p2) {
        return 'linear-gradient(180deg, rgba(187,189,57,1) 22%, rgba(70,97,28,1) 100%)';
    }
    return 'linear-gradient(180deg, rgba(33,111,50,1) 22%, rgba(17,55,60,1) 100%)';
}


export default function Attendance1() {
    const defaultState = {
        yearAttendance: 80
    }

    const [yearAttendance, setYearAttendance] = useState(Number.parseFloat(defaultState.yearAttendance).toFixed(0));

    const [color, setColor] = useState(getColor(defaultState.yearAttendance, 50, 70));



    return (
        <div className='chart attendance1 one_number' style={{ background: color }}>
            <div className='chart-title-small'>
                За год
            </div>
                <div className='chart-content one_number_content'>
                <span>{yearAttendance}<span className='one_number_content_small'>%</span></span>
            </div>
        </div>
        
    );
}