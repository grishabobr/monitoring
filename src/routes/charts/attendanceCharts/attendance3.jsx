import '../../../App.css';
import { useState, useEffect } from 'react';
import { student_info } from '../../../student_config';

function getColor(value, p1, p2) {
    if (value < p1) {
        return 'linear-gradient(180deg, rgba(189,57,57,1) 22%, rgba(87,26,48,1) 100%)';
    }
    if (value < p2) {
        return 'linear-gradient(180deg, rgba(187,189,57,1) 22%, rgba(70,97,28,1) 100%)';
    }
    return 'linear-gradient(180deg, rgba(33,111,50,1) 22%, rgba(17,55,60,1) 100%)';
}


export default function Attendance3() {
    const defaultState = {
        weekAttendance: 64
    }

    const [weekAttendance, setWeekAttendance] = useState(Number.parseFloat(defaultState.weekAttendance).toFixed(0));

    const [color, setColor] = useState(getColor(defaultState.weekAttendance, 50, 70));

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student_info)
    };

    useEffect(() => {
        fetch('http://localhost:3333/attendance3', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setWeekAttendance(Number.parseFloat(data.weekAttendance).toFixed(0));

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        setColor(getColor(weekAttendance, 50, 70));
    }, [weekAttendance]);

    return (
        <div className='chart attendance3 one_number' style={{ background: color }}>
            <div className='chart-title-small'>
                За неделю
            </div>
                <div className='chart-content one_number_content'>
                <span>{weekAttendance}<span className='one_number_content_small'>%</span></span>
            </div>
        </div>
        
    );
}