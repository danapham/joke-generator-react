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
    let button;
    if (showSetup === false && showPunchline === false) {
      button = <button className='btn black-btn' onClick={getSetup}>GET A JOKE</button>;
    } else if (showSetup === true && showPunchline === false) {
      button = <button className='btn black-btn' onClick={getPunch}>GET PUNCHLINE</button>;
    } else if (showSetup === true && showPunchline === true) {
      button = <button className='btn black-btn' onClick={getJoke}>GET A NEW JOKE</button>;
    }

    return (
      <div className="App">
        <img src="https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png" alt="joke generator logo" id="logo"></img>
        {showSetup ? <Setup joke={joke}/> : null}
        {showPunchline ? <Punchline joke={joke}/> : null}
        { button }
      </div>
    );
  }
}

export default App;
