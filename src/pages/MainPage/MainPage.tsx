import AppBar from '../../components/AppBar/AppBar';
import DashboardList from '../../components/DashboardList/DashboardList';
import Layout from '../../components/Layout/Layout';

const MainPage = () => {
  return (
    <Layout>
      <AppBar />
      <DashboardList />
    </Layout>
  );
};

export default MainPage;
