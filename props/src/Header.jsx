import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function Header()
{
    const [theme, setTheme] = useContext(ThemeContext);

    return (

        <button onClick = {() =>
            setTheme (theme === "dark" ? "light" : "dark")
        }
        style = {{
            color: "black"
        }}
        
        >Test</button>

    )
}

export default Header;