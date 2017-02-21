var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var _ = require('underscore');

var Images = require('../models/image.js').ImageCollection;

var ImageForm = React.createClass({
  getInitialState: function(){
    return {url: '', caption: '', show: false};
  },
  toggleForm: function(event){

  },
  handleUrlChange: function(event){
    event.preventDefault();
  this.setState({url: event.target.value});
  },
  handleCaptionChange: function(event){
    event.preventDefault();
  this.setState({caption: event.target.value});
  },
  submitImage: function(event){
    event.preventDefault();
    this.props.submitImage(this.state)
  },
  render: function(){
    var form = null;
    if(this.state.show){
    var form = <form>
        <div className="form-group">
          <label htmlFor="URL">Image url</label>
          <input onChange={this.handleUrlChange} type="url" className="form-control" id="url" placeholder="URL"/>
        </div>
        <div className="form-group">
            <label htmlFor="caption">Image caption</label>
            <input onChange={this.handleCaptionChange} type="text" className="form-control" id="caption" placeholder="caption"/>
        </div>
         <button type="submit" class="btn btn-default">Add</button>
      </form>;
    };
    return(
      <div>
        <button onClick={this.toggleForm}>Add</button>
        {form}
      </div>
    )
  }
});

var ImageListing = React.createClass({

  render: function(){
      var imageList = this.props.images.map(function(image){
        return (<div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="{image.get('url')}" alt="..."/>
                <div className="caption">
                  <h3>{image.get('caption')}</h3>
                  <p><a href="#" className="btn btn-primary edit" role="button">Edit</a> <a href="#" className="btn btn-default delete" role="button">Delete</a></p>
                </div>
              </div>
            </div>
          </div>
        )
      });
  }
});

var ImageBoard = React.createClass({
  componentWillMount: function(){
    var self = this;
    this.props.images.fetch().done(function(){
      self.forceUpdate()
    });
  },
  getInitialState: function(){
   return {collection: this.props.images}
  },
  submitImage: function(image){
  this.state.collection.create(image);
  this.setState({collection: this.state.collection});
  },
  render(){
    return (<div>
        <ImageForm submitImage = {this.submitImage} />
        <ImageListing images={this.state.collection} />
      </div>
    )
  }
});

module.exports = {
  ImageForm,
  ImageListing,
  ImageBoard
}
