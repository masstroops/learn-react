import React from "react";
import $ from 'jquery'

class SomePlugin extends React.Component {
  componentDidMount() {
    // console.log($(this.el));
    this.$el = $(this.el)
    this.$el.chosen()
    this.handleChange = this.handleChange.bind(this)
    this.$el.on('change', this.handleChange)
  }
  componentWillUnmount() {
    this.$el.chosen('destroy')
  }
  handleChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
    <div>
      <select className="Chosen-select" ref={el => this.el = el}>
        <option>vanilla</option>
        <option>chocolate</option>
        <option>strawberry</option>
      </select>
    </div>
    )
  }
}

export default SomePlugin