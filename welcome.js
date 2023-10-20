// const buttons = document.querySelector("linkToAnotherPage");

// const handleClick = () =>{
//     console.log('click');
// }

//      buttons.forEach(button => {
//         button.addEventListener('click', handleClick);
//         console.log('already clicked');
//     })

// const button = document.getElementById('linkToAnotherPage');

// button.addEventListener('linkToAnotherPage', function() {
//     window.location.href = 'auth.html';
// });


//  window.location.href = "signup.html";

const logbtn = document.querySelector(".link-to_logpage");
const signbtn = document.querySelector(".link-to_signpage");

function createYourAccount(e){
    e.preventDefault();
  window.location.href = 'login.html';
}
  function welcomeBack(e) {
    e.preventDefault();
  window.location.href = 'signup.html';
   
}

logbtn.addEventListener("click", welcomeBack);
signbtn.addEventListener("click", createYourAccount);


