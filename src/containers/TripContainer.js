import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import TripsCard from '../components/TripsCard'
import Form from '../components/Form'

class TripContainer extends Component {
  constructor(){
    super()
    this.state={
      user_id: 1,
      city: '',
      country: '',
      cost: '',
      start_date: '',
      end_date: '',
      staying_at: '',
      travelling_type: '',
      note: ''
    }
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
  )
}

  render(){
    return <div>
    <Route exact path={this.props.match.url} render={ () => {
        return (
          <div>

            <Form handleSubmit={this.handleSubmit}  handleAllChange={this.handleAllChange}/>

            <TripsCard clickHandler={this.props.clickHandler} trips={this.props.trips} trip={this.props.trip} />
          </div>
        )
      }
    } />
  </div>
  }
}

export default TripContainer;
