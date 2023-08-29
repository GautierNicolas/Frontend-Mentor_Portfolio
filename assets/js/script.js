
// SVG

const svg = document.getElementsByClassName('svgObject');
for(i = 0; i < svg.length; i++) {
    svg[i].addEventListener('mouseover', function(event){
        const svgDoc = event.target;
        // svgDoc.setAttribute('fill', '#4EE1A0')
        svgDoc.style.filter = 'invert(5%) sepia(70%) saturate(1000%) hue-rotate(80deg) brightness(95%) contrast(95%)'
    })
}
for(i = 0; i < svg.length; i++) {
    svg[i].addEventListener('mouseout', function(event){
        const svgDoc = event.target;
        // svgDoc.setAttribute('fill', '#FFF')
        svgDoc.style.filter = 'none'

    })
}

// END SVG

function handleEmailChange(event) {
    const input = event.target;

    const email = input.value;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(emailRegex.test(email) && email.length > 3) {
        input.style.borderBottom = '2px solid #4EE1A0';
    } else {
        input.style.borderBottom = '2px solid red';
    }
}
// Contact Form


// END contact form