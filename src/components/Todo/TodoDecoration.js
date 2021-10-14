import React from 'react';
import PropTypes from 'prop-types';
import connect from './connect';

@connect
export default class TodoDecoration extends React.Component {
    render() {
        return (
            <>
                <button onClick={this.props.remove}>remove Todo</button>
                <button
                    onClick={() => {
                        this.props.add();
                    }}
                >
                    add Todo
                </button>
                <div>
                    Todo:
                    {this.props.todos.todo.map((item) => (
                        <div key={item}>{item}</div>
                    ))}
                </div>
                <div>
                    Done:
                    {this.props.todos.done.map((item) => (
                        <div key={item}>{item}</div>
                    ))}
                </div>
            </>
        );
    }
}

TodoDecoration.propTypes = {
    remove: PropTypes.func,
    add: PropTypes.func,
    todos: PropTypes.object
};
