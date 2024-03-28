
  function validateForm() { 
    // Get the values of the form elements 
    var name = document.getElementById("name").value; 
    var email = document.getElementById("email").value; 
    var Issue = document.getElementById("issue").value; 
 
    // --- Form Validation adapted from Aziz on Quora ---
    // Validate the form values 
    if (name == "") { 
      alert("Name is required"); 
      return false; 
    } 
    if (email == "") { 
      alert("Email is required"); 
      return false; 
    } 
    if ( Issue == "") { 
      alert("Issue is required"); 
      return false; 
    } //end of adapted code
    // The code below checks that a valid email with inputed
    if (!email.includes("@")) {
      alert("Valid email is required")
      return false;
    }

    // Update message to indicate form submission
    document.getElementById("message").textContent = "Form has been submitted. Response will be sent to your email " + email;

    // Return false to prevent default form submission behavior
    return false; 
  } 



  // Function for dropdoen button adapted from w3Schools
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  function dropdownFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.btn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}//end of adapted code


/* JavaScript for functionability of the slideshow images, code adapted from w3Schools  */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// This function controls the slideshow by showing the slide with the given index 'n'
function showSlides(n) {
  let i;
  // Get all elements with the class name "mySlides" (assumed to be your slideshow slides)
  let slides = document.getElementsByClassName("mySlides");
  // Get all elements with the class name "dot" (assumed to be your slideshow navigation dots)
  let dots = document.getElementsByClassName("dot");
  
  // If the passed index 'n' is greater than the number of slides,
  // set the slide index to 1 to display the first slide
  if (n > slides.length) {slideIndex = 1} 
  // If the passed index 'n' is less than 1,
  // set the slide index to the last slide to display the last slide
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides by setting their display property to "none"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  
  // Remove the "active" class from all navigation dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the slide with the current slide index (slideIndex)
  // and add the "active" class to the corresponding navigation dot
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//End of adapted code
