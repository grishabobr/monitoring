import '../App.css';
import Attendance1 from './charts/attendanceCharts/attendance1';
import Attendance2 from './charts/attendanceCharts/attendance2';
import Attendance3 from './charts/attendanceCharts/attendance3';
import Attendance4 from './charts/attendanceCharts/attendance4';
import Attendance5 from './charts/attendanceCharts/attendance5';


export default function Attendance() {
    return (
        <div className='dashboard'>
            <div className='dashboard-title'>
                Посещаемость
            </div>
            <div className='charts-line'>
                <Attendance1 />
                <Attendance2 />
                <Attendance3 />
                <Attendance4 />
            </div>
            
            <div className='charts-line'>
                <Attendance5 />
            </div>
            
        </div>
    );
}