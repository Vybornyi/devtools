import { renderTasks } from './list/rendered';
import { setItem } from './list/storage';
import { getTasksList } from './list/tasksGateway';
import { initTodoListHandlers } from './list/todoList';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((tasksList) => {
      setItem('tasksList', tasksList);
      renderTasks();
    });
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);
