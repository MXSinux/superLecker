// Navigation
// https://getbootstrap.com/docs/5.2/examples/navbars-offcanvas/

const bsOffcanvasNavbar = new bootstrap.Offcanvas('#offcanvasNavbar')

// hammer js
// https://hammerjs.github.io/recognizer-swipe/

const header = document.querySelector("header")
const main = document.querySelector("main")
const offcanvasNavbarBody = document.querySelector("#offcanvas-body")

new Hammer(header).on("swipeleft", function () {
    bsOffcanvasNavbar.show()
});

new Hammer(main).on("swipeleft", function () {
    bsOffcanvasNavbar.show()
});
new Hammer(offcanvasNavbarBody).on("swiperight", function () {
    bsOffcanvasNavbar.hide()
});



// Anmeldefunktion
// Der Code wurde mithilfe von ChatGPT geschrieben.


// Der Status des Users wird aus dem Localstorage abgefragt und demnach wird die Navbar auf Creator oder Anmelden angepasst.
document.addEventListener('DOMContentLoaded', function() {
    var zeigeAnmelden = document.getElementById('zeige-anmelden');
    var zeigeCreator = document.getElementById('zeige-creator');

    var besitztAccount = localStorage.getItem('besitztAccount');

    if(besitztAccount === 'true'){
        zeigeCreator.style.display = 'block';
        zeigeAnmelden.style.display = 'none';
    }else{
        zeigeCreator.style.display = 'none';
        zeigeAnmelden.style.display = 'block'; 
    }
   
});

// Die Funktion anmelden() setzt besitzteAccount im localStorage auf true
function anmelden(){
    localStorage.setItem('besitztAccount','true');
    location.reload();
}

// die Funktion clear() setzt besitzteAccount im localStorage auf false
function clear(){
    localStorage.setItem('besitztAccount','false');
    location.reload();
}



document.addEventListener('DOMContentLoaded',function(){
    var anmeldenButton = document.getElementById('anmeldenButton');
    var clearButton = document.getElementById('resetButton');

    anmeldenButton.addEventListener('click',anmelden);
    clearButton.addEventListener('click',clear);
});


/*
const stars = document.querySelectorAll(".star");

        stars.forEach((star, index) => {
            star.addEventListener("click", () => {
                for (let i = 0; i <= index; i++) {
                    stars[i].innerHTML = "&#9733;";
                }
                for (let i = index + 1; i < stars.length; i++) {
                    stars[i].innerHTML = "&#9734;";
                }
            });
        });

*/

        const cards = document.querySelectorAll(".recipe-card");

        cards.forEach((card) => {
            const stars = card.querySelectorAll(".star");
            const cardId = card.getAttribute("data-card-id");
        
            stars.forEach((star, index) => {
                star.addEventListener("click", () => {
                    for (let i = 0; i <= index; i++) {
                        stars[i].innerHTML = "&#9733;";
                    }
                    for (let i = index + 1; i < stars.length; i++) {
                        stars[i].innerHTML = "&#9734;";
                    }
                });
            });
        });
             







// Quelle: https://getbootstrap.com/docs/4.0/components/forms/

// Example starter JavaScript for disabling form submissions if there are invalid fields
/*
(function() {
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          if (form.checkValidity() === true){
            anmelden();
            // Der User wird auf die Seite creator.html weitergeleitet.
            
            window.location.href = "./creator.html";
            
        }
        form.classList.add('was-validated');
    }, false);
});
}, false);
})();
*/


