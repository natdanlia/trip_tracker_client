import React from 'react'
import { Link } from 'react-router-dom';


const TripDetail = ({trip}) => {

  return (
    <div>
        { trip ?
          <div>
              <h2> {trip.city} </h2>
              <p> {trip.note} </p>
              {trip.pictures.map(pic => <img src={`${pic.img_url}`} />)}

          }
          </div> : console.log("fetching") }
    </div>
  )
}

export default TripDetail;
