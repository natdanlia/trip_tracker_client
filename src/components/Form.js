import React from 'react'
import PropTypes from 'prop-types'

const Form = (props) => {
  return (
    <form className="ui form">
  <div className="fields">
    <div className="six wide field">
      <label>First name</label>
      <input type="text" placeholder="First Name"/>
    </div>
    <div className="four wide field">
      <label>Middle</label>
      <input type="text" placeholder="Middle Name"/>
    </div>
    <div className="six wide field">
      <label>Last name</label>
      <input type="text" placeholder="Last Name"/>
    </div>
  </div>
  <div className="fields">
    <div className="two wide field">
      <input type="text" placeholder="2 Wide"/>
    </div>
    <div className="twelve wide field">
      <input type="text" placeholder="12 Wide"/>
    </div>
    <div className="two wide field">
      <input type="text" placeholder="2 Wide"/>
    </div>
  </div>
  <div className="fields">
    <div className="eight wide field">
      <input type="text" placeholder="8 Wide"/>
    </div>
    <div className="six wide field">
      <input type="text" placeholder="6 Wide"/>
    </div>
    <div className="two wide field">
      <input type="text" placeholder="2 Wide"/>
    </div>
  </div>
  <button class="ui button" type="submit">Submit</button>
</form>

  )
}

export default Form
