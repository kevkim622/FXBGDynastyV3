const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length = 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function sendMail(){
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('emailAddress').value,
    message: document.getElementById('message').value,
  };

  const serviceID = "service_tlva2ma";
const templateID = "template_nwlo44p";

emailjs.send(serviceID, templateID, params)
.then(
  res =>{
    document.getElementById('name').value = '';
    document.getElementById('emailAddress').value = '';
    document.getElementById('message').value = '';
    console.log(res);
    alert("Message sent successfully");
  }
)
.catch((err) => console.log(err));
}

