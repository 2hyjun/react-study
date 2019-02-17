import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IMatchingParams {
  id: string;
}

const Post: React.FunctionComponent<RouteComponentProps<IMatchingParams>> = ({ match }) => {
  return <div>Post #{match.params.id}</div>;
};

export default Post;
