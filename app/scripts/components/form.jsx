var React = require('react');
var Backbone = require('backbone');

var Images = require('../models/image.js').ImageCollection;

var Form = React.createClass({
  getInitialState: function(){
    return {show: false};
  },
  toggleForm: function(event){

  },
  render: function(){
    var imageForm = null;
    if(this.state.show){
      imageForm =
    }
    return(
      <div>
        {imageForm}
        <button onClick={this.toggleForm}>Add</button>
      </div>
    )
  }
});

module.exports = {
  Form
}
