


const menuBtn = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");





menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
    menuBtn.classList.toggle('toggle');


    
document.querySelector('.burger div').onclick = () =>{
  navigation.classList.remove('active');
};


 
    
});





//for the pop ups

//trapsoman



const pop = document.querySelector("#trap-btn");
const trapsoman = document.querySelector(".trapsoman");

pop.addEventListener("click", ()=>{

    pop.classList.toggle("active");
    trapsoman.classList.toggle("active");
    

});


document.querySelector('#close-btn').onclick = () =>{
    trapsoman.classList.remove('active');
};


//For BluePrint

const pops = document.querySelector("#blue-btn");
const blueprint = document.querySelector(".blueprint");

pops.addEventListener("click", ()=>{

    pops.classList.toggle("active");
    blueprint.classList.toggle("active");
    

});


document.querySelector('#lose-btn').onclick = () =>{
    blueprint.classList.remove('active');
};


//for the albums prev and next

const album = document.querySelector('.album-content').children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page-num");
const maxItem = 1;
let index = 1;


const pagin = Math.ceil(album.length/maxItem);
console.log(pagin);


function showItems(){

    for(let i = 0; i < album.length; i++){
        album[i].classList.remove("show");
       album[i].classList.add("hide");

        if(i >= (index*maxItem) - maxItem && i < index*maxItem){ //means (1*8) - 8=0 
            //if index = 1 then (1*1) - 1=0
           album[i].classList.remove("hide");
           album[i].classList.add("show");
        }

    }

}


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



window.onload=function(){
    showItems();
   check();
}







var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});