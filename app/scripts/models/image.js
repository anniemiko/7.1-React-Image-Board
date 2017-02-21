var Backbone = require('backbone');

var ImageModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var ImageCollection = Backbone.Collection.extend({
  model: ImageModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mikoimages'
});

module.exports = {
  ImageModel: ImageModel,
  ImageCollection: ImageCollection
}
