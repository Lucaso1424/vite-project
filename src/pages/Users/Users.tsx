import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import type { User } from "../../models/User";
import { getUsersFromDB, newUser } from "../../services/userService";
import ArrayCards from "../../components/ArrayCards/ArrayCards";

export default function Users() {
    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/');
    }


    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        setLoading(true);
        try {
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

    const createNewUser = async (user: User) => {
        if (user.name.trim() === '' || user.lastName.trim() === '' || user.email.trim() === '') {
            alert('Please fill all fields');
            return;
        }
        setLoading(true);
        try {
            await newUser(user);
        } catch (error) {
            setLoading(false);
            console.error(error);
        } finally {

            await newUser(user);
            setLoading(false);
        }
    }

    // useEffect() forma parte de React Hooks, se usa para ejecutar código cuando el componente se monta, se actualiza o se desmonta
    // COMO EL ngOnINIT DE ANGULAR
    useEffect(() => {
        getUsers();
    }, []);
    
    return <div>
        <h1>Users Page</h1>
        <Button text="Go to main page" action={goToMainPage}></Button>
        <Button text="Get Users" action={getUsers}></Button>
        {loading ? <p>Loading...</p> : ''}
        <ArrayCards list={users}>
        </ArrayCards>
        <h2>New User</h2>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
            <Button text="Create User" action={() => {
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
                const email = (document.getElementById('email') as HTMLInputElement).value;
                const user: User = {
                    name,
                    lastName,
                    email,
                    roleId: 9,
                    roleDisplayName: 'Customer',
                    isActive: true,
                    trackingState: 'Added'
                };
                createNewUser(user);
            }}></Button>
        </div> 
    </div> 
}