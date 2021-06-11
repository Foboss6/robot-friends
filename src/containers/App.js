import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
      buttonClick: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users)=>this.setState({robots: users}));
  }

  onInputChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render (){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return !this.state.robots.length ?
    (
      <div className='tc'>
        <h1 className='header'>LOADING...</h1>
      </div> 
    )
    :
    (
      <div>
      <div className='tc'>
        <h1 className='header'>ROBOFRIENDS</h1>
        <SearchBox inputChange={this.onInputChange}/>
        {/* <Button onPress={this.onButtonClick}/> */}
        <p className='i numbers'>
          Totoal robots number: {this.state.robots.length}, Found robots number: {filteredRobots.length}.
        </p>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
      </div>
    );
  }
}

export default App;