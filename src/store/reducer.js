let initialState = {
    toys: [],
    currToy: null,
    filterBy: null,
};


export function rootReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_TOYS':
            return { ...state, toys: action.toys }

        case 'SET_TOY':
            return { ...state, currToy: action.toy }

        case 'ADD_TOY':
            return { ...state, toys: [...state.toys, action.toy] }

        case 'UPDATE_TOY':
            const toyIdx = state.toys.findIndex(toy => toy._id === action.toy._id)
            const updatedtoys = state.toys.slice()
            updatedtoys[toyIdx] = { ...action.toy }
            return { ...state, toys: updatedtoys }

        case 'REMOVE_TOY':
            return { ...state, toys: state.toys.filter(toy => toy._id !== action.toyId) }

        case 'SET_FILTER':
            return { ...state, filterBy: { ...action.filterBy } }

        default:
            return state;
    }
}