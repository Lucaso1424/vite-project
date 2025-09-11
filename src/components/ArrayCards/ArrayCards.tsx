import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { User } from "../../models/User"
import { Button } from "../Button/Button"

export function ArrayCards({list}: {list: User[]}) {
    const navigate = useNavigate();

    const goToDetail = (user: User) => {
        setSelectedUser(user);
        navigate('/userDetail', { state: { user } });
    }
    const [user, setSelectedUser] = useState<User | undefined>(undefined);
    return <div>
        {   
        list.filter(item => item != undefined).map((item, index) => 
            <div key={index}>
                {item.name}
                <Button action={() => goToDetail(item)} text="Go to detail"></Button>
                <button onClick={() => alert(`User: ${item.name}, ${item.lastName}, Email: ${item.email}, - Active: ${item.isActive == true ? 'Yes' : 'No'}`)}>Show Info</button>
            </div>)
        }
        <p>{list.length > 0 ? 'Total users: ' + list.length : 'No users'}</p>
    </div>
}

export default ArrayCards