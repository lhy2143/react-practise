import { connect } from 'react-redux';

export default connect(
    (state) => state,
    (dispatch) => ({
        remove: () => dispatch({ type: 'REMOVE_TODO' }),
        add: () =>
            dispatch({
                type: 'ADD_TODO',
                payload: Math.random(),
                otherParams: { name: 'lhy', age: 18 }
            })
    })
);
