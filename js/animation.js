document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger) 
    const welcome = document.querySelector('.Welcome-title')
    /* Inicio */
    if(welcome){
        var tl = gsap.timeline();
        tl.from(".Welcome-title", {x: -50, opacity: 0}) 
        .from(".Welcome-title2", {  x: 50, opacity: 0 });
    
        /* QUEM SOMOS */
    
        const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".containerproposito",  // elemento que vai ativar a timeline
            }
          });
          const timeline2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".toProduto",  // elemento que vai ativar a timeline
              start: "top bottom",
            }
          });
        // Adiciona animações à timeline
          timeline
            .from(".contProp1", { y: 100, opacity: 0})
            .from(".iconMission", {y: -20})
            .to(".contProp1", { y: 0, opacity: 1 }, "<")
            .to(".iconMission", {y: 0, clearProps: "all" }, "<0.1")
           
            .from(".contProp2", { y: -100, opacity: 0})
            .from(".iconFlag", {y: -20})
            .to(".contProp2", { y: 0, opacity: 1 }, "<")
            .to(".iconFlag", {y: 0, clearProps: "all" }, "<0.1")

            .from(".contProp3", { y: 100, opacity: 0})
            .from(".iconHeart", {y: -20})
            .to(".contProp3", { y: 0, opacity: 1 })
            .to(".iconHeart", {y: 0, clearProps: "all" })

            timeline2
        /* Produto e sugestão*/ 

            .from(".toProduto ", { y: 100, opacity: 0})
            .to(".toProduto ", { y: 0, opacity: 1, duration: 0.5 })
    
    }

      /* ABA PRODUTOS*/
      const productSection = document.querySelector('.sectionProductImg1')
        if(productSection){
            var tl2 = gsap.timeline();
            //sequenced one-after-the-other
                gsap.from(".sectionProductImg1", {duration: 1, x: -100})
                gsap.to(".sectionProductImg1", {duration: 1, x: 0})
                gsap.from(".ProductText", {duration: 1, y: 100})
                gsap.to(".ProductText", {duration: 1, y: 0 });
        }
})