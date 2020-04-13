import React, { useReducer } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 준비',
        done: true
    },
    {
        id: 2,
        text: '자바 훈련',
        done: true
    },
    {
        id: 3,
        text: '리액트 훈련',
        done: false
    },
    {
        id: 1,
        text: 'SQL 훈련',
        done: false
    }            
];

function todoReducer(state, action) {
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => 
                    todo.id === action.id ? {...todo,  done: !todo.done } : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandle action type: ${action.type}`);        
    }
}

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    return children;
}