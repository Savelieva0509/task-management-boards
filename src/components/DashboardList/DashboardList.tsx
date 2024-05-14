import { useEffect } from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import { getDashboards } from '.././../redux/selectors';
import { DashboardTypes } from '../../types';
import { fetchDashboards } from '../../redux/dashboards-operations';
import css from './DashboardList.module.scss';

const DashboardList = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const dashboards = useSelector(getDashboards);

  useEffect(() => {
    dispatch(fetchDashboards());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {dashboards.map((dashboard: DashboardTypes) => (
        <li className={css.listItem} key={dashboard._id}>
          <Dashboard dashboard={dashboard} />
        </li>
      ))}
    </ul>
  );
};

export default DashboardList;
