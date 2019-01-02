import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Image, Card } from 'semantic-ui-react'

const TripsCard = ({trips, clickHandler}) => {




    const renderTrips = trips.map((trip,idx) => {
      return (
      <Card>
          <Card.Content data-trip-id={trip.id} onClick={clickHandler} key={idx}>
            <Link to={`/trips/${trip.id}`}>

                <Image  src={trip.pictures[0].img_url} />
                <Card.Header>{trip.city}</Card.Header>


              </Link>
          </Card.Content>
      </Card>
      )}
    )
  return (

      <Card.Group>
      {renderTrips}
      </Card.Group>


  )
}
// <div data-trip-id={trip.id} onClick={clickHandler} key={idx} >
//   <div >
//     {trip.pictures.length > 0 ? <Image src={trip.pictures[0].img_url} /> : null }
//   </div>
//   <div class="content">
//     <h1 className="header">{trip.city}</h1>
//   </div>
//   <div className="extra content">
//     {trip.country}
//   </div>
// </div>

export default TripsCard
