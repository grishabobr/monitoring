import '../../../App.css';
import { useState, useEffect } from 'react';


function Day(props) {
    let color = '#F1F7F6'
    let outlineColor = '0 px'
    if (props.day.deadline){
        if (props.day.passed) {
            color = '#709977'
        }
        if (props.day.failed) {
            color = '#A98484'
        }
        if (props.day.future) {
            color = '#626262'
        }
    }

    if (props.day.today) {
        outlineColor = '5px solid #B10E0E'
    }

    return (
        <div className='calendar-class day' style={{backgroundColor: color, outline: outlineColor}}></div>
    );
}

function Deadline(props) {
    if (props.deadline.deadline && props.deadline.future)
    {
        return (
            <tr className='main3_line'>
                <td className='main3_col marks4_col1'>{props.deadline.date}</td>
                <td className='main3_col marks4_col2'>{props.deadline.course}</td>
                <td className='main3_col marks4_col3'>{props.deadline.work}</td>
            </tr>
        );
    }
}


export default function Marks4() {
    const defaultState = {
        days: [
            {
                date: '01.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '02.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '03.02.2024',
                course: 'Базы данных',
                work: 'Лабораторная работа 4',
                today: false,
                deadline: true,
                passed: true,
                failed: false,
                future: false
            },
            {
                date: '04.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '05.02.2024',
                course: 'Математика',
                work: 'Тест 3',
                today: false,
                deadline: true,
                passed: false,
                failed: true,
                future: false
            },
            {
                date: '06.02.2024',
                course: 'Физика',
                work: 'Контрольная работа 2',
                today: false,
                deadline: true,
                passed: true,
                failed: false,
                future: false
            },
            {
                date: '07.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '08.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '09.02.2024',
                course: 'Физика',
                work: 'Лабораторная работа 2',
                today: true,
                deadline: true,
                passed: true,
                failed: false,
                future: false
            },
            {
                date: '10.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '11.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '12.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '13.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '14.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '15.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '16.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '17.02.2024',
                course: 'Иностранный язык',
                work: 'Тест 1',
                today: false,
                deadline: true,
                passed: false,
                failed: false,
                future: true
            },
            {
                date: '18.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '19.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '20.02.2024',
                course: 'Математика',
                work: 'Контрольная работа 1',
                today: false,
                deadline: true,
                passed: false,
                failed: false,
                future: true
            },
            {
                date: '21.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '22.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '23.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },           
            {
                date: '24.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '25.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '26.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '27.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '28.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '29.02.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '01.03.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '02.03.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '03.03.2024',
                course: 'Управление проектами',
                work: 'Лабораторная работа 3',
                today: false,
                deadline: true,
                passed: false,
                failed: false,
                future: true
            },
            {
                date: '04.03.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '05.03.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },
            {
                date: '06.03.2024',
                course: '',
                work: '',
                today: false,
                deadline: false,
                passed: false,
                failed: false,
                future: false
            },

        ]
    }

    const [days, setDays] = useState(defaultState.days);

    return (
        <div className='chart marks4'>
            <div className='marks4_1'>
                <div className='chart-title'>
                    Ближайшие дедлайны
                </div>
                <div className='chart-content'>
                    <div className='calendar-deadlines'>
                        <div className='day-names'>
                            <div className='day-name'>
                                Пн
                            </div>
                            <div className='day-name'>
                                Вт
                            </div>
                            <div className='day-name'>
                                Ср
                            </div>
                            <div className='day-name'>
                                Чт
                            </div>
                            <div className='day-name'>
                                Пт
                            </div>
                            <div className='day-name'>
                                Сб
                            </div>
                            <div className='day-name'>
                                Вс
                            </div>
                        </div>
                        <div className='days'>
                            {days.map((day) => <Day day={day} />)}                           
                        </div>
                    </div>
                </div>
            </div>
            <div className='marks4_2'>
                <div className='chart-content'>
                    <table>
                        <thead>
                            <tr className='main3_line'>
                                <th scope="col" className='head marks4_col1'>Дэдлайн</th>
                                <th scope="col" className='head marks4_col2'>Курс</th>
                                <th scope="col" className='head marks4_col3'>Работа</th>
                            </tr>
                        </thead>
                        <div className='scroll_table_marks4'>
                            <tbody>
                                {days.map((deadline) => <Deadline deadline={deadline} />)}
                            </tbody>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    );
}