import { createContext, useState } from "react";

const StudentContext = createContext();

function StudentProvider({ children }) {

    const [student] = useState({
        name: "Priya Nair",
        email: "priya@gmail.com",
        year: "3rd Year",
    });

    return (
        <StudentContext.Provider value={student}>
            {children}
        </StudentContext.Provider>
    );
}

export { StudentContext, StudentProvider };