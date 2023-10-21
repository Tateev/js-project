const signbtn = document.querySelectorAll(".link-to_signpage");
const logbtn = document.querySelectorAll(".link-to_logpage");


signbtn.forEach(el =>{
  el.addEventListener('click', function(e){
    e.preventDefault();
  window.location.href = 'signup.html?type="signup"';
  })
})
logbtn.forEach(el =>{
  el.addEventListener('click', function(e){
    e.preventDefault();
  window.location.href = 'signup.html?type="login"';
  })
})

let logbttn = document.getElementById("log-bttn");
let wrapper = document.getElementById("wrapper");
  logbttn.addEventListener('click', function(){
    wrapper.innerHTML = 'container2';
  })








