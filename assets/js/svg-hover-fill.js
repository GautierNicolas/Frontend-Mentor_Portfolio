
// SVG

const svg = document.getElementsByClassName('svgObject');
console.log(svg)
for(i = 0; i<svg.length; i++) {
    svg[i].addEventListener('mouseover', function(event){
        const svgDoc = event.target;
        console.log(svgDoc)
        svgDoc.setAttribute('fill', '#4EE1A0')
    })
}
for(i = 0; i<svg.length; i++) {
    svg[i].addEventListener('mouseout', function(event){
        const svgDoc = event.target;
        svgDoc.setAttribute('fill', '#FFF')
    })
}

// END SVG


// OPEN URL

function openUrl(){
    window.open('https://www.github.com')
}