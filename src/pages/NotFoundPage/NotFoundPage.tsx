import Layout from '../../components/Layout/Layout';
import css from './NotFoundPage.module.scss';

const containerStyle = {
  marginLeft: '400px',
  padding: '40px',
};

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="container text-center" style={containerStyle}>
        <h1>DASHBOARD NOT FOUND</h1>
      </div>
    </Layout>
  );
};
export default NotFoundPage;
