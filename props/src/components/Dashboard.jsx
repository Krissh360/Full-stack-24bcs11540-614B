import EmployeeSection from './EmployeeSection.jsx'
import React from 'react'

function Dashboard({employee})
{
    return (

        <div>
            <EmployeeSection employee={employee} />
        </div>

    );
}

export default Dashboard;