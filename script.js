

function init() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}

init();
var crs = document.querySelector(".cursor")
var main = document.querySelector(".main")
var mw = document.querySelector(".new")

main.addEventListener("mousemove",function(dets){
  gsap.to(crs,{
    left:dets.x,
    top:dets.y

})
})
mw.addEventListener("mousemove",function(){
  gsap.to(".cursor p",{
    opacity:1,
    duration:0.1
})
gsap.to(".cursor",{
  backgroundColor:"transparent"
})

})
mw.addEventListener("mouseleave",function(){
   
  gsap.to(".cursor",{
    backgroundColor:"blueviolet"
})
   gsap.to(".cursor p",{
     opacity:0,
 })
 })




var tl = gsap.timeline({

    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
       
        start:"top 20%",
        end:"top 0",
        scrub:3

    }

})
tl.to(".page1 h1",{
    x:-80,
    duration:0.2,
    
},"anim" )
tl.to(".page1 h2",{
    x:80,
    duration:0.2,
    
},"anim" )

tl.to(".page1 video",{
    scale:1.6,
    duration:0.2,
    
},"anim")

var tl2 = gsap.timeline({

  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
     
      start:"top -99%",
      end:"top -127%",
      scrub:1

  }

})
tl2.to(".main",{
  backgroundColor:"white"
},"page2")
tl2.to(".page2",{
  color:"black"
},"page2")
tl2.to(".cursor",{
  backgroundColor:"black"
},"page2")


var tl3 = gsap.timeline({

  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
     
      start:"top -360%",
      end:"top -250%",
      scrub:1

  }

})

tl3.to(".main",{
  backgroundColor:"black",
  duration:1,
  
})

var box =document.querySelector(".box")
var big = document.querySelector(".page5")
var img = document.querySelector(".cursor .img")


big.addEventListener("mouseenter",function(){

gsap.to(crs,{
  backgroundColor:"transparent"
 })
})


var boxes =document.querySelectorAll(".box")
boxes.forEach(function(e){
var images = e.getAttribute("data-img")
  
  e.addEventListener("mousemove",function(){
    img.style.display="block"
    img.style.opacity=1

   img.style.backgroundImage=`url(${images})`
  

})

}
)


big.addEventListener("mouseleave",function(){
  img.style.opacity=0
  img.style.display="none"
  crs.style.backgroundColor="blueviolet"
  

})


gsap.to(".page1 h1",{

  x:80,
  duration:1

})

gsap.to(".page1 h2",{

   x:-80,
 duration:1

})
gsap.to(".page1 video",{

   y:20,
 duration:1

})
