let navToggle = document.querySelector('.nav-toggle'); // nav toggle is bar icon (|||).


let links = document.querySelector('.links'); // links are related to Home, About, Project, Contact.


navToggle.addEventListener('click', function(e){
   
    e.preventDefault;
    links.classList.toggle('show-links');
    
})