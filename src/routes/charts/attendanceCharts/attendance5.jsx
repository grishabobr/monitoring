import '../../../App.css';
import { useState, useEffect } from 'react';
import { student_info } from '../../../student_config';

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex([r, g, b]) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

function pickHex(col1, col2, col3, weight) {
    let color1 = col1;
    let color2 = col2;
    if (weight > 0.5) {
        color1 = col2;
        color2 = col3;
        weight -= 0.5;
    }
    let w1 = weight * 2;
    let w2 = 1 - w1;
    var rgb = [Math.round(color2[0] * w1 + color1[0] * w2),
    Math.round(color2[1] * w1 + color1[1] * w2),
    Math.round(color2[2] * w1 + color1[2] * w2)];
    return rgbToHex(rgb);
}


function MarkLine(props) {

    let markColor = pickHex(hexToRgb('#B76868'), hexToRgb('#B29D51'), hexToRgb('#4D9559'), props.attendance.total / 100)

    return (
        <tr className='main3_line'>
            <td className='main3_col2 main3_col attendance5_col1'>{props.attendance.course}</td>
            <td className='main3_col3 main3_col attendance5_col2'>{props.attendance.lectures == -1 ? '-' : props.attendance.lectures + '%'}</td>
            <td className='main3_col4 main3_col attendance5_col3'>{props.attendance.practical == -1 ? '-' : props.attendance.practical + '%'}</td>
            <td className='main3_col4 main3_col attendance5_col4'>{props.attendance.labs == -1 ? '-' : props.attendance.labs + '%'}</td>
            <td className='main3_col1 main3_col attendance5_col5' style={{ backgroundColor: markColor }}>{props.attendance.total}%</td>
        </tr>
    );
}


export default function Attendance5() {
    const defaultState = {
        attendance: [
            {
                course: "Математика",
                lectures: 90,
                practical: 80,
                labs: -1,
                total: 85
            },
            {
                course: "Физика",
                lectures: 6,
                practical: 21,
                labs: 40,
                total: 26
            },
            {
                course: "Иностранный язык",
                lectures: -1,
                practical: 60,
                labs: -1,
                total: 60
            },
            {
                course: "Инженерная графика",
                lectures: 90,
                practical: 80,
                labs: -1,
                total: 85
            },
            {
                course: "Управление проектами",
                lectures: 6,
                practical: 21,
                labs: 40,
                total: 26
            },
            {
                course: "История",
                lectures: -1,
                practical: 60,
                labs: -1,
                total: 60
            },
            {
                course: "Базы данных",
                lectures: 90,
                practical: 80,
                labs: -1,
                total: 85
            },
            {
                course: "Технологии программирования",
                lectures: 6,
                practical: 21,
                labs: 40,
                total: 26
            },
            {
                course: "Дискретная математика",
                lectures: -1,
                practical: 60,
                labs: -1,
                total: 60
            }
        ]
    }

    const [attendance, setAttendance] = useState(defaultState.attendance);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student_info)
    };

    useEffect(() => {
        fetch('http://localhost:3333/attendance5', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setAttendance(data.attendance);

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <div className='chart attendance5'>
            <div className='chart-title'>
                Посещаемость занятий
            </div>
            <div className='chart-content attendance5-margin'>
                <table>
                    <thead>
                        <tr className='main3_line'>
                            <th scope="col" className='main3_col2 head  attendance5_col1'>Курс</th>
                            <th scope="col" className='main3_col3 head  attendance5_col2'>Лекции</th>
                            <th scope="col" className='main3_col4 head  attendance5_col3'>Лабы</th>
                            <th scope="col" className='main3_col4 head  attendance5_col4'>Практики</th>
                            <th scope="col" className='main3_col1_head head1 head  attendance5_col5'>Общая</th>
                        </tr>
                    </thead>
                    <div className='attendance5-scroll'>
                        <tbody>
                            {attendance.map((attendance) => <MarkLine attendance={attendance} />)}
                        </tbody>
                    </div>
                </table>
            </div>
        </div>
    );
}