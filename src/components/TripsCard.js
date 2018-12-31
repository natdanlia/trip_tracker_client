import React from 'react'
import { Link } from 'react-router-dom';

const TripsCard = ({trips, clickHandler}) => {

    const renderTrips = trips.map((trip,idx) => {
      return (
        <Link to={`/trips/${trip.id}`}>
        <div data-trip-id={trip.id} onClick={clickHandler} key={idx} class="ui card">
          <div class="image">
            {trip.pictures.length > 0 ? <img src={trip.pictures[0].img_url} /> : null }
          </div>
          <div class="content">
            <a class="header">{trip.city}</a>
            <div class="description">
              {trip.note}
            </div>
          </div>
          <div class="extra content">
            {trip.country}
          </div>
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
