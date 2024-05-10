import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getLastDashboardId, getDashboards } from '../../redux/selectors';
import Layout from '../../components/Layout/Layout';

const containerStyle = {
  marginLeft: '400px',
  padding: '40px',
};

const AddDashboardPage = () => {
  const navigate = useNavigate();
  const lastDashboardId = useSelector(getLastDashboardId);
  const dashboards = useSelector(getDashboards);

  useEffect(() => {
    const hasDashboards = dashboards.length > 0;

    if (hasDashboards) {
      navigate(`/dashboards/${lastDashboardId}`);
    }
  }, [dashboards, lastDashboardId, navigate]);

  return (
    <Layout>
      <div className="container text-center" style={containerStyle}>
        <h1> YOU HAVEN'T CREATED ANY DASHBOARDS YET.</h1>
      </div>
    </Layout>
  );
};

export default AddDashboardPage;
