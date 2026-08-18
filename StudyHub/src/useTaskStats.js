import { useMemo } from "react";

function useTaskStats(tasks) {

    return useMemo(() => {

        const total = tasks.length;

        const completed = tasks.filter(
            task => task.completed
        ).length;

        const remaining = total - completed;

        return {
            total,
            completed,
            remaining
        };

    }, [tasks]);
}

export default useTaskStats;