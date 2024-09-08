import { useEffect } from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Dashboard from '../Dashboard/Dashboard';
import {
  getDashboards,
  getDashboardsLoading,
  getAddingDashboard,
} from '.././../redux/selectors';
import { DashboardTypes } from '../../types';
import { fetchDashboards } from '../../redux/dashboards-operations';
import css from './DashboardList.module.scss';

const DashboardList = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const dashboards = useSelector(getDashboards);
  const loading = useSelector(getDashboardsLoading);
  const addingDashboard = useSelector(getAddingDashboard);

  useEffect(() => {
    dispatch(fetchDashboards());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className={css.spinnerContainer}>
          <ClipLoader size={80} color={'#1976d2'} loading={loading} />
        </div>
      ) : (
        <ul className={css.list}>
          {dashboards.map((dashboard: DashboardTypes) => (
            <li className={css.listItem} key={dashboard._id}>
              <Dashboard dashboard={dashboard} />
            </li>
          ))}
          {addingDashboard && (
            <li className={css.listItem}>
              <div className={css.spinnerContainer}>
                <ClipLoader
                  size={60}
                  color={'#1976d2'}
                  loading={addingDashboard}
                />
              </div>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default DashboardList;
