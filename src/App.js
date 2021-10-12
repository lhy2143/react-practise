import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Counter from './components/Counter';
import TodoDecoration from './components/Todo/TodoDecoration';

function usePageViews() {
    const location = useLocation();
    React.useEffect(() => {
        console.log('location---,', location);
    }, [location]);
}

function App(props) {
    console.log('App-props---', props);
    usePageViews();
    return (
        <>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={React.lazy(() =>
                        import(/* webpackPrefetch:true */ './components/Home')
                    )}
                ></Route>
                <Route path="/about" render={() => <About />}></Route>
                <Route path="/blog/:id">
                    <Blog />
                </Route>
                <Route path="/counter">
                    <Counter></Counter>
                </Route>
                <Route path="/todo">
                    <TodoDecoration></TodoDecoration>
                </Route>
                <Route>
                    <div>404</div>
                </Route>
            </Switch>
        </>
    );
}

export default App;
