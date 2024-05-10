import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MainPage from '../pages/MainPage/MainPage';
import AddDashboard from '../pages/Dashboards/AddDashboardPage';
import { getDashboards } from './../redux/selectors';

function App() {
  const dashboards = useSelector(getDashboards);
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        {dashboards.length === 0 ? (
          <Route path="dashboards" element={<AddDashboard />} />
        ) : (
          <Route path="dashboards/:dashboardId" element={<DashboardPage />} />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
