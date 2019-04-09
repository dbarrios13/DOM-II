// Your code goes here
let navLinks = document.querySelector('.nav');
navLinks.addEventListener('mouseover', (event) => {
    event.target.classList.add('navSize');
});
navLinks.addEventListener('mouseout', (event) => {
    event.target.classList.remove('navSize');
});
navLinks.addEventListener('click', (event) => {
    event.preventDefault();
});

let body = document.querySelector('body');
let destinationImg = document.querySelector('#destinationImg');

window.addEventListener('scroll', () => {
    if(scrollY > 550){
        destinationImg.classList.add('destinationImgAni');
    }
});

let emailForm = document.querySelector('#email');

emailForm.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'red';
}, true);

emailForm.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = '';
}, true);

let submit = document.querySelector('#submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
});

let destinationContent = document.querySelector('.destination');
let btn = document.querySelector('.btn');

destinationContent.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
});

btn.addEventListener('mouseover', (event) => {
    event.stopPropagation();
});

let buttonClick = document.querySelectorAll('.btn')[0];
buttonClick.addEventListener('click', () => {
    event.target.innerText = "Thank you!";
})
buttonClick.addEventListener('mouseout', () => {
    event.target.innerText = "Sign Me Up!";
})
let buttonClick1 = document.querySelectorAll('.btn')[1];
buttonClick1.addEventListener('click', () => {
    event.target.innerText = "Thank you!";
})
buttonClick1.addEventListener('mouseout', () => {
    event.target.innerText = "Sign Me Up!";
})
let buttonClick2 = document.querySelectorAll('.btn')[2];
buttonClick2.addEventListener('click', () => {
    event.target.innerText = "Thank you!";
})
buttonClick2.addEventListener('mouseout', () => {
    event.target.innerText = "Sign Me Up!";
})
let keyDownAlert = document.querySelector('body');
keyDownAlert.addEventListener('keydown', (event) =>{
    if(event.key == 'F12'){
        alert("No access to developer window through F12!")
        event.preventDefault();
    }
})

let copyAlert = document.querySelector('body');
copyAlert.addEventListener('copy', () => {
    alert('Please do not copy our content!')
    event.preventDefault()
    console.log("No copying our content!")
})

let inspectAlert = document.querySelector('body');
inspectAlert.addEventListener('contextmenu', () => {
    alert('Please do not inspect our code!')
    event.preventDefault()
    console.log("I shouldn't be able to see this honestly.")
})

// let introHeader = document.querySelector('#draggable');
document.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("Text", event.target.id);
});

document.addEventListener('drag', () => {
    document.getElementById("demo").textContent = "What side will you choose?";
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.addEventListener('drop', (event) => {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
        let data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById("demo").textContent = "The header element was dropped";
    }
});
