import { memo, useContext } from "react"
import { AppContext } from "../context/AppContext"

function UserProfile() {
    const { users, selectedUserId } = useContext(AppContext)
    const user = users.find((u) => u.id === selectedUserId)

    return (
        <div className="card">
            <h2>User profile</h2>

            {user ? (
                <>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </>
            ) : (
                <p>Користувач не вибраний</p>
            )}
        </div>
    )
}

export default memo(UserProfile)