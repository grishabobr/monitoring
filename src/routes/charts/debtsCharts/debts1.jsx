import '../../../App.css';
import { useState, useEffect } from 'react';

function getColor(value, p1, p2) {
    if (value < p1) {
        return 'linear-gradient(180deg, rgba(33,111,50,1) 22%, rgba(17,55,60,1) 100%)';
    }
    if (value < p2) {
        return 'linear-gradient(180deg, rgba(187,189,57,1) 22%, rgba(70,97,28,1) 100%)';
    }
    return 'linear-gradient(180deg, rgba(189,57,57,1) 22%, rgba(87,26,48,1) 100%)';
}


export default function Debts1() {
    const defaultState = {
        debts: 1
    }

    const [debts, setDebts] = useState(Number.parseFloat(defaultState.debts).toFixed(0));

    const [color, setColor] = useState(getColor(defaultState.debts, 1, 2));

    return (
        <div className='chart debts1 one_number' style={{ background: color }}>
            <div className='chart-title-small'>
                Задолженности
            </div>
            <div className='chart-content one_number_content'>
                <span>{debts}</span>
            </div>
        </div>
    );
}