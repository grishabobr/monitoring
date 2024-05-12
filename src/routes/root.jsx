import { Outlet } from "react-router-dom";
import '../App.css';

import { ReactComponent as MainSvg} from '../assets/menu-icons/main.svg'
import { ReactComponent as MarksSvg } from '../assets/menu-icons/marks.svg'
import { ReactComponent as AttendanceSvg } from '../assets/menu-icons/attendance.svg'
import { ReactComponent as DebtSvg } from '../assets/menu-icons/debt.svg'



export default function Root() {
    return (
        <div className="root">
            <div className="menu-background" >
                <div className="logo" >
                    Monitoring
                </div>

                <div className="menu-buttons" >
                    <div className="menu-button" >
                        <div className="menu-icon" >
                            <MainSvg fill='white'/>
                        </div>
                        <div className="menu-text" >
                            Общий дашборд
                        </div>
                    </div>
                    <div className="menu-button" >
                        <div className="menu-icon" >
                            <MarksSvg fill='white' />
                        </div>
                        <div className="menu-text" >
                            Успеваемость
                        </div>
                    </div>
                    <div className="menu-button" >
                        <div className="menu-icon" >
                            <AttendanceSvg stroke='white' />
                        </div>
                        <div className="menu-text" >
                            Посещаемость
                        </div>
                    </div>
                    <div className="menu-button" >
                        <div className="menu-icon" >
                            <DebtSvg fill='white'/>
                            <div className="debt-counter" >
                                1
                            </div>
                        </div>
                        <div className="menu-text" >
                            Академ. задолженности
                        </div>
                    </div>
                </div>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    );
}