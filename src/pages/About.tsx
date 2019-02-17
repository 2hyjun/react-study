import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IMatchingParams {
  name: string;
}

const About: React.FunctionComponent<RouteComponentProps<IMatchingParams>> = ({ match }) => {
  return <div>About {match.params.name}</div>;
};

export default About;
