
var t1=gsap.timeline({
  scrollTrigger:{
    trigger:"#main",
    start:"top top",

    scrub:1,
    marker:true
  }
});
t1
.to("#main #santa",{
  bottom:"270%",
  left:"290%",
  scale:2
},"a")
.to("#main #cloud1",{
  left:"-160%",
  ease:Power1
},"a")
.to("#main #cloud2",{
  right:"-160%",
  top:"230px",
  ease:Power1,
  
},"a")
.to("#main #moon",{
 top:"30%",
  ease:Power1
},"a")
.to("#main h1",{
  top:"-20%",
  ease:Power1,
  scale:2
},"a")
.to("#main #tree",{
  top:"90%",
  ease:Power1
},"a")





