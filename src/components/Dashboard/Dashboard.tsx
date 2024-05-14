import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { MdClose, MdEdit, MdSave, MdCancel } from 'react-icons/md';
import {
  deleteDashboard,
  editDashboard,
} from '../../redux/dashboards-operations';
import { DashboardTypes } from '../../types';
import css from './Dashboard.module.scss';

type DashboardProps = {
  dashboard: DashboardTypes;
};

const Dashboard = ({ dashboard }: DashboardProps) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(dashboard.title);
  const [originalTitle, setOriginalTitle] = useState(dashboard.title);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    dispatch(deleteDashboard(dashboard._id));
  };

  const handleEdit = async () => {
    if (isEditing) {
      if (editedTitle.trim() !== '') {
        setIsLoading(true);
        try {
          await dispatch(
            editDashboard({ id: dashboard._id, title: editedTitle })
          );
          setIsEditing(false);
        } catch (error: any) {
          console.error('Failed to edit dashboard:', error.message);
        } finally {
          setIsLoading(false);
        }
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
          <Link to={`/dashboards/${dashboard._id}`} className={css.link}>
            <p className={css.text}>{dashboard.title}</p>
          </Link>

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
