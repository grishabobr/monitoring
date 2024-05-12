import '../App.css';


export default function MainDashboard() {
    return (
        <div className='dashboard'>
            <div className='dashboard-title'>
                Общий дашборд
            </div>
            <div className='charts-line'>
                <div className='chart main1'>
                    <div className='chart-title'>
                        Рейтинг
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
                <div className='chart main2'>
                    <div className='chart-title'>
                        Посещаемость за неделю
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
            </div>
            <div className='charts-line'>
                <div className='chart main3'>
                    <div className='chart-title'>
                        Последние оценки
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
            </div>
        </div>
    );
}