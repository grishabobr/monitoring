import '../../../App.css';
import { useState, useEffect } from 'react';



export default function Marks5() {
    const defaultState = {
    }

    const [days, setDays] = useState(defaultState.days);

    return (
        <div className='chart marks5'>
            <div className='chart-title'>
                Проверочные работы
            </div>
            <div className='chart-content'>
                content
            </div>
        </div>
    );
}