const button = document.querySelector(".btn");

button.addEventListener('click', function(e){
    e.preventDefault();
});
     window.location.href = 'signup.html?type="username"';


let logbttn = document.getElementById("log-bttn");
let wrapper = document.getElementById("wrapper");
  logbttn.addEventListener('click', function(){
    wrapper.innerHTML = 'container2';
  })
