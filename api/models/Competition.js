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
    tagline: {
      type: 'text',
      required: true
    },
    description: {
      type: 'text',
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
    twitter: {
      type: 'string'
    },
    entry_fee: {
      type: 'string'
    },
    members: {
      type: 'json'
    },
    img_url: {
      type: 'string',
    defaultsTo: 'http://lorempixel.com/600/200/people'
    },
    prize: {
      type: 'string'
    },
    prize_img_url: {
      type: 'binary'
    },
    company_url: {
      type: "string"
    }
  }

};
