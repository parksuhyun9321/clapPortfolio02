let ratio = window.devicePixelRatio;
let width = document.body.offsetWidth;
if(ratio == 1 && width > 1024) {
   document.location.href ="../html/index.html";
}

const memo = document.querySelector(".gnbList li:nth-child(4)");
const memoCon = document.getElementById("memo");
memo.addEventListener("click",function(){
    memoCon.classList.add("on");
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

const skillBtn = document.querySelector(".appBtns button");
const skillCon = document.getElementById("skill");

skillBtn.addEventListener("click",function(){
    skillCon.classList.add("on");
    for(let i=0;i< no.length; i++){
        countUp(i);
    }
});

const portfolioBtn = document.querySelector(".appBtns button:nth-child(2)");
const portofolioCon = document.getElementById("portfolio");

portfolioBtn.addEventListener("click",function(){
    portofolioCon.classList.add("on");
})



const btnBack = document.querySelectorAll(".btnBack");
for(let i=0;i<btnBack.length; i++){
    btnBack[i].addEventListener("click",function(){
        memoCon.classList.remove("on");
        skillCon.classList.remove("on");
        portofolioCon.classList.remove("on")
    });
}


