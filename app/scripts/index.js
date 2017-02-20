var React = require('react');
var ReactDOM = require('react-dom');

var Listing = require('./components/listing.jsx').Listing;

ReactDOM.render(
  React.createElement(Listing),
  document.getElementById('app')
)
