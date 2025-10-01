const images=["car1.jpg","car2.jpg","car3.jpg"];
let index=0;
const slide=document.getElementById("slide");

function next(){
    if(index<images.length-1){
        index++;
    }
    else{
        index=0;
    }
    slide.src=images[index];

    
}