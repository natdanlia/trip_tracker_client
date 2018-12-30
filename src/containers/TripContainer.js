import React from 'react'
import { Route, Switch } from 'react-router-dom';
import TripsCard from '../components/TripsCard'



const TripContainer =({match,trips,clickHandler, trip}) => (
  <div>
    
      <Route exact path={match.url} render={ () => <TripsCard clickHandler={clickHandler} trips={trips} trip={trip}/> } />
  </div>

  )



export default TripContainer;
