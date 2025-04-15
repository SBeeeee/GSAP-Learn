//demo timeline along with scroll trigger 
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2", //beginnning og the page jisme scrolltrigger hoga 
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top -50%",
        scrub:2,
    }
})

//ab timeline jo uss page peye chalega
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})
tl2.from(".elem.line1.left",{
    x:300,
    opacity:0,
    duration:1
},"anim")
tl2.from(".elem.line1.right",{
    x:-300,
    opacity:0,
    duration:1
},"anim") //anim or any other thing written here says that both the animations will take place at the same time 
 