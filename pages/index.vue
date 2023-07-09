<template>
  <div class='bg-black cursor-none'>
    <div class="relative z-[9999999] hidden xl:block">
      <div class="cursor"></div>
      <div class="cursor-follower"></div>
    </div>
    <div class="hidden md:block">
      <div class="btn" id="toggle-btn">
        <div class="btn-outline btn-outline-1"></div>
        <div class="btn-outline btn-outline-2"></div>
        <div id="hamburger">
          <span></span>
        </div>
      </div>

      <div class="overlay hidden md:block">
        <svg viewBox="0 0 1000 1000">
          <path d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
      </div>

      <div class="menu bg-white hidden md:block">
        <div class="primary-menu">
          <div class="menu-container">
            <div class="wrapper">
              <div class="menu-item link-cursor">
                <a href="#work">Work</a>
                <div class="menu-item-revealer"></div>
              </div>
              <div class="menu-item link-cursor">
                <a href="#about-section">About</a>
                <div class="menu-item-revealer"></div>
              </div>
              <div class="menu-item link-cursor">
                <a href="#connect">Contact</a>
                <div class="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-menu md:hidden text-white flex gap-x-6 text-sm sm:gap-x-12 sm:text-base pt-5 pr-8 justify-end">
      <div class="menu-item">
        <a href="#work">Work</a>
      </div>
      <div class="menu-item">
        <a href="#about-section">About</a>
      </div>
      <div class="menu-item">
        <a href="#connect">Contact</a>
      </div>
    </div>
    <div class="bg-black relative z-[9]">
      <div class="container">
        <div class="py-14 sm:py-20 xl:py-28 3xl:py-40">
          <div class="w-full">
            <h3 class="text-body uppercase pl-2 sm:pl-16 md:pl-8 lg:pl-4 xl:pl-36 3xl:pl-16 4xl:pl-48 font-light tracking-[9px]">Nivedha Arun</h3>
            <div class="py-6 sm:py-12 lg:py-16 xl:py-24 3xl:py-12 min-w-[280px] max-w-[280px] sm:min-w-[490px] sm:max-w-[490px] md:min-w-[660px] md:max-w-[660px] lg:min-w-[850px] lg:max-w-[850px] 2xl:min-w-[1030px] 2xl:max-w-[1030px] 3xl:min-w-[1310px] 3xl:max-w-[1310px] w-fit mx-auto">
              <svg class="hero-title" width="80%" height="100%">
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stop-color="#D3D3D3" />
                    <stop offset="100%" stop-color="rgba(211, 211, 211, 0)" />
                  </linearGradient>
                </defs>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="none" stroke="url(#gradient)" stroke-width=".5px" stroke-linejoin="round">
                  CREATIVE
                </text>
              </svg>
              <div class="flex font-clash leading-[1] text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] 2xl:text-[160px] 3xl:text-[200px] text-primary -mt-4 sm:-mt-8 md:-mt-12 2xl:-mt-20 3xl:-mt-24">
                <h1 id="typed-text" class="w-fit"></h1>
              </div>
            </div>
          </div>
          <div class="w-fit mx-auto flex sm:mt-5 gap-x-8 view-on-scroll">
            <a href="#things-i-do" class="hidden sm:flex flex-col items-center">
              <div class="w-10 h-14 md:w-12 md:h-20 rounded-full bg-black border border-primary"></div>
              <div class="arrow-line w-[1px] h-[120px] md:h-[155px] rounded-full bg-primary -mt-4 relative before:content[''] before:absolute before:bottom-[6px] before:left-[-2px] before:w-4 before:h-[1.5px] before:bg-primary before:-rotate-45 after:content[''] after:absolute after:bottom-[6px] after:left-[-13px] after:w-4 after:h-[1.5px] after:bg-primary after:rotate-45"></div>
            </a>
            <p class="view-on-scroll text-white max-w-[280px] font-extralight md:font-light text-sm md:text-lg">
              Developer with 5 years of experience and a natural flair for design, I specialize in creating visually appealing, functional, and interactive user experiences by combining the best of design and development.
            </p>
          </div>
        </div>
      </div>
      <div id="things-i-do" class="container">
        <div class="pb-12 sm:pb-20 xl:pb-28">
          <h3 class="text-xl text-gray-400 view-on-scroll">Things I do</h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-3 justify-center items-center mt-8 view-on-scroll">
            <div class="flex flex-col sm:gap-y-3">
              <svg id="dev" class="categories hover-item z-50" width="50%" height="100%">
                  <text id="dev-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="none" stroke="#ffffff" stroke-width=".5px" stroke-linejoin="round">
                    DEV
                  </text>
              </svg>
              <div class="dev-description mb-8 mt-2 text-gray-400 text-sm max-w-xs block sm:hidden"> JavaScript, CSS, HTML, jQuery, Vue.js, React, Sass, Tailwind CSS, Git, Node.js, MySQL</div>
              <svg id="design" class="categories hover-item z-50" width="85%" height="100%">
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="none" stroke="#ffffff" stroke-width=".5px" stroke-linejoin="round">
                  DESIGN
                </text>
              </svg>
              <div class="dev-description mb-8 mt-2 text-gray-400 text-sm max-w-xs block sm:hidden"> Figma, Illustrator, UI/UX, Webflow, Prototyping, Procreate, Visual Design</div>
              <svg id="motion" class="categories hover-item z-50" width="92%" height="100%">
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="none" stroke="#ffffff" stroke-width=".5px" stroke-linejoin="round">
                  MOTION
                </text>
              </svg>
              <div class="dev-description mb-8 mt-2 text-gray-400 text-sm max-w-xs block sm:hidden"> After Effects, SVG Animations, Svgator, GSAP, Three.js, Interaction Design</div>
            </div>
            <div>
              <span class="hidden sm:block content"></span>
            </div>
          </div>
        </div>
      </div>
      <!-- Alternate Sections -->
      <div id="work" class="container">
        <h3 class="text-xl text-gray-400 view-on-scroll">Recent work</h3>
        <div class="gallery sm:flex">
          <div class="left w-full sm:w-2/4">
            <div class="detailsWrapper mx-auto w-full sm:w-4/5">
              <div class="details sticky top-0 bg-black sm:relative sm:top-auto h-screen flex flex-col justify-center">
                <div class="view-on-scroll text text-white text-xs sm:text-sm max-w-md flex flex-wrap gap-y-2 gap-x-5 mb-3">
                  <span class="border border-white px-4 py-2 md:py-3 rounded-full">Web Development</span> 
                  <span class="border border-white px-4 py-2 md:py-3 rounded-full">Animations</span>
                </div>
                <div class="view-on-scroll headline text-primary font-clash text-3xl xl:text-6xl 2xl:text-7xl pt-2 uppercase font-normal mb-5 md:mb-14">Chargebee Rebrand</div>
                <div class="bg-primary mb-8 block sm:hidden">
                  <img src="../static/assets/image/work1.png" alt="Scrolling Image" />  
                </div>
                <a href="/" class="work-img view-on-scroll btn-view-more flex items-center">
                  <svg viewBox="0 0 44 40" fill="none" class="w-9 mx-auto">
                    <path d="M5.30096 25.6015L38.8041 13.7456" stroke="white"/>
                    <path d="M20.2838 4.90671L38.8039 13.7452L29.9654 32.2653" fill="none" stroke="white"/>
                  </svg>
                </a>
              </div>

              <div class="details sticky top-0 bg-black sm:relative sm:top-auto h-screen flex flex-col justify-center">
                <div class="view-on-scroll text text-white text-xs sm:text-sm max-w-md flex flex-wrap gap-y-2 gap-x-5 mb-3">
                  <span class="border border-white px-4 py-2 md:py-3 rounded-full">Web Development</span> 
                  <span class="border border-white px-4 py-2 md:py-3 rounded-full">Animations</span>
                </div>
                <div class="view-on-scroll headline text-primary font-clash text-3xl xl:text-6xl 2xl:text-7xl pt-2 uppercase font-normal mb-5 md:mb-14">Component Library</div>
                <div class="bg-primary mb-8 block sm:hidden">
                  <img src="../static/assets/image/work2.png" alt="Scrolling Image" />  
                </div>
                <a href="/" class="work-img view-on-scroll btn-view-more flex items-center">
                  <svg viewBox="0 0 44 40" fill="none" class="w-9 mx-auto">
                    <path d="M5.30096 25.6015L38.8041 13.7456" stroke="white"/>
                    <path d="M20.2838 4.90671L38.8039 13.7452L29.9654 32.2653" fill="none" stroke="white"/>
                  </svg>
                </a>
              </div>

              <div class="details sticky top-0 bg-black sm:relative sm:top-auto h-screen flex flex-col justify-center">
                <div class="view-on-scroll text text-white text-xs sm:text-sm max-w-md flex flex-wrap gap-y-2 gap-x-5 mb-3">
                  <span class="border border-white px-4 py-2 md:py-3 rounded-full">Web Development</span> 
                  <span class="border border-white px-4 py-2 md:py-3 rounded-full">Animations</span>
                </div>
                <div class="view-on-scroll headline text-primary font-clash text-3xl xl:text-6xl 2xl:text-7xl pt-2 uppercase font-normal mb-5 md:mb-14">SVG Animations</div>
                <div class="bg-primary mb-8 block sm:hidden">
                  <img src="../static/assets/image/work3.png" alt="Scrolling Image" />  
                </div>
                <a href="/" class="work-img view-on-scroll btn-view-more flex items-center">
                  <svg viewBox="0 0 44 40" fill="none" class="w-9 mx-auto">
                    <path d="M5.30096 25.6015L38.8041 13.7456" stroke="white"/>
                    <path d="M20.2838 4.90671L38.8039 13.7452L29.9654 32.2653" fill="none" stroke="white"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>
          <div class="right work-img">
            <div class="photos self-end">
              <img src="../static/assets/image/work1.png" alt="Scrolling Image" />
            </div>
          </div>
        </div>
      </div>
      <!-- Alternate Sections -->

      <!-- <div id="works" class="container">
        <div class="py-12 sm:py-20">
          <h3 class="text-xl text-gray-400">Recent Works</h3>
          <div class="gallery">
            <div class="left">
              <div class="detailsWrapper">
                <div class="details mt-24">
                  <div class="headline text-primary font-clash text-7xl pt-2 uppercase font-normal">Chargebee Rebrand</div>
                  <div class="text text-white max-w-md">I have a passion for crafting design ideas and putting them to the test within technical boundaries. It's truly magical to see those ideas come alive with real code.</div>
                </div>

                <div class="details">
                  <div class="headline text-primary font-clash text-7xl pt-2 uppercase font-normal">Component Library</div>
                  <div class="text text-white max-w-md">I have a passion for crafting design ideas and putting them to the test within technical boundaries. It's truly magical to see those ideas come alive with real code.</div>
                </div>

                <div class="details">
                  <div class="headline text-primary font-clash text-7xl pt-2 uppercase font-normal">SVG Animations</div>
                  <div class="text text-white max-w-md">I have a passion for crafting design ideas and putting them to the test within technical boundaries. It's truly magical to see those ideas come alive with real code.</div>
                </div>
              </div>
            </div>

            <div class="right">
              <div class="photos mt-24">
                <img src="../static/assets/image/work1.png" alt="Scrolling Image" />
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="container">
        <div class="py-12 sm:py-20">
          <section id="zoom-out" class="flex flex-col justify-center items-center">
                <h2 class="text-white w-fit text-4xl pt-7 z-0">Recent Works</h2>
          </section>
        <div class="">
          <div class="card-1 flex items-center sticky top-0 h-screen py-20">
            <a href="" class="grid grid-cols-1 gap-y-5 md:grid-cols-2 gap-x-10 h-full bg-[#101010] rounded-2xl">
              <div class="self-center">
                <div class="pl-20">
                  <div class="view-on-scroll headline text-primary font-clash text-3xl xl:text-6xl 2xl:text-7xl pt-2 uppercase font-normal">Chargebee Rebrand</div>
                  <div class="view-on-scroll text text-white max-w-md">Web Development / Components/ Animations</div>
                </div>
              </div>
              <div class="bg-primary">
                <img src="../static/assets/image/work1.png" alt="Scrolling Image" />
              </div>
            </a>
          </div>
          <div class="card-1 flex items-center sticky top-0 h-screen py-20">
            <a href="" class="grid grid-cols-1 gap-y-5 md:grid-cols-2 gap-x-10 h-full bg-[#101010] rounded-2xl">
              <div class="self-center">
                <div class="pl-20">
                  <div class="view-on-scroll headline text-primary font-clash text-3xl xl:text-6xl 2xl:text-7xl pt-2 uppercase font-normal">Chargebee Rebrand</div>
                  <div class="view-on-scroll text text-white max-w-md">Web Development / Components/ Animations</div>
                </div>
              </div>
              <div class="bg-primary">
                <img src="../static/assets/image/work1.png" alt="Scrolling Image" />
              </div>
            </a>
          </div>
          <div class="card-1 flex items-center sticky top-0 h-screen py-20">
            <a href="" class="grid grid-cols-1 gap-y-5 md:grid-cols-2 gap-x-10 h-full bg-[#101010] rounded-2xl">
              <div class="self-center">
                <div class="pl-20">
                  <div class="view-on-scroll headline text-primary font-clash text-3xl xl:text-6xl 2xl:text-7xl pt-2 uppercase font-normal">Chargebee Rebrand</div>
                  <div class="view-on-scroll text text-white max-w-md">Web Development / Components/ Animations</div>
                </div>
              </div>
              <div class="bg-primary">
                <img src="../static/assets/image/work1.png" alt="Scrolling Image" />
              </div>
            </a>
          </div>
        </div>
        </div>
      </div> -->
      <div id="about-section" class="container">
        <div class="pb-12 sm:pb-20 xl:pb-28">
          <h3 class="text-xl text-gray-400 mb-6 view-on-scroll">About</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-7">
            <div id="sample-text" class="wrapper sm:mb-24">
              <div class="line uppercase text-primary font-clash text-4xl xl:text-7xl font-normal">
                    <span>Developer by</span>
              </div>
              <div class="line uppercase text-primary font-clash text-4xl xl:text-7xl font-normal">
                    <span>Trade,</span>
              </div>
              <div class="line uppercase text-primary font-clash text-4xl xl:text-7xl font-normal">
                    <span>Designer by</span>
              </div>
              <div class="line uppercase text-primary font-clash text-4xl xl:text-7xl font-normal">
                  <span>Heart</span>
              </div>
            </div>
            <div class="max-w-sm font-light self-end justify-start sm:justify-self-center view-on-scroll">
              <p class="text-gray-300">
                I have a passion for crafting design ideas and putting them to the test within technical boundaries. It's truly magical to see those ideas come alive with real code.
              </p>
              <p class="text-gray-300 mt-3">
                This exciting process fuels my creativity, as genuine expertise arises from a profound understanding of both realms. Together, let's create extraordinary digital experiences that will leave a lasting impression!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="connect" class="bg-primary bottom-0 sticky z-[1] h-[60vh] max-h-80 md:max-h-96 xl:max-h-[33rem] sm:h-[50vh] md:h-[70vh]">
      <div class="container flex flex-col justify-between h-full py-7 md:py-16">
        <div class="sm:mt-10 md:mt-8 2xl:mt-24">
          <h3 class="text-black text-lg mb-3">Want to know more?</h3>
          <h2 class="view-on-scroll font-clash text-black text-5xl sm:text-5xl xl:text-9xl uppercase">Let's Talk</h2>
        </div>
        <div class="flex flex-col-reverse md:flex-row gap-y-4 md:items-center md:justify-between">
          <div>
            <p class="text-black text-base sm:text-lg font-light">Designed and Coded with ❤️</p>
          </div>
          <div class="flex flex-row flex-wrap gap-x-4 sm:gap-x-2 xl:gap-x-7 gap-y-1">
            <a class="text-base sm:text-lg text-black hover:text-gray-800" href="/">Email</a>
            <a class="text-base sm:text-lg text-black hover:text-gray-800" href="/">LinkedIn</a>
            <a class="text-base sm:text-lg text-black hover:text-gray-800" href="/">Dribbble</a>
            <a class="text-base sm:text-lg text-black hover:text-gray-800" href="/">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';
import TagCloud from 'TagCloud';
import gsap from 'gsap';
import { Power2 } from 'gsap';

// import SplitType from 'split-type';

export default {
  name: 'IndexPage',
  head() {
    return {
      script: [
        {
          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CSSRulePlugin3.min.js',
          async: true,
          defer: true
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
          async: true,
          defer: true
        }
      ]
    };
  },
  data: () => ({
      skills : [
        'JavaScript', 'CSS', 'HTML',  
        'jQuery', 'Vue.js', 'React',  
        'Sass', 'Tailwind CSS', 'Git',  
        'Node.js', 'MySQL',
      ],
      tagCloud: ''
  }),

  methods: {
    setClass: function (item, viewportWidth) { 
      var self = this;
      let radius = '';
      let newSkills = [];
      switch (item.id) {
        case 'dev':
          newSkills = [
            'JavaScript', 'CSS', 'HTML',  
            'jQuery', 'Vue.js', 'React',  
            'Sass', 'Tailwind CSS', 'Git',  
            'Node.js', 'MySQL',
          ];
          if (viewportWidth < 1280) {
            radius = 170;
          }
          else{
            radius = 250;
          } 
          break;
        case 'design':
          newSkills = [
            'Figma', 'Illustrator', 'UI/UX', 
            'Webflow', 'Prototyping', 'Procreate',
            'Visual Design'
          ];
          if (viewportWidth < 1280) {
            radius = 170;
          }
          else{
            radius = 200;
          } 
          break;
        case 'motion':
          newSkills = [
            'After Effects', 'SVG Animations', 'Svgator', 
            'GSAP', 'Three.js', 'Interaction Design'            
          ];
          if (viewportWidth < 1280) {
            radius = 170;
          }
          else{
            radius = 240;
          }
          break;
        default:  
          newSkills = self.skills;
          break;
      }

      self.tagCloud.destroy();
      self.tagCloud = TagCloud('.content', newSkills, {
        radius: radius,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 135,
        keep: true
    });
    },
  },

  mounted() {
    let self = this;
      gsap.registerPlugin(ScrollTrigger); 
      const typed = new Typed('#typed-text', {
        strings: ['DEVELOPER', 'DESIGNER'],
        stringsElement: null,
        typeSpeed: 60,
        backSpeed: 20,
        backDelay: 2000,
        cursorChar: "|",
        loop: true,
        loopCount: Infinity,
      });

      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      let radius = 250;

      if (viewportWidth < 1280) {
        radius = 170;
      }

      var images = document.querySelectorAll('.hover-item');
      images.forEach((item) => {
        item.addEventListener('mouseover', () => {
          this.setClass(item, viewportWidth);
        });
      }) 

      self.skills = [
        'JavaScript', 'CSS', 'HTML',  
        'jQuery', 'Vue.js', 'React',  
        'Sass', 'Tailwind CSS', 'Git',  
        'Node.js', 'MySQL',
      ];

      if(TagCloud){
        self.tagCloud = TagCloud('.content', self.skills,{
          radius: radius,
          maxSpeed: 'normal',
          initSpeed: 'normal',
          direction: 135,
          keep: true
        });
      }

      document.querySelector('.content').style.color = '#D3D3D3';

      const { innerHeight } = window;
    
      // if(gsap){
      // gsap.from("#zoom-out h2", {
      //     scale: 50,
      //     stagger: 0.25,
      //     duration: 3,
      //     scrollTrigger: {
      //       trigger: "#zoom-out",
      //       pin: true,
      //       end: `+=${innerHeight * 2}`,
      //       scrub: 3,
      //       // markers: true,
      //     }
      //   });
      // }

      // let tl = gsap.timeline({defaults: {ease: "SloMo.easeOut"}});
      // tl.to('#about-title', {
      //   y: '0%',
      //   duration: 0.7,
      //   stagger: 0.2,
      //   scrollTrigger: {
      //     trigger: "#about-section",
      //     start: "top 80%",
      //     end: "bottom 20%",
      //     toggleActions: "play none none reverse",
      //     once: true
      //   }
      // })

      const section = document.querySelector('.section');
      // const lines = document.querySelector('.line');

      const textrev = gsap.timeline({
          scrollTrigger: {
              trigger: '#sample-text',
              start: 'top center',
              end: 'bottom center',
              scrub: false,
          },
      });

      textrev.from(".line span", 1.8, {
          y: 200,
          ease: 'power4.out',
          skewY: 10,
          stagger: { amount: 0.4 },
          duration: 0.5,
      });
      // });

      const elements = gsap.utils.toArray('.view-on-scroll');

      elements.forEach((elem, i) => {
        const anim = gsap.fromTo(elem, {autoAlpha: 0, y: 50}, {duration: 0.5, delay:0.2 , autoAlpha: 1, y: 0});
        ScrollTrigger.create({
          trigger: elem,
          animation: anim,
          toggleActions: 'play none none none',
          once: true,
        });
      });

      ScrollTrigger.create({
        trigger:".gallery",
        start:"top top",
        end:"bottom bottom",
        pin:".right",
        onUpdate: (self) => {
          const scrollProgress = self.progress.toFixed(2);
          const imageIndex = Math.floor(scrollProgress * 2) + 1; // Adjust the number of images and calculations as per your requirement
          const imageUrl = require(`@/static/assets/image/work${imageIndex}.png`);
          const imageElement = document.querySelector('.photos img');
          imageElement.src = imageUrl;
          imageElement.alt = `Image ${imageIndex}`;
          imageElement.classList.add('zoom-in');
          // imageElement.alt = `Image ${imageIndex}`;
        }
      })

      const cursor = document.querySelector(".cursor");
      const overlay = document.querySelector(".overlay");
      const follower = document.querySelector(".cursor-follower");
      const card = document.querySelectorAll(".work-img");
      const link = document.querySelectorAll(".link-cursor");

      let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

      gsap.to({}, 0.02, {
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          follower.style.left = `${posX - 20}px`;
          follower.style.top = `${posY - 20}px`;

          cursor.style.left = `${mouseX}px`;
          cursor.style.top = `${mouseY}px`;
        }
      });

      document.addEventListener("mousemove", (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
      });

      card.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.classList.add("active");
          follower.classList.add("active");
        });

        el.addEventListener("mouseleave", () => {
          cursor.classList.remove("active");
          follower.classList.remove("active");
        });
      });

      link.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.classList.add("link-active");
          follower.classList.add("link-active");
        });

        el.addEventListener("mouseleave", () => {
          cursor.classList.remove("link-active");
          follower.classList.remove("link-active");
        });
      });

      // overlay.addEventListener("mouseenter", () => {
      //   cursor.classList.add("overlay-active");
      //   follower.classList.add("overlay-active");
      // })

      // overlay.addEventListener("mouseleave", () => {
      //   cursor.classList.remove("overlay-active");
      //   follower.classList.remove("overlay-active");
      // })

      const tl = gsap.timeline({ paused: true});

      let path = document.querySelector("path");
      let spanBefore = CSSRulePlugin.getRule("#hamburger span::before");

      gsap.set(spanBefore, {
        background: '#000'
      });
      gsap.set(".menu", { visibility: "hidden"});

      function revealMenu() {
        revealMenuItems();

        const hamburger = document.getElementById("hamburger");
        const toggleBtn = document.getElementById("toggle-btn");

        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((menuItem) => {
          menuItem.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1); // Get the target section id

            // Close the overlay
            hamburger.classList.remove("active");
            toggleBtn.classList.remove("active");
            cursor.classList.remove("overlay-active");
            follower.classList.remove("overlay-active");
            overlay.classList.remove("overlay-active");
            tl.reversed(!tl.reversed());

            // Scroll to the target section
            if(targetId == 'connect'){
              console.log("Connect clicked")
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
              });
            }
            else{
              const targetSection = document.getElementById(targetId);
              targetSection.scrollIntoView({ behavior: "smooth" });
            }
          });
        });

        toggleBtn.onclick = function (e) {
          hamburger.classList.toggle("active");
          toggleBtn.classList.toggle("active");
          cursor.classList.toggle("overlay-active");
          follower.classList.toggle("overlay-active");
          overlay.classList.toggle("overlay-active");
          tl.reversed(!tl.reversed());
        };
      }

      revealMenu();

      function revealMenuItems() {
        const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
        const path = document.querySelector(".overlay path");

        const power2 = "power2.inOut";
        const power4 = "power4.inOut";

        tl.to(
          "#hamburger span",
          1,
          {
            x: -40,
            y: 40,
            transform: 'rotate(0)',
            background: "#000000",
            ease: power2,
          },
          "<"
        );

        tl.to(".btn .btn-outline", 1.25, {
          x: -40,
          y: 40,
          width: "140px",
          height: "140px",
          ease: power4,
        },
        "<"
        );
        tl.to(path, 1, {
          attr: {
            d: end,
          },
          ease: Power2.easeIn,
        },
        "-0.5"
        );

        tl.to(".menu", 1, {
          visibility: "visible",
        }, "-=0.5");

        tl.to(".menu-item > a", 1, {
          top: 0,
          ease: "power3.out",
          stagger: {
            amount: 0.5,
          },
        },
        "-=1"
        ).reverse()
      }
    }
}
</script>

<style lang="scss">
  svg.hero-title{
    font   : bold 40px ClashDisplay-Semibold, Arial;
    height : 40px;

    @media(max-width: 640px){
      width: 75%;
    }

    @media(min-width: 640px){
      font   : bold 70px ClashDisplay-Semibold, Arial;
      height : 70px;
    }

    @media(min-width: 768px){
      font   : bold 100px ClashDisplay-Semibold, Arial;
      height : 100px;
    }

    @media(min-width: 1024px){
      font   : bold 130px ClashDisplay-Semibold, Arial;
      height : 120px;
    }

    @media(min-width: 1440px){
      font   : bold 160px ClashDisplay-Semibold, Arial;
      height : 170px;
    }

    @media(min-width: 1600px){
      font   : bold 200px ClashDisplay-Semibold, Arial;
      height : 220px;
    }

    text{
      fill            : none;
      stroke-width    : .5px;
      stroke-linejoin : round;
    }
  }

  .arrow-line{
    background: linear-gradient(#8F20FF44, #8F20FF);
  }

  svg.categories{
    font   : bold 42px ClashDisplay-Semibold, Arial;
    height : 40px;

    @media(min-width: 640px){
      font: bold 80px ClashDisplay-Semibold, Arial;
      height: 80px;
    }

    @media(min-width: 768px){
      font: bold 100px ClashDisplay-Semibold, Arial;
      height: 100px;
    }

    @media (min-width: 1024px){
      font: bold 90px ClashDisplay-Semibold, Arial;
      height: 90px;
    }

    @media (min-width: 1280px){
      font: bold 110px ClashDisplay-Semibold, Arial;
      height: 110px;
    }

    @media (min-width: 1440px){
      font: bold 140px ClashDisplay-Semibold, Arial;
      height: 130px;
    }

    @media(min-width: 1600px){  
      font: bold 150px ClashDisplay-Semibold, Arial;
      height: 150px;
    }

    @media(min-width: 1700px){
      font   : bold 160px ClashDisplay-Semibold, Arial;
      height : 160px;
    }

    &:hover{
      text{
        fill: #8F20FF;
        stroke : #8F20FF;
        transition: fill 0.2s ease;
      }
    }

    &:nth-child(1){
      width: 32%;

      @media(min-width: 375px){
        width: 90px;
      }

      @media(min-width: 640px){
        width: 30%;
      }

      @media(min-width: 768px){
        width: 34%;
      }

      @media(min-width: 1024px){
        width: 48%;
      }

      @media(min-width: 1700px){
        width: 50%;
      }

      @media(min-width: 1920px){
        width: 43%;
      }
    }

    &:nth-child(3){
      width: 56%;

      @media(min-width: 375px){
        width: 160px;
      }

      @media(min-width: 640px){
        width: 52%;
      }

      @media(min-width: 768px){
        width: 57%;
      }

      @media(min-width: 1024px){
        width: 83%;
      }

      @media(min-width: 1700px){
        width: 88%;
      }

      @media(min-width: 1920px){
        width: 75%;
      }
    }

    &:nth-child(5){
      width: 62%;

      @media(min-width: 375px){
        width: 175px;
      }

      @media(min-width: 640px){
        width: 57%;
      }

      @media(min-width: 768px){
        width: 62%;
      }

      @media(min-width: 1024px){
        width: 90%;
      }

      @media(min-width: 1700px){
        width: 96%;
      }

      @media(min-width: 1920px){
        width: 82%;
      }
    }
  }

  .tagcloud {
    font-family: 'Poppins', sans-serif;  
    font-size: 20px;
    margin: auto;
    width: 80%;
  }

  .tagcloud--item{
    padding: 10px 20px;
    font-weight: 500;
    border: 1px solid #D3D3D3;
    border-radius: 50px;
  }

  .tagcloud--item:hover {
    color: #8F20FF;
    font-weight: 500;
    border: 1px solid #8F20FF;
  }

  .headline {
    width: 100%;
  }

  .right {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .connect-bg{
    background: linear-gradient(180deg, #1C0633 0%, #030303 100%);
  }

  .char{
    transform: translateY(115px);
    transition: transform 0.5s;
  }

  // #about-title{
  //   background-color: #000000;
  //   overflow: hidden;
  //   font-weight: bolder;
  // }

  // #about-title span{
  //   display: inline-block;
  //   transform: translateY(50%);
  // }

  .wrapper {
    // width: 100vw;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
  }

  .wrapper .line {
      width: 80%;
      height: 47px;
      position: relative;
      overflow: hidden;

      @media (min-width: 1280px) {
        height: 70px;
      }
  }
  .wrapper .line span {
      position: absolute;
  }

///////////@at-root
body {
	background:#EEF4FF;
	margin:0;
  cursor: none;
}

.headline {
	border-radius:6px;
	width:100%;
}

.right {
	width:50%;
	height:100vh;
	display:none;
	flex-direction:column;
	justify-content:center;

  @media (min-width: 640px){
    display: flex;
  }
}

.photos {
	width:40vw;
	height:40vw;
	background:#8F20FF;
}

.photos img {
  scale: 1;
}

.photos img.zoom-in {
  animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

.cursor {
	position: absolute;
	background: #ffffff;
	cursor: pointer;
	width: 16px;
	height: 16px;
	border-radius: 100%;
	z-index: 1;
	transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
		0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
	user-select: none;
	pointer-events: none;
	transform: scale(0.8);
	backdrop-filter: blur(1px);

	&.active {
		opacity: 1;
		transform: scale(8);
		background: #fff;
		transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
			0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
	}
}

.cursor::before {
	content: "View Project";
	width: 100%;
	height: 100%;
	position: absolute;
  font-family: 'CLASHDISPLAY-SEMIBOLD';
	font-size: 2.7px;
  line-height: 1;
	top: 6px;
	left: 0px;
  text-align: center;
	display: block;
	border-radius: 100%;
	opacity: 0;
	color: #000;
}

.cursor.link-active::before {
	content: "Click";
	width: 100%;
	height: 100%;
	position: absolute;
  font-family: 'CLASHDISPLAY-SEMIBOLD';
	font-size: 2.7px;
  line-height: 1;
	top: 7px;
	left: 0px;
  text-align: center;
	display: block;
	border-radius: 100%;
	opacity: 1;
	color: #fff;
}

.cursor.link-active {
  transform: scale(6);
  background: #000;
  color: #fff;
}

.cursor.active::before {
	opacity: 1;
}

.cursor-follower {
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 100%;
	z-index: -1;
	background-color: rgba(255, 255, 255, 0.4);
	transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
		0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity,
		0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) background;
	user-select: none;
	pointer-events: none;
	transform: translate(4px, 4px);
}

.cursor-follower.active {
	opacity: 0.3;
	transform: scale(0);
}

.overlay{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -10;
}

.overlay path {
  fill: #fff;
}

.overlay.overlay-active {
    z-index: 10;
}

#toggle-btn{
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em;
  z-index: 20;
  cursor: pointer;
}

.btn-outline{
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
}

.btn-outline-1{
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

.btn-outline-2{
  border-radius: 53% 47% 43% 57% / 51% 39% 61% 49%;
}

.btn-view-more{
  width: 60px;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;

  @media (min-width: 1024px){
    width: 100px;
    height: 100px;
  }
}

.btn-view-more::before{
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 53% 47% 43% 57% / 51% 39% 61% 49%;

  @media (min-width: 1024px){
    width: 100px;
    height: 100px;
  }
}

#hamburger{
  position: relative;
  width: 20px;
  height: 20px;
  z-index: 2;
}

#hamburger span{
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(0deg);
  display: inline-block;
  width: 24px;
  height: 1.25px;
  background: #efefef;
  transition: transform 0.2s;
}

#hamburger span::before{
  position: absolute;
  right: 0;
  display: inline-block;
  content: '';
  width: 18px;
  height: 1.25px;
  background: #000;
  transform: translateY(-4px);
  transition: transform 0.2s;
}

#toggle-btn.active #hamburger.active span{
  transition: all 0.5s 0.4s ease;
  transform: translate(-40px, 40px) rotate(45deg) !important;
}

#toggle-btn #hamburger span{
  transform: rotate(0deg) !important;
}

#hamburger.active span::before{
  top: unset; 
  width: 24px;
  transform: rotate(-90deg);
}

.menu{
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 10;
}

.menu > div{
  height: 100%;
  display: flex;
}

.menu a{
  position: relative;
  top: 120px;
  line-height: 70%;
  text-decoration: none;
  color: #8F20FF;
}

.menu a span{
  font-size: 20px;
  margin-right: 2em;
  font-family: 'CLASHDISPLAY-BOLD';
}

.menu-item{
  position: relative;
}

.menu-item::after{
  content: '';
  position: absolute;
  top: 100px;
  left: -20px;
  width: 100%;
  height: 200px;
  background: #fff;
  margin: 0 auto;
}

.menu-container{
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#toggle-btn.active .btn-outline{
  border: 1px solid #000;
}

.primary-menu{
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.primary-menu .menu-container .wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.primary-menu a {
  text-transform: uppercase;
  font-size: 75px;
  font-weight: 500;

  @media (min-width: 1024px){
    font-size: 95px;
  }

  @media (min-width: 1280px){
    font-size: 125px;
  }
}

.primary-menu .menu-container .wrapper .menu-item:nth-child(1) a,
.primary-menu .menu-container .wrapper .menu-item:nth-child(3) a{
  margin-left: 1em;
}

.cursor.overlay-active {
    background: #000;
}

.cursor-follower.overlay-active{
  background-color: rgba(0, 0, 0, 0.21);
}


</style>
