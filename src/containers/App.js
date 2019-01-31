import React, { Component } from 'react';

import About from '../components/About';
import Form from '../components/Form';
import Profile from '../components/Profile'
import NavBar from './NavBar'
import TripContainer from './TripContainer'
import TripDetail from '../components/TripDetail'
import 'semantic-ui-css/semantic.min.css'
import '../index.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor(){
    super()
    this.state={
      trips: [],
      selectedTrip: null,
      user_id: 1,
      city: '',
      country: '',
      cost: '',
      start_date: '',
      end_date: '',
      staying_at: '',
      travelling_type: '',
      note: '',
      tripEdit: false,

    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => this.setState({trips: data}) )
  }

  onSelectTrip = (event) => {
    let tripId = event.currentTarget.dataset.tripId

    let selectedTrip = this.state.trips.find(trip => trip.id == tripId)
    this.setState({
      selectedTrip: selectedTrip
    })

  }

  handleAllChange = event => {

    let targetName = event.target.name
    let targetValue = event.target.value
    this.setState({
      [targetName]: targetValue
    })
  }




  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/destinations', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        cost: this.state.cost,
        user_id: 1,
        city: this.state.city,
        country: this.state.country,
        staying_at: this.state.staying_at,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        travelling_type: this.state.travelling_type,
        note: this.state.note
      })
      }
    ).then(res => res.json())
    .then(data => this.setState({
      trips: [...this.state.trips, data],
      city: '',
      country: '',
      cost: '',
      start_date: '',
      end_date: '',
      staying_at: '',
      travelling_type: '',
      note: '',
    }))
  }

  handleEditSubmit = (event) => {
    event.preventDefault()
    event.persist()

    let tripId = event.target.baseURI.split("/").slice(-1).toString()
    console.log(tripId)


    fetch(`http://localhost:3000/destinations/${tripId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        cost: this.state.cost,
        user_id: 1,
        city: this.state.city,
        country: this.state.country,
        staying_at: this.state.staying_at,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        travelling_type: this.state.travelling_type,
        note: this.state.note
      })
      }
    ).then(res => res.json()).then( data => {
      let filterd = this.state.trips.filter(t => t.id !== data.id)
      let filter_data = [...filterd, data]
      debugger;
      this.setState({
        trips: filter_data,
        tripEdit: false,
        city: '',
        country: '',
        cost: '',
        start_date: '',
        end_date: '',
        staying_at: '',
        travelling_type: '',
        note: ''
      })
    })


  }



  editClick = (trip) => {


    console.log(trip)
    this.setState({
      tripEdit: !this.state.tripEdit,
      cost: trip.cost,
      user_id: 1,
      city: trip.city,
      country: trip.country,
      staying_at: trip.staying_at,
      start_date: trip.start_date,
      end_date: trip.end_date,
      travelling_type: trip.travelling_type,
      note: trip.note

    })
  }

  deleteClick = (trip) => {
    fetch(`http://localhost:3000/destinations/${trip.id}`, {
    method: 'DELETE'
  }).then(res => res.json())
    .then(res => this.setState({
      trips: this.state.trips.filter(t => t.id !== res.id)
    }))
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <NavBar id="nav"/>
          <Switch>
            <Route  path={`/trips/:id`} render={props => {
                let tripId = parseInt(props.match.params.id)
                return <TripDetail handleSubmit={this.handleEditSubmit} updateState={this.updateState} handleAllChange={this.handleAllChange} details={this.state} editState={this.state.tripEdit} editClick={this.editClick} deleteClick={this.deleteClick} trip={this.state.trips.find(p => p.id === tripId)}  /> } } />

            <Route  path='/trips' render={(props) =>  <TripContainer handleSubmit={this.handleSubmit} handleAllChange={this.handleAllChange} trip ={this.state.selectedTrip} clickHandler={this.onSelectTrip} {...props} trips={this.state.trips}/>} />

            <Route path='/about' component={About} />
            <Route path='/profile' component={Profile} />
          </Switch>
         </div>
      </Router>

    );
  }
}

export default App;
