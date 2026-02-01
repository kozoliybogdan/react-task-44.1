import UserList from "./components/UserList"
import UserProfile from "./components/UserProfile"
import "./index.css"

export default function App() {
  return (
    <div className="app">
      <h1>Task 44.1 — React Context</h1>
      <p className="muted">
        Дані передаються через Context без прокидування props.
      </p>

      <UserList />
      <UserProfile />
    </div>
  )
}