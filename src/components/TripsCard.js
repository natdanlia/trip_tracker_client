import React from 'react'
import { Link } from 'react-router-dom';

const TripsCard = ({trips, clickHandler}) => {

    const renderTrips = trips.map((trip,idx) => {
      return (
        <Link to={`/trips/${trip.id}`}>
        <div data-trip-id={trip.id} onClick={clickHandler} key={idx}>
          <h1>{trip.city}</h1>

        </div>
        </Link>

      )}


    )
  return (

    <div>
      {renderTrips}
    </div>


  )
}

export default TripsCard


// <img src={`${trip.pictures[0].img_url}`} />
