
//SELECTORS
const openBtn  = document.querySelector('.openBtn');
const closeBtn  = document.querySelector('.closeBtn');

 const content = document.querySelector('.mobile-menu');

openBtn.addEventListener('click' , openOverlay);
closeBtn.addEventListener('click' , closeOverlay);

function openOverlay() {
    content.style.width = "100%";
}
function closeOverlay() {
    content.style.width = "0%";
}




function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

