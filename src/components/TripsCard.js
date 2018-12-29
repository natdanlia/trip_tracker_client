import React from 'react'
import PropTypes from 'prop-types'

const TripsCard = ({trips}) => {
    const renderTrips = trips.map((trip,idx) => {
      return (
        <div key={idx}>
          <h1>{trip.city}</h1>
          <img src={`${trip.pictures[0].img_url}`} />
        </div> )}
    )
  return (
    <div>
      {renderTrips}
    </div>
  )
}

export default TripsCard
