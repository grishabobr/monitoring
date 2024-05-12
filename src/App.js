import './App.css';
import './scrollbar.css';
import Root from "./routes/root";
import MainDashboard from "./routes/mainDashboard";
import Marks from "./routes/marks";
import Attendance from "./routes/attendance";
import Debts from "./routes/debts";
import Error404 from "./routes/error404";




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/mainDashboard",
        element: <MainDashboard />,
      },
      {
        path: "/marks",
        element: <Marks />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/debts",
        element: <Debts />,
      },      
    ],
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
