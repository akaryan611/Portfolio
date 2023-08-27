let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");




function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    window.event.currentTarget.classList.add("active-link");
    
    document.getElementById(tabname).classList.add("active-tab");
    
}
var sidemeu = document.getElementById("sidemenu");


function openmenu(){
sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
    }


const scriptURL = 'https://script.google.com/macros/s/AKfycbx3nUK48IrgfsRXrnJ5tjAEvx9P0XDoeGh5OpMf7tnfJ8S6koze2dp5u6kpQw-JCqcnNA/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("successfully submit");
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
var loader=document.getElementById("loading");
window.addEventListener("load",function(){
  loader.style.display="none";
});
