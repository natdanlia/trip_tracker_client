import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  render () {
    return(
      <form className="ui form" onSubmit={event => this.props.handleSubmit(event)}>
        <h1>Add Trip</h1>
        <div className="field">
          <div className="two fields">
            <div className="field">
              <label htmlFor='city'>City</label>
              <input type="text" name="city" value={this.props.city} onChange={this.props.handleAllChange} />
            </div>
            <div className="field">
              <label htmlFor='country'>Country</label>
              <input type="text" name="country" value={this.props.country} onChange={this.props.handleAllChange} />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="three fields">
            <div className="field">
              <label htmlFor='cost'>Cost</label>
              <input type="text" name="cost" value={this.props.cost} onChange={this.props.handleAllChange} />
            </div>
            <div className="field">
              <label htmlFor='staying'>Where are you staying?</label>
              <input type="text" name="staying_at" value={this.props.staying} onChange={this.props.handleAllChange} />
            </div>
            <div className="field">
              <label htmlFor='travelling_type'>You are travelling for?</label>
              <input type="text" name="travelling_type" value={this.props.travelling} onChange={this.props.handleAllChange} />
            </div>
          </div>
        </div>




        <h3>Duration of your Trip</h3>

    <div class="two fields">
      <div class="field">
        <label>Start date</label>
        <div class="ui calendar" id="rangestart">
          <div class="ui input left icon">
            <i class="calendar icon"></i>
            <input type="text" name="start_date"value={this.props.start} placeholder="Start" onChange={this.props.handleAllChange}/>
          </div>
        </div>
      </div>
      <div class="field">
        <label>End date</label>
        <div class="ui calendar" id="rangeend">
          <div class="ui input left icon">
            <i class="calendar icon"></i>
            <input type="text" name="end_date" value={this.props.end} onChange={this.props.handleAllChange} placeholder="End"/>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <label>Note</label>
      <input type="text" name="note" value={this.props.note} onChange={this.props.handleAllChange}></input>
    </div>


        <input type="submit" className="ui button" value="Submit Trip"/>
      </form>


    )
  }
}




export default Form;
