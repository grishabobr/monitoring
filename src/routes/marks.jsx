import '../App.css';
import { useState, useEffect } from 'react';

import Marks1 from './charts/marksCharts/marks1';
import Marks2 from './charts/marksCharts/marks2';
import Marks3 from './charts/marksCharts/marks3';
import Marks4 from './charts/marksCharts/marks4';
import Marks5 from './charts/marksCharts/marks5';
import Marks6 from './charts/marksCharts/marks6';



export default function Marks() {
    
    return (
        <div className='dashboard'>
            <div className='dashboard-title'>
                Успеваемость
            </div>
            <div className='charts-line'>
                <Marks1 />
                <Marks2 />
                <Marks3 />
            </div>
            <div className='charts-line'>
                <Marks4 />
            </div>
            <div className='charts-line'>
                <Marks5 />
            </div>
            <div className='charts-line'>
                <Marks6 />
            </div>
        </div>
    );
}