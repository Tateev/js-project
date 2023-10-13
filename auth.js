const buttons = document.querySelector(".btn");

const handleClick = () =>{
    console.log('click');
}

     buttons.forEach(button = (event)=> {
        button.addEventListener('click', handleClick);
        console.log('already clicked');
        console.log("target", event.target);
    })