function breaktext() {
    var h1 = document.querySelector("h1");
    var h1text = h1.textContent;
    
    var splittedtext = h1text.split("");
    var halfValue=splittedtext.length/2

    var clutter = "";

    splittedtext.forEach(function (e,i) {
       if(i<halfValue){
         clutter = clutter+`<span class="a">${e}</span>`
       }
       else{
       clutter= clutter+`<span class="b">${e}</span>`
       }
    })

    h1.innerHTML = clutter
}
 breaktext()
gsap.from("h1 .a",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.15,
})

gsap.from("h1 .b",{
    y:50,
    opacity:0,
    duration:1,
    stagger:-0.15,
})