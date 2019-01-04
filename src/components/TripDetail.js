import React from 'react'
import { Link, Route } from 'react-router-dom';
import Form from './Form'


const TripDetail = ({trip,editClick,editState, details, handleAllChange, updateState, deleteClick, handleSubmit}) => {




  return (
    <div>
        { trip ?
          <div id="cont">
              <h1> {trip.city} </h1>
              <h2>{trip.country}</h2>
            <h4>Duration<p> {trip.start_date} until {trip.end_date}</p> </h4>
              <h4>Staying At {trip.staying_at}</h4>
              <h4>Cost for the Trip:{trip.cost}</h4>
              <h4>Trip Type: {trip.travelling_type}</h4>
              <p id="tnote"> {trip.note} </p>
              <button className="ui button" onClick={()=>editClick(trip)}>Edit Trip</button>
              <Link to='/trips'>
                <button className="ui button" onClick={()=>deleteClick(trip)}>Delete Trip</button>
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
