gsap.to("#page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page2" ,//always use the parent here only 
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:4,
        pin:true//it makes the screen freeze over there until the animation khatam hota hain jaise ki idhar yeh experience word pura side mein scroll hoga tab e neeche jaa paunga 
    }
})