import { memo, useContext } from "react"
import { AppContext } from "../context/AppContext"

function UserListItemButton({ userId }) {
    const { selectUser } = useContext(AppContext)

    return (
        <button type="button" onClick={() => selectUser(userId)}>
            Select
        </button>
    )
}

export default memo(UserListItemButton)