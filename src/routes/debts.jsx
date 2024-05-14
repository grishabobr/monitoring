import '../App.css';
import Debts1 from './charts/debtsCharts/debts1';
import Debts2 from './charts/debtsCharts/debts2';


export default function Debts() {
    return (
        <div className='dashboard'>
            <div className='dashboard-title'>
                Академические задолженности
            </div>
            <div className='charts-line'>
                <Debts1 />
            </div>

            <div className='charts-line'>
                <Debts2 />
            </div>

        </div>
    );
}