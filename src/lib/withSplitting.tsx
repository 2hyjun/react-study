import * as React from 'react';

interface IState {
  Splitted: null | React.FunctionComponent;
}

const withSplitting = (getComponent: () => Promise<typeof import('pages/Home')>) => {
  return class extends React.Component<any, IState> {
    constructor(props: any) {
      super(props);

      this.state = {
        Splitted: null,
      };

      getComponent().then(({ default: Splitted }) => {
        this.setState({
          Splitted,
        });
      });
    }

    render() {
      const { Splitted } = this.state;
      if (!Splitted) {
        return null;
      }
      return <Splitted {...this.props} />;
    }
  };
};

export default withSplitting;
