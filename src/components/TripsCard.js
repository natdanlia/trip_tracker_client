import React from 'react'
import { Link } from 'react-router-dom';

const TripsCard = ({trips, clickHandler}) => {

    const renderTrips = trips.map((trip,idx) => {
      return (

        <Link className="column" to={`/trips/${trip.id}`}>
          <div className="ui fluid card" data-trip-id={trip.id} onClick={clickHandler} key={idx} >
            <div className="image">
              {trip.pictures.length > 0 ? <img src={trip.pictures[0].img_url} /> : null }
            </div>
            <div className="content">
              <a className="header">{trip.city}</a>
            </div>
            <div className="extra content">
              {trip.country}
            </div>
          </div>
        </Link>

      )}
    )
  return (

    <div className="ui four column grid" >
      {renderTrips}
    </div>


  )
}

export default TripsCard
