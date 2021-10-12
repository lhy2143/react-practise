import { useParams, useRouteMatch } from 'react-router-dom';

function Blog() {
  const match = useRouteMatch('/blog/:id');
  console.log('match', match);
  const { id } = useParams();
  return <div>Blog {id}</div>;
}

export default Blog;
