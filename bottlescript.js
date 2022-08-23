

//menu button
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".narbar");

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
});



function imgSlider(anything){
    document.querySelector('.flask').src = anything;

}

function changeBgColor(color){
    const sec = document.querySelector('.flask');
    sec.style.background = color;
}


//for the next and prev buttons

const bots = document.querySelector('.cons').children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page-num");
const maxItem = 1;
let index = 1;


const pagin = Math.ceil(bots.length/maxItem);
console.log(pagin);

prev.addEventListener("click", function(){
    index--;
    check();
    showItems();
})

next.addEventListener("click", function(){
    index++;
    check();
    showItems();
})

function check(){

    if(index == pagin){
        next.classList.add("disabled");
    }
    else{
        next.classList.remove("disabled");
    }

    if(index == 1){
        prev.classList.add("disabled");
    }

    else{
        prev.classList.remove("disabled");
    }
}

function showItems(){

    for(let i = 0; i < bots.length; i++){
       bots[i].classList.remove("show");
        bots[i].classList.add("hide");

        if(i >= (index*maxItem) - maxItem && i < index*maxItem){ //means (1*8) - 8=0 
            //if index = 2 then (2*8) - 8=8
            bots[i].classList.remove("hide");
            bots[i].classList.add("show");
        }

        page.innerHTML = index;
       
    }

  


}


window.onload=function(){
    showItems();
    check();
}


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
     speedAsDuration: true
    });