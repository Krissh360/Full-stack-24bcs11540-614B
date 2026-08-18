import { useReducer } from "react";
import { taskReducer } from "./taskReducer";
import TaskStats from "./TaskStats";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const initialTasks = [
    {
        id: 1,
        title: "Finish DBMS assignment",
        completed: false
    },
    {
        id: 2,
        title: "Revise React hooks",
        completed: false
    },
    {
        id: 3,
        title: "Submit lab report",
        completed: true
    }
];

function TaskManager() {

    const [tasks, dispatch] = useReducer(
        taskReducer,
        initialTasks
    );

    return (
        <div>

            <h2>My Tasks</h2>

            <TaskStats tasks={tasks} />

            <AddTaskForm dispatch={dispatch} />

            <TaskList
                tasks={tasks}
                dispatch={dispatch}
            />

        </div>
    );
}

export default TaskManager;