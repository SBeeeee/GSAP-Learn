var main =document.querySelector("#main");
var cursor =document.querySelector("#cursor");
var imagediv =document.querySelector("#image");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
       duration:1,
    
    })
})


imagediv.addEventListener("mouseenter",function(){
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:4,
    })
})

imagediv.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
    })
})