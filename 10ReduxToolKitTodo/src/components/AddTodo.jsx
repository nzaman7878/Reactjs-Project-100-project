// Import necessary libraries and functions from React and Redux
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

// Define the 'AddTodo' functional component
function AddTodo() {
    // Initialize state to hold the input value and a function to update it
    const [input, setInput] = useState('');

    // Get the 'dispatch' function from Redux to dispatch actions
    const dispatch = useDispatch();

    // Function to handle the submission of the todo form
    const addTodoHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        dispatch(addTodo(input)); // Dispatch the 'addTodo' action with the input text
        setInput(''); // Clear the input field after adding the todo
    }

    return (
        // Render a form with an input field and a button for adding todos
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            {/* Input field for entering the todo text */}
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)} // Update 'input' state on input change
            />
            {/* Button to submit the todo */}
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    );
}

// Export the 'AddTodo' component for use in other parts of the application
export default AddTodo;
