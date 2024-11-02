document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger) 
    const welcome = document.querySelector('.Welcome-title')
    const welcome2 = document.querySelector('.Welcome-title2')

    /* Inicio */
    if(welcome){
        welcome.style.transform = 'translateX(-50px)';
        welcome.style.opacity = '0';
        welcome2.style.transform = 'translateX(50px)';
        welcome2.style.opacity = '0';
        var tl = gsap.timeline();
        tl.to(".Welcome-title", {  duration: 1.5, x: 0, opacity: 1 }) 
        .to(".Welcome-title2", {  x: 0, opacity: 1 });
    
        /* QUEM SOMOS */
    
        const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".containerproposito",  // elemento que vai ativar a timeline
            }
          });
          const timeline2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".toProduto",  // elemento que vai ativar a timeline
            }
          });
        // Adiciona animações à timeline
          timeline
            .from(".contProp1", { y: 100, opacity: 0})
            .to(".contProp1", { y: 0, opacity: 1, duration: 0.5 })
    
            .from(".contProp2", { y: -100, opacity: 0})
            .to(".contProp2", { y: 0, opacity: 1, duration: 0.5 })
    
            .from(".contProp3", { y: 100, opacity: 0})
            .to(".contProp3", { y: 0, opacity: 1, duration: 0.5 })
            timeline2
        /* Produto e sugestão*/
            .from(".toProduto ", { y: 100, opacity: 0})
            .to(".toProduto ", { y: 0, opacity: 1, duration: 0.5 })
    
            .from(".sugestaoContainer ", { y: 100, opacity: 0})
            .to(".sugestaoContainer ", { y: 0, opacity: 1, duration: 0.5 })    
    }

      /* ABA PRODUTOS*/

        var tl2 = gsap.timeline();
    //sequenced one-after-the-other
        gsap.from(".sectionProductImg1", {duration: 1, x: -100})
        gsap.to(".sectionProductImg1", {duration: 1, x: 0})
        gsap.from(".ProductText", {duration: 1, y: 100})
        gsap.to(".ProductText", {duration: 1, y: 0 });

        
})