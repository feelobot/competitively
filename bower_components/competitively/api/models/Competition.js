/**
 * Competition
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  // Define a custom table name
  tableName: 'competition',
  // Set schema true/false for adapters that support schemaless
  schema: true,
  //Define an adapter to use
  adapter: 'mongo',
  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    is_featured: {
      type: 'boolean',
      defaultsTo: false
    },
    tags: {
      type: 'array'
    },
    start_date: {
      type: 'datetime'
    },
    end_date: {
      type: 'datetime'
    },
    members: {
      type: 'json'
    },
    img_url: {
      type: 'string',
      defaultsTo: 'http://www.bpw-nc.org/Resources/Pictures/logo.gif'
    },
    image: {
      type: 'binary'
    },

  }

};
