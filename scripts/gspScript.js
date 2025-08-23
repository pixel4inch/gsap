var tl = gsap.timeline({ yoyo: true, repeat: -1 });

tl.to("#box1", {
    x: 1500,
    duration: 2,
    borderRadus: "50%",
    delay: 0.5,


})

tl.to("#box2", {
    x: 1500,
    duration: 2,
    borderRadius: "50%",

})

tl.to("#box3", {
    x: 1500,
    duration: 2,
    borderRadius: "25%",

})

gsap.from("h1", {

    y: 60,
    duration: 2,
    delay: 0.5,
    repeat: -1,
    stagger: 1,
    yoyo: true,
    opacity: 0



})
