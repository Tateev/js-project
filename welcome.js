const buttons = document.querySelector("button-2");

const handleClick = () =>{
    console.log('click');
}

     buttons.forEach(button => {
        button.addEventListener('click', handleClick);
        console.log('already clicked');
    })
    
    let text = "Log In";
    let result = text.link("./auth.html");
