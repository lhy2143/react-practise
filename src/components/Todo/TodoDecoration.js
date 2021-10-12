import React from 'react';
import PropTypes from 'prop-types';
import connect from './connect';

@connect
export default class TodoDecoration extends React.Component {
    render() {
        console.log(111, this.props);
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
                    {this.props.todo.map((item) => (
                        <div key={item}>{item}</div>
                    ))}
                </div>
                <div>
                    Done:
                    {this.props.done.map((item) => (
                        <div key={item}>{item}</div>
                    ))}
                </div>
            </>
        );
    }
}

TodoDecoration.propTypes = {
    todo: PropTypes.object,
    remove: PropTypes.func,
    add: PropTypes.func,
    done: PropTypes.object
};
