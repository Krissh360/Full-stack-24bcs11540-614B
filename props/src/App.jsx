import React from 'react'
import './App.css'
// import Dashboard from './components/Dashboard.jsx'
// import LeaveForm from './components/LeaveForm.jsx'
import {useState} from 'react';
import {useContext} from 'react';
import ThemeContext from 

function App() {

    /* <>
      const Students = [

        Krissh,
        Kajal,
        Ramesh,
        Rohan,
        Mahesh

      ];

      return (

        <div>

          <h3>Student list</h3>

          {Students.map((student, index) => (
            <p key={index}>{index+1}. {student}</p>
          ))}

        </div>

      );
          
    </>
    
    */

    
 
    // const employee = { name: "Krissh Chhabra", age: 20, position: "Software Engineer" };

    // return (
    //   <div>
    //     {/* <Dashboard employee={employee} />
    //     <EmployeeSection employee={employee} /> */
    //     <LeaveForm employee={employee} />}
    //   </div>
    // );

    const [theme, setTheme] = useState('dark');

    return(

      <ThemeContext.Provider value = {{theme, setTheme}}>

      <h2>Theme context</h2>
      <h2>Current theme is: {theme}</h2>

      </ThemeContext.Provider>

    )

}

export default App;