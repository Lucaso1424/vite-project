import type { User } from "../../models/User"

export function ArrayCards({list}: {list: User[]}) {
    return <div>
        {   
        list.filter(item => item != undefined).map((item, index) => 
            <div key={index}>
                {item.name}
                <button onClick={() => alert(`User: ${item.name}, ${item.lastName}, Email: ${item.email}, - Active: ${item.isActive == true ? 'Yes' : 'No'}`)}>Show Info</button>
            </div>)
        }
        <p>{list.length > 0 ? 'Total users: ' + list.length : 'No users'}</p>
    </div>
}

export default ArrayCards