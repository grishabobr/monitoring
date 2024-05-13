import '../../../App.css';
import { useState, useEffect } from 'react';



export default function Marks4() {
    const defaultState = {
    }

    const [days, setDays] = useState(defaultState.days);

    return (
        <div className='chart marks4'>
            <div className='marks4_1'>
                <div className='chart-title'>
                    Ближайшие дедлайны
                </div>
                <div className='chart-content'>
                    content
                </div>
            </div>
            <div className='marks4_2'>
                <div className='chart-content'>
                    content
                </div>
            </div>
        </div>
    );
}