import { Outlet, NavLink } from "react-router-dom";
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
                    <NavLink to={'mainDashboard'} className={({ isActive }) => isActive ? "menu-button-active" : "menu-button"} >
                        <div className="menu-icon" >
                            <MainSvg />
                        </div>
                        <div className="menu-text" >
                            Общий дашборд
                        </div>
                    </NavLink>
                    <NavLink to={'marks'} className={({ isActive }) => isActive ? "menu-button-active" : "menu-button"} >
                        <div className="menu-icon" >
                            <MarksSvg />
                        </div>
                        <div className="menu-text" >
                            Успеваемость
                        </div>
                    </NavLink>
                    <NavLink to={'attendance'} className={({ isActive }) => isActive ? "menu-button-active" : "menu-button"} >
                        <div className="menu-icon" >
                            <AttendanceSvg />
                        </div>
                        <div className="menu-text" >
                            Посещаемость
                        </div>
                    </NavLink>
                    <NavLink to={'debts'} className={({ isActive }) => isActive ? "menu-button-active" : "menu-button"} >
                        <div className="menu-icon" >
                            <DebtSvg />
                            <div className="debt-counter" >
                                1
                            </div>
                        </div>
                        <div className="menu-text" >
                            Академ. задолженности
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    );
}