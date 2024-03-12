export default (state, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return {
                ...state,
                notes: action.payload.notes
            }

        case 'ADD_NOTE':
            return {
                ...state, // Spread operators
                notes: [action.payload, ...state.notes]
            }

        case 'DELETE_NOTE':
            return {
                ...state, // Spread operators
                notes: state.notes.filter(note => note.id !== action.payload)
            }

        case 'UPDATE_NOTE':
            return {
                ...state,
                notes: state.notes.map(note => {
                    // find the note using payload note id
                    if (note.id === action.payload.id) {
                        return { ...note, text: action.payload.text }
                    }

                    return note
                })
            }

        default:
            return state;
    }
}