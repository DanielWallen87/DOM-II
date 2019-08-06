// Your code goes here
const pics = document.querySelectorAll('img');
pics.forEach(el => el.addEventListener('mouseover', (event) => { // 1: make image "pop" as people mouse over
    TweenMax.to(event.target, 1, {                               // Stretch = used Greensock animation
        scale: 1.3,
        filter: 'none',
        ease: Elastic.easeOut.config( 1, 0.75)
      })
}))

pics.forEach(el => el.addEventListener('mouseleave', (event) => { // 2: make image less visual as mouse exists
    TweenMax.to(event.target, 0.5, {                              // Stretch = used Greensock animation
        scale: 1,
        filter: 'grayscale(1)',
        ease: Power1.easeIn
      })
}))

const header = document.querySelector('.logo-heading');  // 3: logo turns yellow (like a school bus) when clicked
header.addEventListener('click', (event) => {
    event.target.style.color = 'yellow';
    event.target.style.fontWeight = 'bold';
})

const nav = document.querySelectorAll('.nav a'); // 4: nav transforms to yellow with a black background when mouse enters
nav.forEach(el => el.addEventListener('mouseover', (event) => {
    event.target.style.color = 'yellow';
    event.target.style.background = 'black';
    event.target.style.transition = '0.6s';
}))

nav.forEach(el => el.addEventListener('mouseout', (event) => { // 5: nav reverts to original styling when mouse exists
    event.target.style.color = '#212529';
    event.target.style.background = 'white';
    event.target.style.transition = '0.6s';
}))

const text = document.querySelectorAll('.text-content'); // Added this part to implement 
    text.forEach(el => el.addEventListener('mouseup', (event) => {
        event.target.style.background = 'pink';
    }))

const paras = document.querySelectorAll('.text-content p');
    paras.forEach(el => el.addEventListener('mouseup', (event) => { // 6: text highlighted after mouse click ends
        event.target.style.background = 'lemonchiffon';             // wanted this to be more smooth, but kinda close(?)
        event.stopPropagation();
    }))

nav.forEach(el => el.addEventListener('blur', (event) => { // 7: Nav items change colors upon clicking a link after
    event.target.style.color = 'yellow';                   // the previous one (i.e. can see what's left to explore)
}))

const body = document.querySelector('body');
body.onload = alert('Beep, beep! Welcome to Fun Bus.') // 8: Page greets visitors with an alert after loading

pics.forEach(el => el.addEventListener('dblclick', (event) => { // 9: Double clicking images makes them vanish
    event.target.style.display = 'none';                        // Maybe the browser just wants to read the text only??
}))

body.addEventListener('keydown', function(event) { 
    if (event.key === 'f') { // 10: If the browser presses F, they get the below alert
        alert('F is for FUN bus!');
    }
    else {
        console.log(`This is my keypress: ${event.code}`); // If key other than F, console reveals what it is
    }
});

body.addEventListener('keyup', function() { // 11: Console tells us that no keys are being pressed right this second
    console.log('No keys being pressed at the moment');
})