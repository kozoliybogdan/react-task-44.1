import { createContext, useMemo, useState } from "react"

const defaultValue = {
    users: [],
    selectedUserId: null,
    selectUser: () => { },
}

export const AppContext = createContext(defaultValue)

export function AppProvider({ children }) {
    const [users] = useState([
        { id: 1, name: "Анна", email: "anna@example.com" },
        { id: 2, name: "Богдан", email: "bogdan@example.com" },
        { id: 3, name: "Олександр", email: "olex@example.com" },
    ])

    const [selectedUserId, setSelectedUserId] = useState(1)

    const value = useMemo(() => {
        return {
            users,
            selectedUserId,
            selectUser: setSelectedUserId,
        }
    }, [users, selectedUserId])

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}