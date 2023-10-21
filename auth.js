const button = document.querySelector(".btn");

button.addEventListener('click', function(e){
    e.preventDefault();
});
     window.location.href = 'signup.html?type="username"';
