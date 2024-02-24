import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvidor from "./context/UserContextProvidor";

function App() {
  return (
    <UserContextProvidor>
      <h1>Chai aur react</h1>
      <Login />
      <Profile />
    </UserContextProvidor>
  );
}

export default App;
