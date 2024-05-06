import AppBar from '../../components/AppBar/AppBar';
import DashboardForm from '../../components/DashboardForm/DashboardForm';
import DashboardList from '../../components/DashboardList/DashboardList';
import Layout from '../../components/Layout/Layout';

const MainPage = () => {
  return (
    <Layout>
      <AppBar />
      <DashboardForm />
      <DashboardList />
    </Layout>
  );
};

export default MainPage;
