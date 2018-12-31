import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from '../components/About';
import Form from '../components/Form';
import Profile from '../components/Profile'
import NavBar from './NavBar'
import TripContainer from './TripContainer'
import TripDetail from '../components/TripDetail'
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
      randNum: 10
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

  handleAllChange = event => {
    let targetName = event.target.name
    let targetValue = event.target.value
    this.setState({
      [targetName]: targetValue
    })
  }

  updateState = (object) => {

    let compareObj = {
      city: this.state.city,
      country: this.state.country,
      cost: this.state.cost,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      staying_at: this.state.staying_at,
      travelling_type: this.state.travelling_type,
      note: this.state.note,
      randNum: this.state.randNum
    }
    console.log(object)
    console.log(compareObj)
    if (compareObj.randNum !== object.randNum){
      let randomNumber = Math.random() * Math.random() * Math.random()
      this.setState({
        city: object.city,
        country: object.country,
        cost: object.cost,
        start_date: object.start_date,
        end_date: object.end_date,
        staying_at: object.staying_at,
        travelling_type: object.travelling_type,
        note: object.note,
        randNum: randomNumber
      })
    }



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
    ).then(res => res.json()).then(data => this.setState({
      trips: [...this.state.trips, data]
    }))
  }

  handleEditSubmit = (event) => {
    event.preventDefault()
    event.persist()

    console.log(event)
    fetch('http://localhost:3000/destinations/11', {
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
    )
  }



  editClick = () => {
    this.setState({
      tripEdit: !this.state.tripEdit
    })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route  path={`/trips/:id`} render={props => {
                let tripId = parseInt(props.match.params.id)
                return <TripDetail handleSubmit={this.handleEditSubmit} updateState={this.updateState} handleAllChange={this.handleAllChange} details={this.state} editState={this.state.tripEdit} editClick={this.editClick} trip={this.state.trips.find(p => p.id === tripId)} /> } } />

            <Route  path='/trips' render={(props) =>  <TripContainer  handleSubmit={this.handleSubmit} handleAllChange={this.handleAllChange} trip ={this.state.selectedTrip} clickHandler={this.onSelectTrip} {...props} trips={this.state.trips}/>} />

            <Route path='/about' component={About} />
            <Route path='/profile' component={Profile} />
          </Switch>
         </div>
      </Router>

    );
  }
}

export default App;
