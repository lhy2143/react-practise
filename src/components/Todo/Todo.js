import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps---,', ownProps);
    const { todos } = state;
    return { todos };
};
const mapDispatchToProps = (dispatch) => ({
    remove: () => dispatch({ type: 'REMOVE_TODO' }),
    add: () =>
        dispatch({
            type: 'ADD_TODO',
            payload: Math.random(),
            otherParams: { name: 'lhy', age: 18 }
        })
});
function Todo(props) {
    const { todos, remove, add } = props;
    return (
        <>
            <button
                onClick={() => {
                    remove();
                }}
            >
                remove Todo
            </button>
            <button
                onClick={() => {
                    add();
                }}
            >
                add Todo
            </button>
            <div>
                Todo:
                {todos.todo.map((item) => (
                    <div key={item}>{item}</div>
                ))}
            </div>
            <div>
                Done:
                {todos.done.map((item) => (
                    <div key={item}>{item}</div>
                ))}
            </div>
        </>
    );
}

Todo.propTypes = {
    todos: PropTypes.object,
    remove: PropTypes.func,
    add: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
