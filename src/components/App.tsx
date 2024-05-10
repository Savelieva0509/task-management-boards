import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MainPage from '../pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/:dashboardId" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
