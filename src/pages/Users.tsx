import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button/Button";
import { useState } from "react";
import type { User } from "../models/User";
import { getUsersFromDB } from "../services/userService";

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        try {
            setLoading(true);
            const data = await getUsersFromDB();
            setUsers(data);
            console.log(users);
        } catch (error) {
            setLoading(false);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/');
    }
    return <div>
        <h1>Users Page</h1>
        <Button text="Go to main page" action={goToMainPage}></Button>
        <Button text="Get Users" action={getUsers}></Button>
        {loading ? <p>Loading...</p> : ''}
        {users.length == 0 && !loading ? <p>No users</p>: ''}
        {users.map((user, index) => 
            <div key={index}>
                {user.name}  - {user.lastName} - {user.email} - {user.roleDisplayName} - Active: {user.isActive ? 'Yes' : 'No'}
            </div>
        )}
    </div>
}