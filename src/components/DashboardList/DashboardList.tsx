import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import { getDashboards } from '.././../redux/selectors';

import { DashboardsState, DashboardTypes } from '../../types';
import css from './DashboardList.module.scss';


const DashboardList = () => {
 const dashboards = useSelector(getDashboards) as DashboardTypes[];
  console.log(dashboards);

  return (
    <ul className={css.list}>
      {dashboards.map((dashboard: DashboardTypes) => (
        <li className={css.listItem} key={dashboard.id}>
          <Dashboard dashboard={dashboard} />
        </li>
      ))}
    </ul>
  );
};

export default DashboardList;
