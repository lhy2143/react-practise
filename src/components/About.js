import { useHistory } from 'react-router-dom';

function About() {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default About;
