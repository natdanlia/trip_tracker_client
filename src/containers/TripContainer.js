import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TripsCard from '../components/TripsCard'
import TripDetail from '../components/TripDetail'


const TripContainer =({match,trips}) => (
  <div>
    <Route exact path={match.url} render={ () => <TripsCard trips={trips} /> } />
    <Route path={`${match.url}/:tripsId`} render={routerProps => <TripDetail {...routerProps} trips={trips} /> } />

  </div>

  )



export default TripContainer;
