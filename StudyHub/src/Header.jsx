import useUser from "./useUser";

function Header() {

    const student = useUser();

    return (
        <header>
            <h1>Study Hub</h1>
            <p>Welcome, {student.name}</p>
        </header>
    );
}

export default Header;