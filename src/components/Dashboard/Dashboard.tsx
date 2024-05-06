import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteDashboard } from '../../redux/dashboards-slice';
import { DashboardTypes } from '../../types';
import css from './Dashboard.module.scss';

type DashboardProps = {
  dashboard: DashboardTypes;
};

const Dashboard = ({ dashboard }: DashboardProps) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteDashboard(dashboard.id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{dashboard.title}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Dashboard;
