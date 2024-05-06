import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { addTask } from '../../redux/tasks-slice';
import { FormValues } from '../../types';
import Button from '../Button/Button';
import css from './TaskForm.module.scss';

const initialValues = {
  task: '',
};

const maxLength = 20;

const taskSchema = Yup.object().shape({
  task: Yup.string()
    .max(maxLength, `Entry length must not exceed ${maxLength} characters`)
    .required('Enter text'),
});

const TaskForm = () => {
  interface MyFormikHelpers extends FormikHelpers<FormValues> {}

  const dispatch = useDispatch();
  const handleFormSubmit = (
    formikValues: FormValues,
    formikHelpers: MyFormikHelpers
  ) => {
    dispatch(addTask(formikValues.task));
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={taskSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, errors, touched }) => (
        <>
          {' '}
          <form className={css.form} onSubmit={handleSubmit}>
            <Field
              className={`${css.field} ${
                touched.task && errors.task ? css.error_field : ''
              }`}
              type="text"
              name="task"
              placeholder="Enter task text..."
            />

            <Button type="submit">Add task</Button>
          </form>
          <ErrorMessage name="task" component="div" className={css.error} />
        </>
      )}
    </Formik>
  );
};

export default TaskForm;
