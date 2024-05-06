import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Filter from '../Filter/Filter';
import TaskCounter from '../TaskCounter/TaskCounter';
import css from './AppBar.module.scss';

const AppBar = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  return (
    <div className={css.wrapper}>
      {isMainPage ? (
        <>
          <Link className={css.link} to="/archive">
            TO ARCHIVE
            <FaArrowRight style={{ marginLeft: '10px' }} />
          </Link>
          <TaskCounter />
          <Filter />
        </>
      ) : (
        <Link className={css.link} to="/">
          <FaArrowLeft style={{ marginRight: '10px' }} />
          TO MAIN
        </Link>
      )}
    </div>
  );
};

export default AppBar;
