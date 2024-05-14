import '../../../App.css';
import { useState, useEffect } from 'react';

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

function Mark(props) {

    let markColor = pickHex(hexToRgb('#B76868'), hexToRgb('#B29D51'), hexToRgb('#4D9559'), props.mark.mark / props.mark.max_mark)

    return (
        <div className='line-work'>
            <div className='line-work-info'>
                {props.mark.date}
            </div>
            <div className='line-work-info'>
                {props.mark.work}
            </div>
            <div className='main5_plug  main3_col main3_col1' style={{ backgroundColor: markColor }}>
                {props.mark.mark}/{props.mark.max_mark}
            </div>
        </div>
    );

}

function CourseLine(props) {
    
    return (
        <div className='marks5-table-line'>
            <div className='line-course'>
                {props.course.course}
            </div>
            <div className='marks5-scroll-horiz'>
                <div className='line-works'>
                    {props.course.marks.map((mark) => <Mark mark={mark} />)}
                </div>
            </div>
        </div>
    );
    
}


export default function Marks5() {
    const defaultState = {
        courses: [
            {
                course: "Инженерная графика",
                marks: [
                    {
                        date: "01.01.2024",
                        work: "Тест 1",
                        mark: 3,
                        max_mark: 5
                    },
                    {
                        date: "02.01.2024",
                        work: "КР 2",
                        mark: 5,
                        max_mark: 5
                    },
                    {
                        date: "03.01.2024",
                        work: "КР 3",
                        mark: 2,
                        max_mark: 8
                    }, {
                        date: "04.01.2024",
                        work: "ЛР 2",
                        mark: 2,
                        max_mark: 5
                    },
                    {
                        date: "05.01.2024",
                        work: "ЛР 3",
                        mark: 3,
                        max_mark: 5
                    },
                    {
                        date: "06.01.2024",
                        work: "КР 4",
                        mark: 5,
                        max_mark: 5
                    },
                    {
                        date: "07.01.2024",
                        work: "Тест 2",
                        mark: 3,
                        max_mark: 10
                    },
                    {
                        date: "08.01.2024",
                        work: "ЛР 5",
                        mark: 2,
                        max_mark: 5
                    }
                ]
            },
            {
                course: "Иностранный язык",
                marks: [
                    {
                        date: "01.01.2024",
                        work: "Тест 1",
                        mark: 8,
                        max_mark: 10
                    },
                    {
                        date: "02.01.2024",
                        work: "Тест 2",
                        mark: 10,
                        max_mark: 10
                    },
                    {
                        date: "03.01.2024",
                        work: "Тест 3",
                        mark: 9,
                        max_mark: 10
                    },
                    {
                        date: "04.01.2024",
                        work: "Тест 4",
                        mark: 10,
                        max_mark: 10
                    }
                ]
            },
            {
                course: "Физика",
                marks: [
                    {
                        date: "01.01.2024",
                        work: "ЛР 1",
                        mark: 4,
                        max_mark: 5
                    },
                    {
                        date: "02.01.2024",
                        work: "КР 1",
                        mark: 6,
                        max_mark: 10
                    }
                ]
            },
            {
                course: "Математика",
                marks: [
                    {
                        date: "01.01.2024",
                        work: "Тест 1",
                        mark: 1,
                        max_mark: 5
                    },
                    {
                        date: "02.01.2024",
                        work: "КР 2",
                        mark: 2,
                        max_mark: 5
                    }
                ]
            }
        ]
    }

    const [courses, setCourses] = useState(defaultState.courses);

    return (
        <div className='chart marks5'>
            <div className='chart-title'>
                Проверочные работы
            </div>
            <div className='chart-content marks5-scroll'>
                <div className='marks5-table'>
                    
                    {courses.map((course) => <CourseLine course={course} />)}

                </div>
            </div>
        </div>
    );
}