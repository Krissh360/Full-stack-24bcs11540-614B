import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function useUser() {
    return useContext(StudentContext);
}

export default useUser;