gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})

gsap.from("#page2 #box",{
    scale:0,
    
    duration:2,
    rotate:360,
   // scrollTrigger:"#page2 #box"  basic sa idhar scroll aane peye hoga aimation....
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:"true"  //1 se lekar 5 tak kuch value agar dedo to smoothness bar jayega //upore neeche flowing way mein karte raega ekbar hone ke baad ruk nahi jayega 
    }
})