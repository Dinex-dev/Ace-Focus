// FOR ANIMATION EFFCT IN HOMEE PAGE INTRO
// CDN JS FILE  
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
tl.to('.Home-text',{y: '0%', duration: 1.2, stagger: 0.5});
tl.to('.Home-slider',{y: '-100%', duration: 1.8, delay: 0.5});
tl.to('.Home-intro',{y: '-100%', duration: 1.2}, '-=1.1');