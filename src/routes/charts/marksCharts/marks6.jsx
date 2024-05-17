import '../../../App.css';
import { useState, useEffect } from 'react';
import { student_info } from '../../../student_config';

function Exam(props) {

    let markColor = '#B76868';

    if (props.exam.mark == 'зачтено' || props.exam.mark == 'отлично') {
        markColor = '#4D9559'
    }

    if (props.exam.mark == 'хорошо') {
        markColor = '#B29D51'
    }

    if (props.semestr == props.exam.semestr) {
        return (
            <div className='mark-line'>
                <div className='mark-line main3_col main3_col1 marks6_plug' style={{ backgroundColor: markColor }}>
                    {props.exam.mark}
                </div>
                <div className='mark-line-name'>
                    {props.exam.course}
                </div>
            </div>
        );
    }
}


export default function Marks6() {
    const defaultState = {
        marks: [
            {
                course: 'Математика',
                mark: 'отлично',
                semestr: 1
            },
            {
                course: 'Математика',
                mark: 'хорошо',
                semestr: 2
            },
            {
                course: 'Математика',
                mark: 'удовл.',
                semestr: 3
            },
            {
                course: 'Физика',
                mark: 'отлично',
                semestr: 1
            },
            {
                course: 'История',
                mark: 'зачтено',
                semestr: 2
            },
            {
                course: 'Иностранный язык',
                mark: 'отлично',
                semestr: 2
            },
            {
                course: 'Инженерная графика',
                mark: 'отлично',
                semestr: 3
            },
            {
                course: 'Инженерная графика',
                mark: 'удовл.',
                semestr: 1
            },
            {
                course: 'Иностранный графика',
                mark: 'хорошо',
                semestr: 1
            }
        ]
    }

    const [exams, setExams] = useState(defaultState.marks);
    const [semestValue, setSemestValue] = useState(1);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student_info)
    };

    useEffect(() => {
        fetch('http://localhost:3333/marks6', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setExams(data.marks);
                console.log(data.marks)

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        if (semestValue <= 0) {
            setSemestValue(8);
        }
        if (semestValue > 8) {
            setSemestValue(1);
        }
    }, [semestValue]);

    return (
        <div className='chart marks6'>
            <div className='chart-title marks6_filter_container'>
                Зачетная книжка
                <div className='marks6_filter'>
                    <div className='marks6_filter_title'>
                        Семестр:
                    </div>
                    <div className='marks6_filter_selector'>
                        <div className='marks6_filter_controls' onClick={() => { setSemestValue(semestValue - 1) }}>
                            -
                        </div>
                        <div className='marks6_filter_value'>
                            {semestValue}
                        </div>
                        <div className='marks6_filter_controls' onClick={() => { setSemestValue(semestValue + 1) }}>
                            +
                        </div>
                    </div>
                </div>
            </div>
            <div className='chart-content marks6_plug_line'>
                { exams.map((exam) => <Exam exam={exam} semestr={semestValue}/>) }
            </div>
        </div>
    );
}