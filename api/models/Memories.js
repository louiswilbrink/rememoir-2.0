/**
* Memories.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      id: { 
          type:            'integer', 
          autoIncrement:    true 
      },
      status: {
          type:         'string',
          enum:         ['active', 'inactive', 'deleted'],
          defaultsTo:   'active'
      },
      entry: 'string'
  }
};

