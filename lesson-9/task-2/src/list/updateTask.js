import { renderTasks } from './rendered';
import { getItem, setItem } from './storage';
import { updateTask, getTasksList, deleteTask } from './tasksGateway';

export const onListClick = (e) => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');
  const isCheckBox = e.target.classList.contains('list-item__checkbox');
  const taskId = e.target.dataset.id;

  if (isDeleteBtn) {
    deleteTask(taskId)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
  if (isCheckBox) {
    const done = e.target.checked;
    onToggleTask(taskId, done);
  }

  function onToggleTask(taskId, done) {
    const taskslist = getItem('tasksList');
    const { text, createDate } = taskslist
      .find((task) => task.id === taskId);
    const updatedTask = {
      text,
      createDate,
      done,
      finishDate: done ? new Date().toISOString() : null,
    };

    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
};
