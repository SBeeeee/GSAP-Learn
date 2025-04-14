gsap.to("#box",{
    x:300,
    y:200,
    duration:2,
    delay:1,
    repeat:2,
    yoyo:true //jaake wapis ayega phir repeat karega normally wapis aata nahi aise e repeat karta hain
})
gsap.from("#box1",{
x:300,
y:400,
duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
})
gsap.from("h1",{
    opacity:0,
    duration:2,
    y:30,
    delay:1,
    repeat:2, //-1 dene peye chalta e rahega
    stagger:-1 //ek ek karke ayega eksath nahi hoga 
})