import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from '../components/About';
import Form from '../components/Form';
import TripContainer from './TripContainer'
import TripDetail from '../components/TripDetail'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(){
    super()
    this.state={
      trips: [],
      selectedTrip: null,
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    .then(data => this.setState({trips: data}))
  }

  onSelectTrip = (event) => {
    let tripId = event.currentTarget.dataset.tripId

    let selectedTrip = this.state.trips.find(trip => trip.id == tripId)
    this.setState({
      selectedTrip: selectedTrip
    })

  }


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route  path={`/trips/:id`} render={props => {
                let tripId = parseInt(props.match.params.id)
                return <TripDetail trip={this.state.trips.find(p => p.id === tripId)} /> } } />
            <Route  path='/trips' render={(routerProps) =>  <TripContainer  trip ={this.state.selectedTrip} clickHandler={this.onSelectTrip} {...routerProps} trips={this.state.trips}/>} />

            <Route path='/about' component={About} />
          </Switch>
         </div>
      </Router>

    );
  }
}

export default App;
