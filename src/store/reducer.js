let initialState = {
    toys: [],
    filterBy: null,
};


export function rootReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_TOYS':
            return { ...state, toys: action.toys }

        case 'TOY_ADD':
            return { ...state, toys: [...state.toys, action.toy] }

        case 'TOY_UPDATE':
            const toyIdx = state.toys.findIndex(toy => toy._id === action.toy._id)
            const updatedtoys = state.toys.slice()
            updatedtoys[toyIdx] = { ...action.toy }
            return { ...state, toys: updatedtoys }

        case 'TOY_REMOVE':
            return { ...state, toys: state.toys.filter(toy => toy._id !== action.toyId) }

        case 'SET_FILTER':
            return { ...state, filterBy: { ...action.filterBy } }

        default:
            return state;
    }
}