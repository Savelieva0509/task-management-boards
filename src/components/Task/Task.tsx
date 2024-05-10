import { Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdClose, MdEdit, MdSave, MdCancel } from 'react-icons/md';
import { Card, Form } from 'react-bootstrap';
import css from './Task.module.scss';
import { deleteTask, editTask } from '../../redux/tasks-slice';
import { TaskTypes } from '../../types';
import { TaskStatus } from '../../redux/constants';

type TaskProps = {
  task: TaskTypes;
  index: number;
};

const Task = ({ task, index }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [originalTitle, setOriginalTitle] = useState(task.title);
  const [editedText, setEditedText] = useState(task.text);
  const [originalText, setOriginalText] = useState(task.text);

  function parseTaskStatus(status: string): TaskStatus | undefined {
    switch (status) {
      case 'todo':
        return TaskStatus.TODO;
      case 'in-progress':
        return TaskStatus.IN_PROGRESS;
      case 'done':
        return TaskStatus.DONE;
      default:
        return undefined; // Если переданная строка не соответствует ни одному статусу
    }
  }

  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(
      deleteTask({
        id: task.id,
        status: parseTaskStatus(task.status) || TaskStatus.TODO,
      })
    );

  const handleEdit = () => {
    if (isEditing) {
      if (editedTitle.trim() !== '') {
        dispatch(
          editTask({
            id: task.id,
            title: editedTitle,
            text: editedText,
            status: parseTaskStatus(task.status) || TaskStatus.TODO,
          })
        );
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
      setOriginalTitle(editedTitle);
      setOriginalText(editedText);
    }
  };

  const handleCancel = () => {
    setEditedTitle(originalTitle);
    setEditedText(originalText);
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'title') {
      setEditedTitle(event.target.value);
    } else if (event.target.name === 'text') {
      setEditedText(event.target.value);
    }
  };

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={css.card} style={{ width: '25rem' }}>
            <Card.Body>
              {isEditing ? (
                <Form>
                  <Form.Group controlId="formTaskTitle">
                    <Form.Control
                      type="text"
                      name="title"
                      value={editedTitle}
                      onChange={handleChange}
                      placeholder="Enter task title"
                    />
                  </Form.Group>
                  <Form.Group controlId="formTaskText">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="text"
                      value={editedText}
                      onChange={handleChange}
                      placeholder="Enter task text"
                      className={css.textarea}
                    />
                  </Form.Group>
                </Form>
              ) : (
                <>
                  <Card.Title>{task.title}</Card.Title>
                  <Card.Text>{task.text}</Card.Text>
                </>
              )}

              {isEditing ? (
                <div className={css.buttonWrapper}>
                  <button className={css.btn} onClick={handleEdit}>
                    <MdSave size={24} />
                  </button>
                  <button className={css.btn} onClick={handleCancel}>
                    <MdCancel size={24} />
                  </button>
                </div>
              ) : (
                <div className={css.buttonWrapper}>
                  <button className={css.btn} onClick={handleEdit}>
                    <MdEdit size={24} />
                  </button>
                  <button className={css.btn} onClick={handleDelete}>
                    <MdClose size={24} />
                  </button>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
