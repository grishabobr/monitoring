import '../../../App.css';
import { useState, useEffect } from 'react';
import { ReactComponent as LinkSvg } from '../../../assets/menu-icons/link.svg'



function Debt(props) {

    return (
        <tr className='main3_line'>
            <td className='main3_col2 main3_col debts2_col1'>{props.debt.course}</td>
            <td className='main3_col3 main3_col debts2_col2'>{props.debt.semestr}</td>
            <td className='main3_col4 main3_col debts2_col3'>{props.debt.attempt}/3</td>
            <td className='main3_col4 main3_col debts2_col4'>{props.debt.date}</td>
            <td className='main3_col4 main3_col debts2_col5' >
                <a className='debt2_link' href={props.debt.requirements}>
                    <LinkSvg className='link-svg'/>
                    Перейти
                </a>
            </td>
        </tr>
    );
}


export default function Debts2() {
    const defaultState = {
        debts: [
            {
                course: "Инженерная графика",
                semestr: '2 cем.',
                attempt: 2,
                date: '29.05.2024',
                requirements: 'https://ya.ru/'
            }
        ]
    }

    const [debts, setDebts] = useState(defaultState.debts);


    return (
        <div className='chart debts2'>
            <div className='chart-title'>
                Список задолженностей
            </div>
            <div className='chart-content attendance5-margin'>
                <table>
                    <thead>
                        <tr className='main3_line'>
                            <th scope="col" className='main3_col2 head  debts2_col1'>Курс</th>
                            <th scope="col" className='main3_col3 head  debts2_col2'>Семестр</th>
                            <th scope="col" className='main3_col4 head  debts2_col3'>Попытка</th>
                            <th scope="col" className='main3_col4 head  debts2_col4'>Дата пересдачи</th>
                            <th scope="col" className='main3_col4 head  debts2_col5'>Требования</th>
                        </tr>
                    </thead>
                    <div className='attendance5-scroll'>
                        <tbody>
                            {debts.map((debt) => <Debt debt={debt} />)}
                        </tbody>
                    </div>
                </table>
            </div>
        </div>
    );
}