import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { getLastDashboardId, getDashboards } from '../../redux/selectors';
import css from './MainPage.module.scss';

const MainPage = () => {
  const dashboards = useSelector(getDashboards);
  const lastDashboardId = useSelector(getLastDashboardId);

  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>
          Every minute spent planning saves 10 minutes in executing the plan.
        </h1>
        {dashboards.length === 0 ? (
          <Link className={css.link} to={`/dashboards`}>
            LET'S START <FaArrowRight style={{ marginLeft: '15px' }} />
          </Link>
        ) : (
          <Link className={css.link} to={`/dashboards/${lastDashboardId}`}>
            LET START <FaArrowRight style={{ marginLeft: '15px' }} />
          </Link>
        )}
      </div>
    </section>
  );
};
export default MainPage;
