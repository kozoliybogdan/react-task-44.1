import { memo, useContext } from "react"
import { AppContext } from "../context/AppContext"
import UserListItem from "./UserListItem"

function UserList() {
    const { users } = useContext(AppContext)

    return (
        <div className="card">
            <h2>User list</h2>
            <ul className="list">
                {users.map((u) => (
                    <UserListItem key={u.id} userId={u.id} name={u.name} />
                ))}
            </ul>
        </div>
    )
}

export default memo(UserList)