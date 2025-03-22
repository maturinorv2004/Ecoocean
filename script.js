const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
}


if (close){
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
}




// New button click functionality
document.getElementById('shopNowBtn')?.addEventListener('click', function() {
    loginModal.style.display = 'block'; // Show the login modal
});

document.getElementById('exploreNowBtn')?.addEventListener('click', function() {
    window.location.href = 'shop.html'; // Redirect to Shop page
});

document.getElementById('learnMoreBtn')?.addEventListener('click', function() {
    window.location.href = 'shop.html'; // Redirect to Learn More page
});

document.getElementById('collectionBtn')?.addEventListener('click', function() {
    window.location.href = 'shop.html'; // Redirect to Collection page
});

// Open the signup modal when clicking the "Sign Up" button
document.getElementById('newsletterSignUpBtn')?.addEventListener('click', function() {
    signupModal.style.display = 'block'; // Show the signup modal
});







// Login/Signup Modal Functionality
// Get the modal
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
var loginBtn = document.getElementById("login-btn");

// Get the <span> elements that close the modal
var closeBtns = document.getElementsByClassName("close");

// When the user clicks the login button, open the modal
loginBtn.onclick = function () {
    loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function () {
        loginModal.style.display = "none";
        signupModal.style.display = "none"; // Close signup modal too
    }
}

// When the user clicks on the signup link, open the signup modal
document.getElementById("signup-link").onclick = function (event) {
    event.preventDefault();
    loginModal.style.display = "none";
    signupModal.style.display = "block";
}

// Close modal when clicking anywhere outside the modal
window.onclick = function (event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    } else if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
}
