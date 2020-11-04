import React from 'react';
import jokesData from '../../helpers/data/jokesData';
import Setup from '../Setup';
// import Punchline from '../Punchline';

class App extends React.Component {
  state = {
    joke: {},
  }

  componentDidMount() {
    jokesData.getJoke().then((res) => {
      this.setState({
        joke: res,
      });
    });
  }

  render() {
    const { joke } = this.state;
    const renderSetupToDom = () => <Setup joke={joke}/>;
    const changeState = () => jokesData.getJoke().then((res) => {
      this.setState({
        joke: res,
      });
    });

    return (
      <div className="App">
        {renderSetupToDom()}
        <button className='btn btn-success' onClick={changeState}>GET A JOKE</button>
      </div>
    );
  }
}

export default App;
