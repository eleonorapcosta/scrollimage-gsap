
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './style.css'

gsap.registerPlugin(ScrollTrigger)

const revealAnim = document.querySelectorAll('.revealImg')

  revealAnim.forEach((section) =>{
    ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
      
        markers: true,
        scrub:5,
        onEnter: () => gsap.to(section, {
          scale: 1,
          easing: 'easeInOut',
          duration: 1.5,
        }),
        onLeaveBack: () => gsap.to(section, {
          scale: 1.2,
          easing: 'easeInOut',
          duration: 1.5,
        })
      });
  })

