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


export default function Marks2() {
    const defaultState = {
        worksCompleted: 63
    }

    const [worksCompleted, setWorksCompleted] = useState(Number.parseFloat(defaultState.worksCompleted).toFixed(0));



    const [color, setColor] = useState(getColor(defaultState.worksCompleted, 50, 70));


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student_info)
    };

    useEffect(() => {
        fetch('http://localhost:3333/marks2', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setWorksCompleted(Number.parseFloat(data.worksCompleted).toFixed(0));

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        setColor(getColor(worksCompleted, 50, 70));
    }, [worksCompleted]);


    return (
        <div className='chart marks1 one_number' style={{ background: color }}>
            <div className='chart-title-small'>
                Работ выполнено
            </div>
            <div className='chart-content one_number_content'>
                <span>{worksCompleted}<span className='one_number_content_small'>%</span></span>
            </div>
        </div>
    );
}