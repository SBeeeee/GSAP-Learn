function breaktext() {
    var h1 = document.querySelector("h1");
    var h1text = h1.textContent;
    console.log(h1text)
    var splittedtext = h1text.split("");
    var clutter = "";

    splittedtext.forEach(function (e) {
        clutter = clutter+`<span>${e}</span>`

    })

    h1.innerHTML = clutter
}
 breaktext()
gsap.from("h1 span",{
    y:50,
    opacity:0,
    duration:1,
    stagger:-0.15,
})