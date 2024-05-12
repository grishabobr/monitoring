import '../App.css';


export default function Marks() {
    return (
        <div className='dashboard'>
            <div className='dashboard-title'>
                Успеваемость
            </div>
            <div className='charts-line'>
                <div className='chart marks1 one_number'>
                    <div className='chart-title-small'>
                        Средний балл
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
                <div className='chart marks2 one_number'>
                    <div className='chart-title-small'>
                        Работ выполнено
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
                <div className='chart marks3 one_number'>
                    <div className='chart-title-small'>
                        Дней до сессии
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
            </div>
            <div className='charts-line'>
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
            </div>
            <div className='charts-line'>
                <div className='chart marks5'>
                    <div className='chart-title'>
                        Проверочные работы
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
            </div>
            <div className='charts-line'>
                <div className='chart marks6'>
                    <div className='chart-title marks5_filter_container'>
                        Зачетная книжка
                        <div className='marks5_filter'>
                            <div className='marks5_filter_title'>
                                Семестр:
                            </div>
                            <div className='marks5_filter_selector'>
                                <div className='marks5_filter_value'>
                                    1
                                </div>
                                <div className='marks5_filter_controls'>
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chart-content'>
                        content
                    </div>
                </div>
            </div>
        </div>
    );
}