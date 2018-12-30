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

      (this.state.profile) ? <div>
        <h1>{this.state.profile[0].name}</h1>
        <img src={`${this.state.profile[0].img_url}`} alt={`${this.state.profile[0].name}`}/>
        <h3>Age: {this.state.profile[0].age}</h3>
        <h3>User Name: {this.state.profile[0].user_name}</h3>
        <ul>
          <h2>Contact Info</h2>
            <h3>Email</h3>
          <li>{this.state.profile[0].email}</li>
          <h3>Phone</h3>
          <li>{this.state.profile[0].telephone}</li>
          <h3>City</h3>
          <li>{this.state.profile[0].city}</li>
          <h3>Country</h3>
          <li>{this.state.profile[0].country}</li>
        </ul>

        <p>{this.state.profile[0].bio}</p>
        
        {this.state.profile[0].destinations.map((t, idx) => <Link to={`trips/${t.id}`}> <p key={idx}>{t.city}</p> </Link>)}

      </div> :<div>{console.log("empty")}</div>






    )
  }
}

export default Profile;
