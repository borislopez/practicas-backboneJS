define([
  'jquery',
  'underscore',
  'backbone',
  'models/clientModel',
  'collections/clientsCollection',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  //'text!templates/contenidoTemplate.html'
], function($, _, Backbone, Client, Clients){
  var ContenidoView = Backbone.View.extend({
      el: $("body"),
      initialize: function () {
        
      },
  });
  var client_model = new Client();//Crea el modelo.
  //console.log(client_model.propiedadDeInstancia);//Propiedad de la INSTANCIA de modelo(Client)
  //console.log(Client.propiedadDeClase);//Propiedad propia del modelo (Client)
  

  //Creamos un CLIENTE
  client_model.set({dni:'111R', nombre:'Manuel', edad:40, Profesion:'Desarrollador'});
  
  //Una vez creado mostramos el nombre por la consola
  console.log(client_model.get('nombre'));

  //Mostramos los atributos del Modelo creado
  console.log(client_model.attributes);

  //Añadimos un nuevo telefono al array de telefonos, posibles, del cliente y mostramos resultado
  //en consola.
   client_model.nuevoTelefono('890002233');
   console.log(client_model.get('telefonos'));


  //Añadimos un nuevo telefono al array de telefonos, posibles, del cliente y mostramos resultado
    //en consola.
   client_model.nuevoTelefono('991202233');
   console.log(client_model.get('telefonos'));

   client_model.set({nombre:'Aaron',edad:15});
   console.log(client_model.get('nombre'));

   console.log(client_model.cid); 

   console.log(client_model.get('dni'));

   //COLECCIONES
   var clients_collection = new Clients();
   console.log(clients_collection);

   //Creada la instancia de la coleccion, pasamos 
   //a crear una coleccion o ampliar la existente.
  clients_collection.add([{nombre:'Alfonso', edad:23}, 
                {nombre:'Javier', edad:35}]);
  
  console.log(clients_collection.models[0].attributes);
  console.log(clients_collection.at(0));

  //Longitud de la Coleccion
  console.log(clients_collection.length);

 for (var i = 0; i <= clients_collection.length - 1; i++){
    //$('#nombre').append(clients_collection.models[i].get('nombre'));
    //$('#edad').append(clients_collection.models[i].get('edad'));

    console.log(clients_collection.models[i].get('nombre'));
    console.log(clients_collection.models[i].get('edad'));
    $('#container').append('<span>'+clients_collection.models[i].get('nombre')+'</span></br><span>'+
      clients_collection.models[i].get('edad')+'</span></br>');
 }
  

  /*$.each(clients_collection.models, function(i, val) {
     console.log('i-->'+i+'<-->'+'val-->'+clients_collection.models[i].name)
  });*/

  return ContenidoView;
});
