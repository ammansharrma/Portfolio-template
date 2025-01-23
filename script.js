// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var c = document.querySelector('#minicircle');
var h = document.querySelectorAll('.effec');




document.querySelectorAll('.effec').forEach(function(eff){
    eff.addEventListener("mousemove",function(dets){
        gsap.to(c,{
            scale:12,
            
        })
        document.getElementById("minicircle").style.mixBlendMode = "overlay";
        
    });
    eff.addEventListener("mouseleave",function(dets){
        gsap.to(c,{
            scale:1
        })
    
        document.getElementById("minicircle").style.mixBlendMode = "normal";
    });
})






function chotabada(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove", function(dets){
        xscale = gsap.utils.clamp(.8,1.4,dets.clientX-xprev);
        yscale = gsap.utils.clamp(.8,1.4,dets.clientY-yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        pointer(xscale,yscale);
    });
}


function pointer(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        // this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
        gsap.to(c,{
            x:dets.clientX,
            y:dets.clientY,
            duration:0.5,
            ease: Expo
        })
    });
}


function landinganime(){
    var tl = gsap.timeline();
    tl.from('#nav',{
        y:'-10',
        opacity: 0,
        duration : 1.2,
        ease: Expo.easeInOut
    })

    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
    })
    .from('#righttext',{
        opacity:0
    })
    .to('#righttext',{
        y:-10,
        duration : 0.8,
        delay: -0.8,
        ease: Expo.easeInOut
    })
    .from('#subscribe',{
        opacity:0
    })
    .to('#subscribe',{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
    })

    .from('#footer',{
        opacity : 0
    })

    .to('#footer',{
        duration : 0.8,
        delay: -0.8,
        ease: Expo.easeInOut
    })

}



chotabada();
landinganime();


// document.querySelectorAll(".element").forEach(function(elem){
//     var rotate = 0;
//     var diffrotate = 0;

//     elem.addEventListener("mouseleave",function(dets){
//         gsap.to(elem.querySelector("img"),{
//             opacity:0,
//             ease:Power3,
//             duration: 0.3
//         });
//     });
//     elem.addEventListener("mousemove",function(dets){
//         var diff = dets.clientY - elem.getBoundingClientRect().top;
//         diffrotate = dets.clientX - rotate;
//         rotate = dets.clientX;

//         gsap.to(elem.querySelector("img"),{
//             opacity:1,
//             ease:Power3,
//             top:diff,
//             left: dets.clientX,
//             rotate: gsap.utils.clamp(-20,20,diffrotate*0.5)
//         });
//     });
// });

document.querySelectorAll(".element").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    var imgh = (elem.querySelector("img").height/2);
    var imgw = (elem.querySelector("img").width/2);
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff- imgh,
        left: dets.clientX-imgw,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        
      });
    });
  });