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

let logbttn = document.getElementById('logbttn');
let signbttn = document.getElementById('signbttn');



