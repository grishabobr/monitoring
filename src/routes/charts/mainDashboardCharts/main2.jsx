import '../../../App.css';
import { useState, useEffect } from 'react';
import { student_info } from '../../../student_config';

function DayColumn(props) {
    let dayStatuses = [0, 0, 0, 0, 0]
    props.day.classes.map((_class) => {
        dayStatuses[_class.num-1] = _class.attendance;
    });
    let colors = dayStatuses.map((dayStatus) => {
        switch(dayStatus) {
            case true:
                return '#709977'
                break;
            case false:
                return '#A98484'
                break;
            case 0:
                return '#F1F7F6'
                break;
        }
    });

    return (
        <div className='calendar-col'>
            {props.day.name}
            <div className='calendar-day'>
                <div className='calendar-class' style={{ backgroundColor: colors[0] }}></div>
                <div className='calendar-class' style={{ backgroundColor: colors[1] }}></div>
                <div className='calendar-class' style={{ backgroundColor: colors[2] }}></div>
                <div className='calendar-class' style={{ backgroundColor: colors[3] }}></div>
                <div className='calendar-class' style={{ backgroundColor: colors[4] }}></div>
            </div>
        </div >
    );
}



export default function Main2() {
    const defaultState = {
        percent: 78,
        days: [
            {
                name: "Пн",
                classes: [
                    {
                        num: 1,
                        course: "Физика",
                        type: "Лекция",
                        attendance: true
                    },
                    {
                        num: 2,
                        course: "Математика",
                        type: "Практика",
                        attendance: false
                    }
                ]
            },
            {
                name: "Вт",
                classes: [
                    {
                        num: 2,
                        course: "Физика",
                        type: "Лабораторная",
                        attendance: true
                    },
                    {
                        num: 3,
                        course: "Инженерная графика",
                        type: "Лабораторная",
                        attendance: false
                    }
                ]
            },
            {
                name: "Ср",
                classes: [
                    {
                        num: 2,
                        course: "Физика",
                        type: "Лабораторная",
                        attendance: true
                    },
                    {
                        num: 3,
                        course: "Инженерная графика",
                        type: "Лабораторная",
                        attendance: true
                    }
                ]
            },
            {
                name: "Чт",
                classes: [
                    {
                        num: 2,
                        course: "Физика",
                        type: "Лабораторная",
                        attendance: true
                    },
                    {
                        num: 5,
                        course: "Инженерная графика",
                        type: "Лабораторная",
                        attendance: false
                    }
                ]
            },
            {
                name: "Пт",
                classes: [
                    {
                        num: 1,
                        course: "Физика",
                        type: "Лабораторная",
                        attendance: true
                    },
                    {
                        num: 3,
                        course: "Инженерная графика",
                        type: "Лабораторная",
                        attendance: false
                    }
                ]
            },
            {
                name: "Сб",
                classes: [
                    {
                        num: 2,
                        course: "Физика",
                        type: "Лабораторная",
                        attendance: true
                    },
                    {
                        num: 3,
                        course: "Инженерная графика",
                        type: "Лабораторная",
                        attendance: false
                    },
                    {
                        num: 4,
                        course: "Инженерная графика",
                        type: "Лабораторная",
                        attendance: true
                    }
                ]
            }
            
        ]
    }

    const [days, setDays] = useState(defaultState.days);

    const [progressStyle, setProgressStyle] = useState({ background: 'conic-gradient(#00000000 0% ' + defaultState.percent +'%, #F1F7F6 ' + defaultState.percent +'% 100%)' });
    const [progress, setProgress] = useState(defaultState.percent);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student_info)
    };

    useEffect(() => {
        fetch('http://localhost:3333/main2', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setDays(data.days);
                setProgressStyle({ background: 'conic-gradient(#00000000 0% ' + data.percent + '%, #F1F7F6 ' + data.percent + '% 100%)' });
                setProgress(data.percent);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className='chart main2'>
            <div className='chart-title'>
                Посещаемость за неделю
            </div>
            <div className='chart-content main2-content'>
                <div className='calendar'>
                    {days.map((day) => <DayColumn day = {day}/>)}
                </div>
                <div className='pie-percent'>
                    <div className='pie-progress' style={progressStyle}>
                        <div className='pie-number'>
                            {progress+'%'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}