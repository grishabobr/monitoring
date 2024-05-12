import '../App.css';


export default function Attendance() {
    return (
        <div className='dashboard'>
            <div className='dashboard-title'>
                Посещаемость
            </div>
            <div className='charts-line'>
                <div className='chart attendance1 one_number'>
                    <div className='chart-title-small'>
                        За год
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
                <div className='chart attendance2 one_number'>
                    <div className='chart-title-small'>
                        За месяц
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
                <div className='chart attendance3 one_number'>
                    <div className='chart-title-small'>
                        За неделю
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
                <div className='chart attendance4 one_number'>
                    <div className='chart-title-small'>
                        Выговоры
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
            </div>
            
            <div className='charts-line'>
                <div className='chart attendance5'>
                    <div className='chart-title'>
                        Посещаемость занятий
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
            </div>
            
        </div>
    );
}