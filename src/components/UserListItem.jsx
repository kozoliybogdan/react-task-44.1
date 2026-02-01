import { memo, useContext } from "react"
import { AppContext } from "../context/AppContext"
import UserListItemButton from "./UserListItemButton"

function UserListItem({ userId, name }) {
    const { selectedUserId } = useContext(AppContext)
    const isActive = selectedUserId === userId

    return (
        <li className="list-item">
            <span className={isActive ? "active" : ""}>{name}</span>
            <UserListItemButton userId={userId} />
        </li>
    )
}

export default memo(UserListItem)