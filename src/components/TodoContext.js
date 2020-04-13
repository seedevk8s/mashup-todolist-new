import React, { useReducer, createContext, useContext, useRef } from 'react';

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

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// 커스텀 Hook들
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }

    return context;
}