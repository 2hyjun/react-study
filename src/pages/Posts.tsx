import * as React from 'react';
import { RouteComponentProps, Route, Link } from 'react-router-dom';
import { Post } from './pages';

const Posts: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
  return (
    <div>
      <h2>Post List</h2>
      <ol>
        <li>
          <Link to={`${match.url}/1`}>Post #1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Post #2</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>Post #3</Link>
        </li>
        <li>
          <Link to={`${match.url}/4`}>Post #4</Link>
        </li>
      </ol>
      <Route exact={true} path={match.url} render={() => <h2>Please select any posts</h2>} />
      <Route path={`${match.url}/:id`} component={Post} />
    </div>
  );
};

export default Posts;
