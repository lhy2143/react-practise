export default function (state = { todo: [1, 2, 3], done: [4, 5, 6] }, action) {
    switch (action.type) {
        case 'REMOVE_TODO':
            state.done.push(state.todo.shift());
            return { ...state };
        case 'ADD_TODO':
            console.log('otherParams---', action.otherParams);
            state.todo.push(action.payload);
            return { ...state };
        default:
            return { ...state };
    }
}
