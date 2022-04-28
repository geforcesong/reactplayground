import { useRef, useState } from "react";
import styles, {
  buttons,
  statusTodo,
  statusDoing,
  statusDone,
  pageHolder,
} from "./todo.module.scss";
import Task from "./Task";

const statusStyle = {
  0: statusTodo,
  1: statusDoing,
  2: statusDone,
};

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const textInput = useRef();

  const handleClick = () => {
    const task = new Task(textInput.current.value);
    setTasks(() => [...tasks, task]);
    textInput.current.value = "";
  };

  const handleTaskChange = (task) => {
    if (!task.status) {
      task.status = 1;
    } else if (task.status == 1) {
      task.status = 2;
    } else {
      task.status = 0;
    }
    setTasks((prev) => [...tasks]);
  };

  function renderTaskRow(task) {
    return (
      <>
        <div className={statusStyle[task.status]}>{task.name}</div>
        <div className={buttons}>
          <button onClick={() => handleTaskChange(task)}>update status</button>
        </div>
      </>
    );
  }

  return (
    <div className={pageHolder}>
      <input type="text" ref={textInput} />
      <button onClick={handleClick}>Add task</button>
      <div className={styles.taskHolder}>
        <div>ToDo</div>
        <div>Doing</div>
        <div>Done</div>
        <div>Actions</div>
        {tasks.map((task) => {
          return renderTaskRow(task);
        })}
      </div>
    </div>
  );
}

export default TodoList;
