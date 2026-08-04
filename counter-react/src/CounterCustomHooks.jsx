import { useCounter } from "../hooks/useCounter";

function CounterCustomHooks()
{
    const
    {
        count,
        increment,
        decrement,
        reset,
    } = useCounter(10);

    return (

        <div>

        <h1>

        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>

        </h1>

        </div>

    )

}

export default CounterCustomHooks;