var React = require('react');
var Backbone = require('backbone');

var Images = require('../models/image.js').ImageCollection;

var ImageForm = React.createclassName({
  getInitialState: function(){
    return {show: false};
  },
  toggleForm: function(event){

  },
  handleUrlChange: function(){
  this.setStart({url: event.target.value})
  },
  submitImage: function(){
  this.props.submitImage(this.state)
  },
  render: function(){
    var imageForm = null;
    if(this.state.show){
      imageForm = <form>
        <div class="form-group">
          <label htmlFor="URL">Image url</label>
          <input onChange={this.handleUrlChange} type="url" className="form-control" id="url" placeholder="URL"/>
        </div>
        <div class="form-group">
            <label htmlFor="caption">Image caption</label>
            <input onChange={this.handleUrlChange} type="text" className="form-control" id="caption" placeholder="caption"/>
        </div>
      </form>
    }
      // on each input do onChange={this.handleUrlChange}
    return(
      <div>
        <button onClick={this.toggleForm}>Add</button>
        {imageForm}
      </div>
    )
  }
});

var ImageListing = React.createclassName({

  render(){
      var ImageList = this.props.images.map(function(image){
        return
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..."/>
                <div className="caption">
                  <h3>{caption}</h3>
                  <p><a href="#" className="btn btn-primary edit" role="button">Edit</a> <a href="#" className="btn btn-default delete" role="button">Delete</a></p>
                </div>
              </div>
            </div>
          </div>
      });
  }
});

var ImagePage = React.createclassName({
  componentWillMount: function(){
    var self = this;
    this.props.images.fetch().done(function(){
      self.forceUpdate()
    });
  },
  getInitialState: function(){
    var imagePics = new ImageCollection();
  },
  submitImage = function(image){
  this.state.collection.create(image);
  this.setState({collection: this.state.collection});
  },
  render(){
    return
    <div>
    <ImageForm submitImage = this.submitImage/>
    <ImageListing pics={this.state.collection} />
    </div>
  }
});

module.exports = {
  ImageForm,
  ImageListing,
  ImagePage
}
