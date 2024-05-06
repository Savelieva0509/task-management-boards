import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import css from './AppBar.module.scss';

const AppBar = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  return (
    <div className={css.wrapper}>
      {isMainPage ? (
        <>
          <Link className={css.link} to="/:dashboardId">
            TO DASHBOARD
            <FaArrowRight style={{ marginLeft: '10px' }} />
          </Link>
        </>
      ) : (
        <Link className={css.link} to="/">
          <FaArrowLeft style={{ marginRight: '10px' }} />
          ALL DASHBOARDS
        </Link>
      )}
    </div>
  );
};

export default AppBar;
