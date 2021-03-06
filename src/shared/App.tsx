import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact={true} path='/' component={Home} />
        <Switch>
          <Route path='/about/:name' component={About} />
          <Route path='/about' component={About} />
        </Switch>
        <Route path='/posts' component={Posts} />
      </div>
    );
  }
}
