import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    // Create a local state variable 'todo' and a function 'setTodo' to manage the input field's value
    const [todo, setTodo] = useState("");

    // Use the 'useTodo' custom hook to access the 'addTodo' function from the TodoContext
    const { addTodo } = useTodo();

    // Define a function 'add' that will be called when the form is submitted
    const add = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Check if the 'todo' input is empty and return if it is
        if (!todo) return;

        // Call the 'addTodo' function from the context, passing a new todo object
        addTodo({ todo, completed: false });

        // Clear the input field by setting 'todo' to an empty string
        setTodo("");
    }

    return (
        // Render a form element with an input field and an "Add" button
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} // Update 'todo' state as the input changes
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
