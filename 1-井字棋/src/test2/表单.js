import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      flavor: 'coconut',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const value = e.target.name === 'isGoing' ? e.target.checked : e.target.value
    const name = e.target.name
    
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          参与：<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          来宾人数：<input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          选择你喜欢的风味：
          <select name="flavor" value={this.state.flavor} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

export default Form