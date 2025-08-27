gsap.to(".page h1",{
  transform:"translate(-108%",

  scrollTrigger:{
    trigger:".page ",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
  scrub:1,
  pin:true
  }
})

gsap.to(".page1 h1",{
  transform:"translate(90%",

  scrollTrigger:{
    trigger:".page1 ",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
  scrub:1,
  pin:true
  }
})
gsap.to(".page2 h1",{
  transform:"translate(-108%",

  scrollTrigger:{
    trigger:".page2 ",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
  scrub:1,
  pin:true
  }
})