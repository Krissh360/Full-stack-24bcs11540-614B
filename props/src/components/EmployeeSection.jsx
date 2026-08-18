import LeaveForm from './LeaveForm.jsx'
import React from 'react'

function EmployeeSection({employee})
{
    return (

        <div>
            <LeaveForm employee={employee} />
        </div>

    );
}

export default EmployeeSection;