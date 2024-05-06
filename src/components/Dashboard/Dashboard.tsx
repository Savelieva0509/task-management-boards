import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdClose, MdEdit, MdSave, MdCancel } from 'react-icons/md';
import { deleteDashboard,  editDashboard } from '../../redux/dashboards-slice';
import { DashboardTypes } from '../../types';
import css from './Dashboard.module.scss';

type DashboardProps = {
  dashboard: DashboardTypes;
};

const Dashboard = ({ dashboard }: DashboardProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(dashboard.title);
  const [originalTitle, setOriginalTitle] = useState(dashboard.title);

  const handleDelete = () => {
    dispatch(deleteDashboard(dashboard.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      if (editedTitle.trim() !== '') {
        dispatch(editDashboard({ id: dashboard.id, title: editedTitle }));
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
      setOriginalTitle(editedTitle);
    }
  };

  const handleCancel = () => {
    setEditedTitle(originalTitle);
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  return (
    <div className={css.wrapper}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={handleChange}
            className={css.input}
            autoFocus
          />
          <div className={css.buttons}>
            <button className={css.btn} onClick={handleEdit}>
              <MdSave size={24} />
            </button>
            <button className={css.btn} onClick={handleCancel}>
              <MdCancel size={24} />
            </button>
          </div>
        </>
      ) : (
        <>
          <p className={css.text}>{dashboard.title}</p>
          <div className={css.buttons}>
            <button className={css.btn} onClick={handleEdit}>
              <MdEdit size={24} />
            </button>
            <button className={css.btn} onClick={handleDelete}>
              <MdClose size={24} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
