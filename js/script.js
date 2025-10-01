const images=["images/car1.jpg","images/car2.jpg","images/car3.jpg"];
let index=0;
const slide=document.getElementById("slide");

function next(){
    if(index < images.length - 1){
        index++;
    }
    else{
        index = 0;
    }
    slide.src = images[index];
}

function prev(){
    if(index > 0){
        index--;
    }
    else{
        index = images.length - 1;
    }
    slide.src = images[index];
}