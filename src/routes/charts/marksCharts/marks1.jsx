import '../../../App.css';
import { useState, useEffect } from 'react';
import { student_info } from '../../../student_config';

function getColor(value, p1, p2) {
    if (value < p1){
        return 'linear-gradient(180deg, rgba(189,57,57,1) 22%, rgba(87,26,48,1) 100%)';
    }
    if (value < p2){
        return 'linear-gradient(180deg, rgba(187,189,57,1) 22%, rgba(70,97,28,1) 100%)';
    }
    return 'linear-gradient(180deg, rgba(33,111,50,1) 22%, rgba(17,55,60,1) 100%)';
}


export default function Marks1() {
    const defaultState = {
        avgMark: 4.21
    }

    const [avgMark, setavgMark] = useState(Number.parseFloat(defaultState.avgMark).toFixed(2));

    

    const [color, setColor] = useState(getColor(defaultState.avgMark, 3.3, 4));

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student_info)
    };

    useEffect(() => {
        fetch('http://localhost:3333/marks1', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setavgMark(Number.parseFloat(data.avgMark).toFixed(2));

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
    useEffect(() => {
        setColor(getColor(avgMark, 3.3, 4));
    }, [avgMark]);

    return (
        <div className='chart marks1 one_number' style={{background: color}}>
            <div className='chart-title-small'>
                Средний балл
            </div>
            <div className='chart-content one_number_content'>
                <span>{avgMark.toString().substring(0, 1)}<span className='one_number_content_small'>{avgMark.toString().substring(1, 4)}</span></span>
            </div>
        </div>
    );
}