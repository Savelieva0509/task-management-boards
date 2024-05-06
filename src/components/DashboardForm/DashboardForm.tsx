import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { addDashboard } from '../../redux/dashboards-slice';
import { DashboardFormValues } from '../../types';
import Button from '../Button/Button';
import css from './DashboardForm.module.scss';

const initialValues = {
  dashboard: '',
};

const maxLength = 40 ;

const dashboardSchema = Yup.object().shape({
  dashboard: Yup.string()
    .max(maxLength, `Entry length must not exceed ${maxLength} characters`)
    .required('Enter text'),
});

const DashboardForm = () => {
  interface MyFormikHelpers extends FormikHelpers<DashboardFormValues> {}

  const dispatch = useDispatch();
  const handleFormSubmit = (
    formikValues: DashboardFormValues,
    formikHelpers: MyFormikHelpers
  ) => {
    dispatch(addDashboard(formikValues.dashboard));
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={dashboardSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, errors, touched }) => (
        <>
          <form className={css.form} onSubmit={handleSubmit}>
            <Field
              className={`${css.field} ${
                touched.dashboard && errors.dashboard ? css.error_field : ''
              }`}
              type="text"
              name="dashboard"
              placeholder="Enter dashboard title..."
            />

            <Button type="submit">Add dashboard</Button>
          </form>
          <ErrorMessage
            name="dashboard"
            component="div"
            className={css.error}
          />
        </>
      )}
    </Formik>
  );
};

export default DashboardForm;
