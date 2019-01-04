import React from 'react'
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(){
    super()
    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => this.setState({profile: data}))
  }
  render () {
    return (

      (this.state.profile) ? <div className="container">
        <div class="image">
          <img src={`${this.state.profile[0].img_url}`} />
        </div>
        <h1>{this.state.profile[0].name}</h1>
        <h3>Age: {this.state.profile[0].age}</h3>
        <h3>User Name: {this.state.profile[0].user_name}</h3>

          <h2>Contact Info</h2>
        
            <h3>Email</h3>
          <p>{this.state.profile[0].email}</p>
          <h3>Phone</h3>
          <p>{this.state.profile[0].telephone}</p>
          <h3>City</h3>
          <p>{this.state.profile[0].city}</p>
          <h3>Country</h3>
          <p>{this.state.profile[0].country}</p>


        <p>{this.state.profile[0].bio}</p>

        {this.state.profile[0].destinations.map((t, idx) => <Link to={`trips/${t.id}`}> <p key={idx}>{t.city}</p> </Link>)}

      </div> :<div>{console.log("empty")}</div>






    )
  }
}

export default Profile;
