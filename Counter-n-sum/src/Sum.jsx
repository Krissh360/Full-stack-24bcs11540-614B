import React from 'react';
import {memo} from 'react';

React.memo(() => {

    function totalSum()
    {
        console.log("Sum is rendering");
        let sum = 0;
        for (let i = 0; i < 1000; i++)
        {
            sum += i;
        }
        return sum;
    }
    const sumAll = totalSum();

    return(
        <div>
            <h2>Sum is {sumAll}</h2>
        </div>
    )
})

export default Sum;