import * as React from 'react';
import './App.css';
import withSplitting from './withSplitting';

const SplitMe = withSplitting(() => import('./SplitMe'));

interface IState {
  visible: boolean;
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleClick = () => {
    this.setState({
      visible: true,
    });
  };

  public render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {visible && <SplitMe />}
      </div>
    );
  }
}

export default App;
