export default function (state = { value: 0 }, action) {
    switch (action.type) {
        case 'increment':
            state.value++;
            return { ...state };
        case 'decrement':
            state.value--;
            return { ...state };
        default:
            return { ...state };
    }
}
