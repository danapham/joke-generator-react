import React from 'react';
import jokesData from '../../helpers/data/jokesData';
import Punchline from '../Punchline';
import Setup from '../Setup';

class App extends React.Component {
  state = {
    joke: {},
    showSetup: false,
    showPunchline: false,
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
    const { showSetup } = this.state;
    const { showPunchline } = this.state;
    const getJoke = () => jokesData.getJoke().then((res) => {
      this.setState({
        joke: res,
        showSetup: false,
        showPunchline: false,
      });
    });
    const getSetup = () => this.setState({
      showSetup: true,
    });
    const getPunch = () => this.setState({
      showPunchline: true,
    });

    return (
      <div className="App">
        {showSetup ? <Setup joke={joke}/> : null}
        {showPunchline ? <Punchline joke={joke}/> : null}
        <button className='btn btn-success' onClick={getSetup}>GET A JOKE</button>
        <button className='btn btn-success' onClick={getPunch}>GET PUNCHLINE</button>
        <button className='btn btn-success' onClick={getJoke}>GET A NEW JOKE</button>
      </div>
    );
  }
}

export default App;
