import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    notes : [
      
    ]
};

const savedState = JSON.parse(localStorage.getItem('notesState')) || initialState;

export const GlobalContext = createContext(savedState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, savedState);

    // Load state from localStorage on component mount (Component started)
    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem('notesState'));
        if (savedState) {
            dispatch({ type: 'SET_STATE', payload: savedState });
        }
    }, []);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('notesState', JSON.stringify(state));
    }, [state]);

    // Action
    function addNote(note) {
        dispatch({
            type: 'ADD_NOTE',
            payload: note
        });
    }

    function deleteNote(id) {
        dispatch({
            type: 'DELETE_NOTE',
            payload: id
        });
    }

    function updateNote(note) {
        dispatch({
            type: 'UPDATE_NOTE',
            payload: note
        });
    }

    return (<GlobalContext.Provider value={{ 
            notes: state.notes,
            addNote,
            deleteNote,
            updateNote
        }}>
        {children}
    </GlobalContext.Provider>);
};
