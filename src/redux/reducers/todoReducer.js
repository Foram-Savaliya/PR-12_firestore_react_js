let initialState = {
    todoList : [],
    err : null
}

const todoReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state, 
                todoList : [...state.todoList, action.payload]
            }

        case 'adderr' :
            return {
                ...state,
                err : action.payload
            }

        case 'VIEW_TODO' :
            return {
                ...state,
                todoList : action.payload
            }

        case 'deleteuser' : 
            return{
                ...state,
            todoList : state.todoList.filter((todo) => todo.id !== action.payload)
            }

        case 'deleteErr' : 
            return{
                ...state,
                err : action.payload
            }

        default :
            return state;
    }
}

export default todoReducer