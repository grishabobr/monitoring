import '../../../App.css';
import { useState, useEffect } from 'react';



export default function Marks6() {
    const defaultState = {
    }

    const [semestValue, setSemestValue] = useState(1);

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
            <div className='chart-title marks5_filter_container'>
                Зачетная книжка
                <div className='marks5_filter'>
                    <div className='marks5_filter_title'>
                        Семестр:
                    </div>
                    <div className='marks5_filter_selector'>
                        <div className='marks5_filter_controls' onClick={() => { setSemestValue(semestValue - 1) }}>
                            -
                        </div>
                        <div className='marks5_filter_value'>
                            {semestValue}
                        </div>
                        <div className='marks5_filter_controls' onClick={() => { setSemestValue(semestValue + 1) }}>
                            +
                        </div>
                    </div>
                </div>
            </div>
            <div className='chart-content'>
                content
            </div>
        </div>
    );
}