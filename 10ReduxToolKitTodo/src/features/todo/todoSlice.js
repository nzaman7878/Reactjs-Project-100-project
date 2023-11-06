// Import necessary functions and libraries from Redux Toolkit
import { createSlice, nanoid } from '@reduxjs/toolkit';

// Define the initial state for the 'todo' slice
const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

// Create a 'todoSlice' using the 'createSlice' function
export const todoSlice = createSlice({
    // Specify the name of the slice
    name: 'todo',
    // Set the initial state for this slice
    initialState,
    // Define reducers to specify how the state can be modified
    reducers: {
        // Reducer for adding a new todo
        addTodo: (state, action) => {
            // Generate a unique ID for the new todo using 'nanoid'
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // Add the new todo to the 'todos' array in the state
            state.todos.push(todo)
        },
        // Reducer for removing a todo by its ID
        removeTodo: (state, action) => {
            // Filter out the todo with the specified ID from the 'todos' array
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// Export the action creators for 'addTodo' and 'removeTodo'
export const { addTodo, removeTodo } = todoSlice.actions

// Export the reducer function that will handle state updates for the 'todo' slice
export default todoSlice.reducer
