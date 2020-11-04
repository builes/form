let input1 = document.getElementById( 'name' );
input1.addEventListener('click', () =>{input1.placeholder = ""});

let input2 = document.getElementById( 'last-name' );
input2.addEventListener('click', () =>{input2.placeholder = ""});

let input3 = document.getElementById( 'email' );
input3.addEventListener('click', () =>{input3.placeholder = ""});

let input4 = document.getElementById( 'password' );
input4.addEventListener('click', () =>{input4.placeholder = ""});



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
})();

let caja = document.getElementById('caja')
let alturaCaja = caja.scrollHeight;
let altura = window.innerHeight
let margin = (altura - alturaCaja)/2
caja.style.marginTop = `${margin}px`




