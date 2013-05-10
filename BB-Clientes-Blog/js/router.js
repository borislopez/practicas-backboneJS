// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/clientModel'
], function($, _, Backbone,Client){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    window.App.router=app_router;
    app_router.on('route:defaultAction', function(actions){
      console.log('routers');

      //******************************
      var client_model = new Client();//Creamos la instancia del modelo.       

        //Creamos un CLIENTE
        client_model.set({dni:'111R', nombre:'María', edad:40, Profesion:'Analista'});
        
        //Una vez creado mostramos el nombre por la consola. Para acceder a los valores de los atributos del modelo, 
        //no se hace de forma directa, si no que se hace a través del método get().
        console.log(client_model.get('nombre'));

        //Mostramos los atributos del Modelo creado. A través del método attributes().
        console.log(client_model.attributes);

        //Añadimos un nuevo telefono al array de telefonos, posibles, del cliente y mostramos resultado
        //en consola. Llamamos al método definido en el modelo: clientModel.js-->nuevoTelefono().
        client_model.nuevoTelefono('890002233');

        //Añadimos un nuevo telefono al array de telefonos, posibles, del cliente y mostramos resultado
        //en consola.
         client_model.nuevoTelefono('991202233');

         client_model.set({nombre:'Aaron',edad:15});
         //Mostramos los atributos del Modelo creado. A través del método attributes().
         console.log(client_model.attributes);
        
         //Pintamos resultados en el HTML- Notese que aunque no estamos haciendo uso de los archivos clientsCollection.js, contenidoView.js y del template
         //contendioTemplate.html, de esto haremos uso más adelante.
         $('#container').append('<span>'+client_model.get('nombre')+'</span></br><span>'+
         client_model.get('edad')+'</span></br>');

    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});