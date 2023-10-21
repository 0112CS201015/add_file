var t1=gsap.timeline( {
    scrollTrigger:{
    trigger:"#main",
    start:"top,top",
    marker:true,
    scrub:1,
    pin:true
}
});
t1
.to("h1",{
   
    marginTop:"-30px",
    ease:Power1
},"a")
.from("#box",{
   opacity:0,
   rotate:"-360deg",
   backgroundColor:"white"
},"a")
.to("h1",{
    scale:0,
    opacity:0,
    ease:Power1
})
