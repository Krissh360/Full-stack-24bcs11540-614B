import useUser from "./useUser";

function ProfilePanel() {
    const student = useUser();

    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Year: {student.year}</p>
        </div>
    );
}

export default ProfilePanel;