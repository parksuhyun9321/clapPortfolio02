setInterval(() => {
   let clock = new Date();
   let year = clock.getFullYear();
   let month = clock.getMonth()+1;
   let day = clock.getDate();
   let h = clock.getHours();
   let m = clock.getMinutes();
   let s = clock.getSeconds();
   document.querySelector(".timer").innerHTML = h+":"+m+":"+s;
   document.querySelector(".year").innerHTML = year+"-"+month+"-"+day;
}, 1000);
// header 시계



const btnMemo = document.querySelector(".gnbList li:nth-child(5)");
const memoTxt = document.getElementById("memoTxt");

btnMemo.addEventListener("click",function(){
    memoTxt.classList.toggle("none");
});

const txt = document.getElementsByClassName("txt");
for(let i=0;i<txt.length; i++){
    txt[i].addEventListener("click",function(){
        this.classList.toggle("hide");
    });
}

// #memoTxt


const btnPortfolio = document.querySelector(".gnbList li:nth-child(3)");
const portfolio = document.getElementById("portfolio");
const portfolioClose = document.querySelector("#portfolio .btnClose");

btnPortfolio.addEventListener("click",function(){
    portfolio.classList.toggle("hide");
});
portfolioClose.addEventListener("click",function(){
    portfolio.classList.add("hide");
});

// #portfolio

const btnSkills = document.querySelector(".gnbList li:nth-child(4)");
const skills = document.getElementById("skills");
const skillClose = document.querySelector("#skills .btnClose");
btnSkills.addEventListener("click",function(){
    skills.classList.toggle("hide");
    for(let i=0;i< no.length; i++){
        countUp(i);
    }
});
skillClose.addEventListener("click",function(){
    skills.classList.add("hide");
});
let no = document.getElementsByClassName("num");
function countUp(idx){
    let num= 0;
    let targetNum = no[idx].getAttribute("data-rate");
    let countTimer = setInterval(function(){
        ++num;
        no[idx].innerText = num;
        if(num== targetNum){
            clearInterval(countTimer);
        }
    },10)
}
// #skills

dragElement(document.getElementById("portfolio"));
dragElement(document.getElementById("skills"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
}
// drag 소스

