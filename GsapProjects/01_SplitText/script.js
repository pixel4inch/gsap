document.addEventListener('DOMContentLoaded', () => {
      // register plugin (note capital P)
      gsap.registerPlugin(SplitText);

      // create SplitText instance
      const split = new SplitText(".box1-text", { 
        type: "chars, words, lines",
        wordsClass: "words",
        propIndex:true,
        //  charsClass:"chars++",
        //  linesClass: "lines", 
         
    });

      // animate words
      gsap.from(split.lines, {
        // rotation: 90,
        // tranformZ: 1000,
        // duration:0.8,
        // perspective: 800,
        // delay: 0.5,
        // opacity: 0,
        // yoyo: true,
        // repeat: -1,
        // stagger:0.2,
        // ease: "power2.inOut"
      });
    });