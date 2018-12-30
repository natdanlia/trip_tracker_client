import React from 'react'
import { Route, Switch } from 'react-router-dom';
import TripsCard from '../components/TripsCard'
import Form from '../components/Form'



const TripContainer =({match,trips,clickHandler, trip}) => (
  <div>
    <Route exact path={match.url} render={ () => {
        return (
          <div>
            <Form />
            <TripsCard clickHandler={clickHandler} trips={trips} trip={trip} />
          </div>
        )
      }
    } />
  </div>
  )



export default TripContainer;
