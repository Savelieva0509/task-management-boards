import Layout from '../../components/Layout/Layout';
import AppBar from '../../components/AppBar/AppBar';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import css from './DashboardPage.module.scss';

const containerStyle = {
  marginLeft: '400px',
  padding: '40px',
};

const DashboardPage = () => {
  return (
    <Layout>
      <div className="container text-center" style={containerStyle}>
        <TaskForm />
        <TaskList />
      </div>
    </Layout>
  );
};

export default DashboardPage;
