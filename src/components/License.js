import { useRef, useState } from "react";
import styles from "./License.module.scss";

class Task {
  constructor(name) {
    this.id = Math.random();
    this.name = name;
    this.status = 0;
  }
}

const License = () => {
  const [tasks, setTasks] = useState([]);
  const textInput = useRef();

  const handleClick = () => {
    const task = new Task(textInput.current.value);
    setTasks((prev) => [...tasks, task]);
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
    if (!task.status) {
      return (
        <>
          <div>{task.name}</div>
          <div></div>
          <div></div>
          <div>
            <button onClick={() => handleTaskChange(task)}>
              update status
            </button>
          </div>
        </>
      );
    } else if (task.status === 1) {
      return (
        <>
          <div></div>
          <div>{task.name}</div>
          <div></div>
          <div>
            <button onClick={() => handleTaskChange(task)}>
              update status
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div></div>
          <div></div>
          <div>{task.name}</div>
          <div>
            <button onClick={() => handleTaskChange(task)}>
              update status
            </button>
          </div>
        </>
      );
    }
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <button onClick={handleClick}>Add task</button>
      <div className={styles.taskHolder}>
        <div>ToDo</div>
        <div>Doing</div>
        <div>Done</div>
        <div>Buttons</div>
        {tasks.map((task) => {
          return renderTaskRow(task);
        })}
      </div>
    </div>
  );
};

export default License;
