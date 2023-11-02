import React from "react";
import UserContext from "./UserContext";

// Define a component that provides a user context.
const UserContextProvider = ({ children }) => {
    // Create a piece of state 'user' and a function 'setUser' to update it.
    const [user, setUser] = React.useState(null);

    return (
        // Render a UserContext.Provider component to provide the context.
        <UserContext.Provider value={{ user, setUser }}>
            {/* Render the child components (passed as 'children' prop) within the context provider. */}
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
