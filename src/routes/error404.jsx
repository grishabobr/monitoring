import '../App.css';
import { Link } from "react-router-dom";


export default function error404() {
    return (
        <>
            Error 404. Страница не найдена.
            <Link to={'mainDashboard'} >
                    Перейти на Общий дашборд
            </Link>
        </>
    );
}