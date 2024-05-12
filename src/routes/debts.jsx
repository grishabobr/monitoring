import '../App.css';


export default function Debts() {
    return (
        <div className='dashboard'>
            <div className='dashboard-title'>
                Академические задолженности
            </div>
            <div className='charts-line'>
                <div className='chart debts1 one_number'>
                    <div className='chart-title-small'>
                        Задолженности
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
            </div>

            <div className='charts-line'>
                <div className='chart debts2'>
                    <div className='chart-title'>
                        Список задолженностей
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
            </div>

        </div>
    );
}