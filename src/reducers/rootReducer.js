const initState = {
    posts: [
        { id: 1, title: 'aaa' },
        { id: 2, title: 'bbb' },
        { id: 3, title: 'ccc' }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        return {
            ...state,
            posts: state.posts.filter(c => c.id != action.id)
        }
    }
    if (action.type === 'ADD_POST') {
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }
    return state
}

export default rootReducer;