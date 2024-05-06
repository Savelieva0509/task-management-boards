import { Route, Routes } from 'react-router-dom';
import  DashboardPage from '../pages/DashboardPage/DashboardPage';
import MainPage from '../pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="/:dashboardId" element={<DashboardPage />} />
      </Routes>
    </>
  );
}
export default App;
