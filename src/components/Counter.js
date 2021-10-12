import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter(props) {
    console.log('Counter-props---,', props);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    -
                </button>
            </div>
        </div>
    );
}
