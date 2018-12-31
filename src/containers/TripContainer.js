import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import TripsCard from '../components/TripsCard'
import Form from '../components/Form'

class TripContainer extends Component {


  render(){
    return <div>
    <Route exact path={this.props.match.url} render={ () => {
        return (
          <div>

            <Form handleSubmit={this.props.handleSubmit}  handleAllChange={this.props.handleAllChange}/>

            <TripsCard clickHandler={this.props.clickHandler} trips={this.props.trips} trip={this.props.trip} />
          </div>
        )
      }
    } />
  </div>
  }
}

export default TripContainer;
