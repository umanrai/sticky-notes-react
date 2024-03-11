export default (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state, // Spread operators
                notes: [action.payload, ...state.notes]
            }

        default:
            return state;
    }
}