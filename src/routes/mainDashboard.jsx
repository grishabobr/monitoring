import '../App.css';
import Main1 from './charts/mainDashboardCharts/main1';
import Main2 from './charts/mainDashboardCharts/main2';
import Main3 from './charts/mainDashboardCharts/main3';


export default function MainDashboard() {

    return (
        <div className='dashboard'>
            <div className='dashboard-title'>
                Общий дашборд
            </div>
            <div className='charts-line'>
                <Main1 />
                <Main2 />
            </div>
            <div className='charts-line'>
                <Main3 />
            </div>
        </div>
    );
}