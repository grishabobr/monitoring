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
        weight -=0.5;
    }
    let w1 = weight*2;
    let w2 = 1 - w1;
    var rgb = [Math.round(color2[0] * w1 + color1[0] * w2),
    Math.round(color2[1] * w1 + color1[1] * w2),
    Math.round(color2[2] * w1 + color1[2] * w2)];
    return rgbToHex(rgb);
}


function MarkLine(props) {

    let markColor = pickHex(hexToRgb('#B76868'), hexToRgb('#B29D51'), hexToRgb('#4D9559'), props.line.mark/props.line.max_mark)

    return (
        <tr className='main3_line'>
            <td className='main3_col1 main3_col' style={{backgroundColor: markColor}}>{props.line.mark}/{props.line.max_mark}</td>
            <td className='main3_col2 main3_col'>{props.line.date}</td>
            <td className='main3_col3 main3_col'>{props.line.course}</td>
            <td className='main3_col4 main3_col'>{props.line.work}</td>
        </tr>
    );
}



export default function Main3() {

    const defaultState = {
        marks: [
            {
                date: "01.01.2024",
                course: "Физика",
                work: "Лабораторная работа 1",
                mark: 4,
                max_mark: 5
            },
            {
                date: "02.01.2024",
                course: "Математика",
                work: "Контрольная работа 1",
                mark: 5,
                max_mark: 10
            },
            {
                date: "05.03.2024",
                course: "Иностранный язык",
                work: "Групповой проект",
                mark: 1,
                max_mark: 10
            },
            {
                date: "06.03.2024",
                course: "Иностранный язык",
                work: "Тест 3",
                mark: 12,
                max_mark: 12
            },
            {
                date: "01.04.2024",
                course: "Физика",
                work: "Контрольная работа 3",
                mark: 3,
                max_mark: 5
            },
            
        ]
    }

    const [marks, setMarks] = useState(defaultState.marks);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student_info)
    };

    useEffect(() => {
        fetch('http://localhost:3333/main3', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setMarks(data.marks);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className='chart main3'>
            <div className='chart-title'>
                Последние оценки
            </div>
            <div className='chart-content'>
                <table>
                    <thead>
                        <tr className='main3_line'>
                            <th scope="col" className='main3_col1_head head1 head'></th>
                            <th scope="col" className='main3_col2 head'>Дата</th>
                            <th scope="col" className='main3_col3 head'>Курс</th>
                            <th scope="col" className='main3_col4 head'>Работа</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marks.map((markLine) => <MarkLine line = {markLine}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}