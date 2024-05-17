import '../../../App.css';
import { useState, useEffect } from 'react';
import { student_info } from '../../../student_config';

function getColor(value, p1, p2) {
    if (value < p1) {
        return 'linear-gradient(180deg, rgba(33,111,50,1) 22%, rgba(17,55,60,1) 100%)';
    }
    if (value < p2) {
        return 'linear-gradient(180deg, rgba(187,189,57,1) 22%, rgba(70,97,28,1) 100%)';
    }
    return 'linear-gradient(180deg, rgba(189,57,57,1) 22%, rgba(87,26,48,1) 100%)';
}


export default function Attendance4() {
    const defaultState = {
        penalties: 0
    }

    const [penalties, setPenalties] = useState(Number.parseFloat(defaultState.penalties).toFixed(0));

    const [color, setColor] = useState(getColor(defaultState.penalties, 1, 2));

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student_info)
    };

    useEffect(() => {
        fetch('http://localhost:3333/attendance4', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setPenalties(Number.parseFloat(data.penalties).toFixed(0));

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        setColor(getColor(penalties, 1, 2));
    }, [penalties]);

    return (
        <div className='chart attendance4 one_number' style={{ background: color }}>
            <div className='chart-title-small'>
                Выговоры
            </div>
            <div className='chart-content one_number_content'>
                <span>{penalties}</span>
            </div>
        </div>
    );
}