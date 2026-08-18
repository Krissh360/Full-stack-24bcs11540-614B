import React from 'react'

function LeaveForm({employee})
{
    return (

        <div>

        <h2>
            Employee information:
            Name: {employee.name}
            Age: {employee.age}
            Position: {employee.position}
        </h2>

        </div>

    );
}

export default LeaveForm;