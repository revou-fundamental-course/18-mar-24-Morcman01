const nama = document.getElementById('nama')
const email = document.getElementById('email')
const formoption = document.getElementById("formoption")
const errorElement = document.getElementById("error")

form1.addEventListener('submit', (e) => {
    let messages = []
    if (nama.value  === '' || nama.value == null || email.value ==='' || email.value == null || formoption.value ==='' || formoption.value == null){
        messages.push("Hmm, it seems like one or more of your form prompt is empty \n Try checking if you've missed any!")
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < slides.length; i++) {
  slides[slideIndex-1].style.display = "block";  
  }
  setTimeout(showSlides, 4000);
}