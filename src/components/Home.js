import { useHistory } from 'react-router-dom';
import { random } from '../utils/math';

function Home() {
    const history = useHistory();

    function viewAbout() {
        history.push('/about');
    }

    function viewBlog() {
        history.push(`/blog/${random(1, 10)}`);
    }

    function viewCounter() {
        history.push('/counter');
    }

    function viewTodo() {
        history.push('/todo');
    }

    return (
        <>
            <button type="button" onClick={viewAbout}>
                Go About
            </button>
            <button type="button" onClick={viewBlog}>
                View Blog
            </button>
            <button type="button" onClick={viewCounter}>
                View Counter
            </button>
            <button type="button" onClick={viewTodo}>
                View Todo
            </button>
        </>
    );
}

export default Home;
