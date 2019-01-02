import React from 'react'
import { Link, Route } from 'react-router-dom';
import Form from './Form'


const TripDetail = ({trip,editClick,editState, details, handleAllChange, updateState, deleteClick, handleSubmit}) => {




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
              <button  onClick={()=>editClick(trip)}>Edit Trip</button>
              <Link to='/trips'>
                <button  onClick={()=>deleteClick(trip)}>Delete Trip</button>
              </Link>

              { editState ? <Form city={details.city} country={details.country} cost={details.cost} note={details.note} staying={details.staying_at} start={details.start_date} end={details.end_date} travelling={details.travelling_type} handleAllChange={handleAllChange} handleSubmit={handleSubmit}/> : null}



              <div class="ui four column grid">

                      {trip.pictures.map(pic => (
                        <div class="four wide column">
                          <div class="ui fluid card">
                            <div class="image">
                        <img src={pic.img_url} />
                        </div>
                      </div>
                    </div>

                      )

                      )}


              </div>



          </div> : console.log("fetching") }


    </div>
  )
}

export default TripDetail;
