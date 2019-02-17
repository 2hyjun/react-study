import * as React from 'react';
import './App.css';

class App extends React.Component {
  handleClick = () => {
    import('./notify').then(({ default: notify }) => {
      notify();
    });
  };

  public render() {
    return (
      <div className='App'>
        <button onClick={this.handleClick}>ClickMe</button>
      </div>
    );
  }
}

export default App;
