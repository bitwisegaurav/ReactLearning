import {createSlice, nanoid} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {
                id: "1",
                title: 'Todo 1',
                completed: false,
                editable: false,
            }
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: nanoid(), title: action.payload, completed: false, editable: false});
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, editable: !todo.editable} : todo);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, title: action.payload.title, editable: !todo.editable} : todo);
            console.table(state.todos)
        },
    },
})

export const {addTodo, removeTodo, toggleTodo, editTodo, updateTodo} = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;