import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    // Set up state for the username and password fields.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Access the 'setUser' function from the UserContext using the 'useContext' hook.
    const { setUser } = useContext(UserContext);

    // Define a function to handle form submission.
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call 'setUser' to update the user context with the entered username and password.
        setUser({ username, password });
    }

    return (
        <div>
            <h2>Login</h2>
            {/* Input field for username with an 'onChange' event handler */}
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
            />
            {" "}
            {/* Input field for password with an 'onChange' event handler */}
            <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
            />
            {/* Button to submit the form with an 'onClick' event handler */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
