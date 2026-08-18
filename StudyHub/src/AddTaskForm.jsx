import { useState } from "react";

function AddTaskForm({ dispatch }) {

    const [title, setTitle] = useState("");

    function handleSubmit() {

        if (title.trim() === "") {
            return;
        }

        dispatch({
            type: "ADD_TASK",
            payload: {
                id: Date.now(),
                title: title,
                completed: false
            }
        });

        setTitle("");
    }

    return (
        <div>

            <input
                type="text"
                placeholder="New task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Add Task
            </button>

        </div>
    );
}

export default AddTaskForm;