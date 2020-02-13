$(document).ready(function(){

  crea();
  $('.aggiungi').click(function(){
    var aggiunta= $('#insert').val();
    aggiungi(aggiunta);
  });

});

function crea(){
  $.ajax(
      {
      url: "http://157.230.17.132:3019/todos",
      method: "GET",
      success: function (data) {
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        for (var i = 0; i < data.length; i++) {
          var dati = data[i];
          var context = {
            id: dati.id,
            text: dati.text
          };
            var html = template(context);
            $('.list').append(html);
        }
        },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
        }
      }
    );
}

function aggiungi(stringa){
  console.log(stringa);
  $.ajax(
      {
      url: "http://157.230.17.132:3019/todos",
      method: "POST",
      data: {
        text: stringa
      },
      success: function (data, success) {
        $('ol.list').html("");
        crea();
          console.log('aggiunta');
        },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
        }
      }
    );
}
