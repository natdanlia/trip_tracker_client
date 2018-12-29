import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from '../components/About';
import Form from '../components/Form';
import TripContainer from './TripContainer'

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(){
    super()
    this.state={
      trips: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    .then(data => this.setState({trips: data}))
  }


  render() {
    return (
      <Router>
        <div>
          <Route exact path='/about' component={About} />
          <Route exact path='/trips' render={(routerProps) =>  <TripContainer {...routerProps} trips={this.state.trips}/>} />
         </div>
      </Router>

    );
  }
}

export default App;
