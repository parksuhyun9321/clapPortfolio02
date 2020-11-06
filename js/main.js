let ratio = window.devicePixelRatio;

if(ratio == 2 && window.innerWidth <= 1024) {
   document.location.href ="../html/mobile.html";
}



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
// 상단 시계

const btnProfile = document.querySelector(".gnbList li:nth-child(1)");
const btnPortfolio = document.querySelector(".gnbList li:nth-child(3)");
const btnSkills = document.querySelector(".gnbList li:nth-child(4)");
const btnMemo = document.querySelector(".gnbList li:nth-child(5)");

const memoTxt = document.getElementById("memoTxt");
btnMemo.addEventListener("click",function(){
    memoTxt.classList.toggle("none");
});

const portfolio = document.getElementById("portfolio");
btnPortfolio.addEventListener("click",function(){
    portfolio.classList.toggle("hide");
    skills.classList.add("hide");
});
const skills = document.getElementById("skills");
btnSkills.addEventListener("click",function(){
    skills.classList.toggle("hide");
    portfolio.classList.add("hide");
    for(let i=0;i< no.length; i++){
        countUp(i);
    }
});
// menuBar


const txt = document.getElementsByClassName("txt");

for(let i=0;i<txt.length; i++){
    txt[i].addEventListener("click",function(){
        this.classList.toggle("hide");
    });
}

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





const btnClose = document.querySelectorAll(".btnClose");
for(let i=0;i<btnClose.length; i++){
    btnClose[i].addEventListener("click",function(){
        portfolio.classList.add("hide");
        skills.classList.add("hide");
    })
};
