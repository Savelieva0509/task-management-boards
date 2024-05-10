import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { getLastDashboardId,getDashboards } from '../../redux/selectors';

import css from './MainPage.module.scss';

const MainPage = () => {
  const navigate = useNavigate();
   const dashboards = useSelector(getDashboards);
  const lastDashboardId = useSelector(getLastDashboardId);


  
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Эффективные решения для вашего бизнеса</h1>
        {dashboards.length === 0 ? (
          <Link className={css.link} to={`/dashboards`}>
            <FaArrowRight style={{ marginRight: '10px' }} />
            LET START
          </Link>
        ) : (
          <Link className={css.link} to={`/dashboards/${lastDashboardId}`}>
            <FaArrowRight style={{ marginRight: '10px' }} />
           LET START
          </Link>
        )}
      </div>
    </section>
  );
};
export default MainPage;
