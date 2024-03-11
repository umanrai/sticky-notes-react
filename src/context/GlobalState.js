import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    notes : [
        // { id: 1, text: 'Flower'},
        // { id: 2, text: 'Salary'},
        // { id: 3, text: 'Book' },
        // { id: 4, text: '' },
    ]
};

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Action
    function addNote(note) {
        dispatch({
            type: 'ADD_NOTE',
            payload: note
        });
    }

    return (<GlobalContext.Provider value={{ 
            notes: state.notes,
            addNote
        }}>
        {children}
    </GlobalContext.Provider>);
};
