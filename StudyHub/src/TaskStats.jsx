import useTaskStats from "./useTaskStats";

function TaskStats({ tasks }) {

    const {
        total,
        completed,
        remaining
    } = useTaskStats(tasks);

    return (
        <p>
            {remaining} remaining / {total} total
        </p>
    );
}

export default TaskStats;