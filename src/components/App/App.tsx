import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../../pages/DashboardPage/DashboardPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MainPage from '../../pages/MainPage/MainPage';
import AddDashboardPage from '../../pages/AddDashboardPage/AddDashboardPage';
import { getDashboards } from '../../redux/selectors';
import './App.scss';

function App() {
  const dashboards = useSelector(getDashboards);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="dashboards"
          element={
            dashboards.length === 0 ? <AddDashboardPage /> : <DashboardPage />
          }
        />
        <Route path="dashboards/:dashboardId" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
