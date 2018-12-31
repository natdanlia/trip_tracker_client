import React from 'react'
import { Link, Route } from 'react-router-dom';
import Form from './Form'


const TripDetail = ({trip,editClick,editState, details, handleAllChange, updateState, handleSubmit}) => {


  trip && updateState(trip)

  return (
    <div>
        { trip ?
          <div>
              <h2> {trip.city} </h2>
              <h4>{trip.country}</h4>
              <p> {trip.note} </p>
              <p>Duration: {trip.start_date} until {trip.end_date}</p>
              <p>Staying At {trip.staying_at}</p>
              <p>Cost for the Trip{trip.cost}</p>
              <p>Trip Type: {trip.travelling_type}</p>
              <button onClick={editClick}>Edit Trip</button>


              { editState ? <Form city={details.city} country={details.country} cost={details.cost} note={details.note}    handleAllChange={handleAllChange} handleSubmit={handleSubmit}/> : null}


              {trip.pictures.map(pic => <img src={pic.img_url} />)}



          </div> : console.log("fetching") }
    </div>
  )
}

export default TripDetail;
