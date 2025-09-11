import type { User } from "../../models/User";

export function UserDetail({user}: {user?: User}) {
    return <div>
        <h1>User Detail</h1>
        <p>{user?.name} {user?.lastName}</p>
        <p>{user?.email}</p>
        <p>{user?.roleDisplayName}</p>
        <p>Active: {user?.isActive ? 'Yes' : 'No'}</p>
    </div>
}