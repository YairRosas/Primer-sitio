(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Obtiene los valores de todos las etiquetas nombradas need-validation
    var forms = document.getElementsByClassName('needs-validation');
    // Crea un bucle y evita que se suban los datos
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
          //ejecuta la ventana modal
          event.preventDefault();
          $('#ventana-confirmacion').modal('toggle')
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();