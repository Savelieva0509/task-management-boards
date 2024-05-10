import DashboardForm from '../DashboardForm/DashboardForm';
import DashboardList from '../DashboardList/DashboardList';
import css from './SideBar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={css.sidebar}>
      <h3>MY DASHBOARDS</h3>
      <DashboardList />
      <DashboardForm />
    </div>
  );
};

export default Sidebar;
