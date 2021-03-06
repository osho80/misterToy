import toyService from '../services/toyService.js'

// refactor to toy


// THUNK

export function loadToys(filterBy = null, sortBy = null) {
    return (dispatch)=> {
        toyService.query(filterBy, sortBy)
            .then(toys=> {
                dispatch({ type: 'SET_TOYS', toys})
            })
    } 
}

export function loadToy(id) {
    return dispatch => {
        toyService.getById(id)
            .then(toy=> {
                dispatch({ type: 'SET_TOY', toy })
            })
    }
}

export function removeToy(toyId) {
    return dispatch => {
        toyService.remove(toyId)
            .then(()=> dispatch({ type: 'REMOVE_TOY', toyId}))
    }
}

export function saveToy(toy){
    return dispatch => {
        const type = toy._id ? 'UPDATE_TOY' : 'ADD_TOY';
        toyService.save(toy)
            .then(savedToy => dispatch({ type, toy: savedToy}))
    }
}
    
// export function loadUser() {
//     return (dispatch) => {
//         userService.query()
//         .then(user => {
//             dispatch(setUser(user))
//         })
//     }
// }
// export function updateUser(user){
//     return (dispatch)=>{
//         userService.post(user)
//         .then(user=>{
//             dispatch({type:'USER_UPDATE',user})
//         })
//     }
// }

// export function toggleDone(todo) {
//     todo.isDone=!todo.isDone
//     return saveTodo(todo)
// }
// export function saveTodo(todo) {
//     return (dispatch) => {
//         const actionType = (todo._id) ? 'TODO_UPDATE' : 'TODO_ADD';
//         todoService.post(todo)
//         .then((todo) => {
//             dispatch({ type: actionType, todo })
//         })
//     }
// }

// export function setFilterBy(filterBy) {
//         return (dispatch) => dispatch(setFilter(filterBy))
// }
// // THUNK
// export function removeTodo(todoId) {
//     return (dispatch) => {
//         todoService.remove(todoId)
//             .then(() => {
//                 dispatch({ type: 'TODO_REMOVE', todoId })
//             })
//         }
//     }

    
// function setTodos(todos) {
//         return {
//             type: 'SET_TODOS',
//             todos
//         }
// }

// function setUser(user) {
//         return {
//             type: 'SET_USER',
//             user
//         }
// }
    
// function setFilter(filterBy) {
//         return {
//             type: 'SET_FILTER',
//             filterBy
//         }
// }
    
    
    