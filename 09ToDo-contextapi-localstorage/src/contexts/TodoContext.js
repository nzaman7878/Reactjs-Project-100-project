import { createContext, useContext } from "react";

// Define a context to manage the state related to todos
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg", // A sample todo message
            completed: false, // Indicates whether the todo is completed
        }
    ],
    addTodo: (todo) => {}, // Function to add a new todo
    updateTodo: (id, todo) => {}, // Function to update an existing todo
    deleteTodo: (id) => {}, // Function to delete a todo
    toggleComplete: (id) => {} // Function to toggle the completeness of a todo
});

// Custom hook to easily access the TodoContext
export const useTodo = () => {
    return useContext(TodoContext);
}

// Component that provides the TodoContext
export const TodoProvider = TodoContext.Provider;
