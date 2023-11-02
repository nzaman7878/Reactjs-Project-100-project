import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    // Wrap the entire application with 'UserContextProvider' to provide the user context.
    <UserContextProvider>
      <h1>ContextAPI example</h1>
      {/* Render the Login component, which can consume the user context. */}
      <Login />
      {/* Render the Profile component, which can also consume the user context. */}
      <Profile />
    </UserContextProvider>
  );
}

export default App;
