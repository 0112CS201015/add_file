var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function abcd4(){
  var t1=gsap.timeline({
    scrollTrigger:{
      trigger:"#box4",
      start:"top top",
      end:"+=" + (window.innerHeight*9),
      pin:true,
      scrub:1
  }
  })
  t1
  .to("#incirc",{
      ease:Power3,
      scale:700
  },"a")
  .to("#imga",{
    ease:Power3,
    y:305,
    scale:150
  },"a")
  .to("#imgb",{
    ease:Power3,
    x:631,
    scale:150
  },"a")
  .to("#imgc",{
    ease:Power3,
    y:-304,
    scale:150
  },"a")
  .to("#imgd",{
    ease:Power3,
    x:-631,
    scale:150
  },"a")
  .to(".l1",{
    scale:0,
    ease:Power3
  })
  .to("#incirc2",{
    scale:700,
    ease:Power3
  },"b")
  .to("#card h1",{
    delay:.08,
    height:"15%",
    ease:Power3
  },"b")
.to("#incirc2",{
  scale:0,
  ease:Power3
},"c")
.to("#card h1",{
  fontSize:"80px",

  ease:Power3
},"c")
.to("#card",{
  width:"100%",
  height:"100%",
  ease:Power3
},"c")
}
function abcd5(){

var t2=gsap.timeline({
  scrollTrigger:{
    trigger:"#box5",
    start:"top top",
    end:"+=" + (window.innerHeight*9),
    pin:true,
    scrub:1
}
})
t2
.to("#box5 #ucircle",{

  scale:2,
ease:Power3
},"f")
.to("#divimg2",{
    ease:Power3,
    y:-400
},"f")
.to("#divimg1",{
  ease:Power3,
  y:-400
},"f")
.to("#ucircle h1",{
  // delay:.2,
  fontSize:"80px",
  ease:Power3
},"f")
.to("#ucircle h1",{
  // delay:.2,
  opacity:0,
  ease:Power3
},"l")
.to("#box5 #ucircle1",{
  y:-500,
  ease:Power3
},"l")
.to("#divimg3",{
  ease:Power3,
  y:-600
},"l")
.to("#divimg4",{
ease:Power3,
y:-600
},"l")
.to("#box5 #ucircle1",{
  scale:3,
  ease:Power3
},"g")
.to("#divimg3",{
  ease:Power3,
  y:-1200
},"g")
.to("#divimg4",{
ease:Power3,
y:-1200
},"g")
.to("#content1 h1",{
 y:-600,
 ease:Power3
},"g")
.to("#content1 #text",{
  y:-400,
 ease:Power3
},"g")
.to("#content1 #arrow img",{
  y:-400,
  ease:Power3
},"g")
.to("#content1 h1",{
  scale:1.5,
  ease:Power3
 })
 .to("#content1 #text",{
  rotate:"360deg",
  ease:Power3
 })
}
abcd4();
abcd5();


