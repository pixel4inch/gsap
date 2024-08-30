gsap.registerPlugin(ScrollTrigger);

gsap.to(".cube", {
    x: 1000,
    scale: 1.5,
    duration: 10,
    scrollTrigger: {
        trigger: ".cube",
        markers: {
            startColor: "red",
            endColor: "black",
            fontSize: "18px",
            fontWeight: 600,
            indent: 50
        },
        scrub: true,
        pin: true,
        //pin:".cube2"
        pinSpace: true,
        start: "top 80%",
        end: "bottom 20%",
        //end: () => `+= ${document.querySelector(".cube").offsetHeight}`,
        //toggleClass: "red"
        toggleActions: "restart reverse resume none",
        // play pause resume reverse restart complete none

    }

})