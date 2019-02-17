import * as React from 'react';
import './App.css';

interface IState {
  SplitMe: null | React.FunctionComponent;
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      SplitMe: null,
    };
  }

  handleClick = () => {
    import('src/SplitMe').then(({ default: SplitMe }) => {
      this.setState({
        SplitMe,
      });
    });
  };

  public render() {
    const { SplitMe } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {SplitMe && <SplitMe />}
      </div>
    );
  }
}

export default App;
