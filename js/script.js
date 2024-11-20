function validateData(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;

    if(fullname.length == 0){
      alert("Please fill your Full name");
    }else if(email.length == 0){
      alert("Please insert your email (@gmail.com)");
    }else{
      window.location.href = "Success.html"
    }
  }

let indexSlide = 1;
const listImages = document.getElementsByClassName('banner-autoslide');

showSlide();

function nextSlide(){
  showSlide(indexSlide += 1);
}

function showSlide(index){
  if (index > listImages.length) indexSlide = 1;
  console.log(indexSlide);
  hideAllSlides();
  listImages[indexSlide - 1].style.display = 'block';
}


//Logic untuk hide semua slides
function hideAllSlides(){
  for(let i = 0; i < listImages.length; i++){
    listImages[i].style.display = 'none';
  }
}

setInterval(() => nextSlide(), 2000);