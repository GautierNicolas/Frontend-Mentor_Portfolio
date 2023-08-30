
// SVG

const svg = document.getElementsByClassName('svgObject');
for(i = 0; i < svg.length; i++) {
    svg[i].addEventListener('mouseover', function(event){
        const svgDoc = event.target;
        svgDoc.style.filter = 'invert(5%) sepia(70%) saturate(1000%) hue-rotate(80deg) brightness(95%) contrast(95%)'
    })
}
for(i = 0; i < svg.length; i++) {
    svg[i].addEventListener('mouseout', function(event){
        const svgDoc = event.target;
        svgDoc.style.filter = 'none'
    })
}

// END SVG

// Contact Form

function updateInputAndDisplay(inputElement, displayElements, isValid) {
    const validColor = "var(--color-hover)";
    const invalidColor = "var(--color-wrong)";

    const inputIsValid = isValid(inputElement.value);
    inputElement.style.borderBottom = inputIsValid ? `2px solid ${validColor}` : `2px solid ${invalidColor}`;

    displayElements.forEach(element => {
        if (inputIsValid) {
            element.classList.add('display_name');
        } else {
            element.classList.remove('display_name');
        }
    });
}

const nameInput = document.getElementById('name');
const nameWrapper = document.getElementById('name_wrapper');
const nameDisplay = nameWrapper.querySelectorAll('.display_name');

nameInput.addEventListener("input", () => {
    updateInputAndDisplay(nameInput, nameDisplay, value => value.length >= 3);
});

const emailInput = document.getElementById('email');
const emailWrapper = document.getElementById('email_wrapper');
const emailDisplay = emailWrapper.querySelectorAll('.display_name');

emailInput.addEventListener("input", () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    updateInputAndDisplay(emailInput, emailDisplay, value => emailRegex.test(value));
});

const messageInput = document.getElementById('message');
const messageWrapper = document.getElementById('message_wrapper');
const messageDisplay = messageWrapper.querySelectorAll('.display_name');

messageInput.addEventListener("input", () => {
    updateInputAndDisplay(messageInput, messageDisplay, value => value.length >= 250)
});

// END contact form