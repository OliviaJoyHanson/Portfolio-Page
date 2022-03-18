let about = document.getElementById('about-h2');
let aboutP = document.getElementById('about-p');


aboutP.hidden = "true";

function down() {
    about.hidden = "true";
    aboutP.style.display = 'flex';
}

about.onclick = down;