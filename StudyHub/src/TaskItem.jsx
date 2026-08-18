import { memo } from "react";

function TaskItem({ task, dispatch }) {

    console.log("Rendering:", task.title);

    return (
        <div>

            <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                    dispatch({
                        type: "TOGGLE_TASK",
                        payload: task.id
                    })
                }
            />

            <span>
                {task.title}
            </span>

            <button
                onClick={() =>
                    dispatch({
                        type: "DELETE_TASK",
                        payload: task.id
                    })
                }
            >
                Delete
            </button>

        </div>
    );
}

export default memo(TaskItem);