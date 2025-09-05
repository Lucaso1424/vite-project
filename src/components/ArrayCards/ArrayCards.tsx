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
        <p>Total items: {list.length ?? 0}</p>
    </div>
}

export default ArrayCards