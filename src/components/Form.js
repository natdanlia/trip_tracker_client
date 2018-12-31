import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  render () {
    return(
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <label htmlFor='city'>City</label>
        <input type='text' name='city' value={this.props.city} onChange={this.props.handleAllChange}/>

        <label htmlFor='country'>country</label>
        <input type='text' name='country' value={this.props.country} onChange={this.props.handleAllChange}/>

        <label htmlFor='city'>Cost</label>
        <input type='number' name='cost' value={this.props.cost} onChange={this.props.handleAllChange}/>

        <label htmlFor='city'>Start Date</label>
        <input type='date' name='start_date' value={this.props.start_date} onChange={this.props.handleAllChange}/>

        <label htmlFor='city'>End Date</label>
        <input type='date' name='end_date' value={this.props.end_date} onChange={this.props.handleAllChange}/>

        <label htmlFor='city'>Staying At</label>
        <input type='text' name='staying_at' value={this.props.staying_at} onChange={this.props.handleAllChange}/>

        <label htmlFor='city'>Type</label>
        <input type='text' name='travelling_type' value={this.props.travelling_type} onChange={this.props.handleAllChange}/>

        <label htmlFor='city'>Note</label>
        <input type='text' name='note' value={this.props.note} onChange={this.props.handleAllChange}/>

        <button >Submit</button>
      </form>
    )
  }
}

export default Form;
