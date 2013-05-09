define([
   'underscore',
   'backbone',
   'models/clientModel'
], function(_, Backbone,Client){
   var Clients = Backbone.Collection.extend({
    	//Esta es nuestra colección de los 'Clientes' y sostiene nuestros modelos 'Cliente'.
      initialize: function (models, options) {
        console.log('initialize de Collection');
      },

       model: Client
   });

   return Clients;
});