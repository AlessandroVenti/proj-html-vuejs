  function createVueInstance() {
    new Vue({
      el: '#vueSofbox',
      data: {
        logoImage: 'logo-2.png',
        // ITEMS LISTED IN NAV
        navCenterList: ['Home', 'About us', 'Feature', 'Testimonials', 'Contact US'],
        // FLAG FOR INPUT IN NAV
        inputNavFlag: false,
        // COUNTER FOR SHOPPING CART IN NAVBAR
        shoppingCounter: 0,
        //Index for the condition of the blue-line
        activeItemIndex: null,
        //Array of photos in reportinAnalisys section
        reportingAnalisysPhoto: ['509.jpeg', '508.jpeg'],
        //Flag for switch photos in reportingAnalisys section
        reportingAnalisysFlag: 0,
        //flag for switch card in testimonials section
        testimonialFlag: 0,
        //flag for switch card in latest posts section
        latestPostsFlag: 0,
        //Carousel for the Testimonial Section
        testimonialBoxCarousel: {
          currentSlide: 0,
          transitionName: 'carousel',
          images: ['25.jpeg','26.jpeg','27.jpeg'],
          names: ['Alex xander','Julia Aann','Mac Znder'],
          job: ['- CEO Sofbox','-COO Sofbox','- Manager Sofbox'],
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.'
        },
        //Carousel for the Latest-Post Section
        latestPostCarousel: {
          currentSlide: 0,
          transitionName: 'post',
          images: ['17.jpg','18.jpg','19.jpg','20.jpg'],
          date: 'November 28, 2019',
          title: 'Life Lack Meaning',
          description: 'It is a long established fact that a reader will be distracted by the readable.'
        },

        footerLogo: '35.png',
        footerList1: ['About us', 'Theme', 'Features', 'Pricing', 'Blog'],
        footerList2: ['About Sofbox', 'Roadmap', 'How it Work', 'Team', 'News'],
        footerList3: ['About Us', 'Theme', 'Features', 'Pricing', 'Blog']
      },
      mounted: function mounted() {
        setInterval(this.switchLatestPost, 5000);
        setInterval(this.switchTestimonialBox2,5000)
      },
      methods: {
        // GENERATE EFFECT OF THE SEARCHBAR IN NAV
        navEffectInput: function navEffectInput() {
          if (this.inputNavFlag == false) {
            this.inputNavFlag = true;
          } else {
            this.inputNavFlag = false;
          }
  
          console.log(this.inputNavFlag);
        },
        // GENERATE EFFECT OF THE ITEMS LISTED IN NAV
        navEffectItem: function navEffectItem(itemIndex) {
          this.activeItemIndex = itemIndex;
        },
        // INCREASE THE SHOPPING COUNTER IN NAV
        increaseShoppingCart: function increaseShoppingCart() {
          this.shoppingCounter++;
        },
        //SWITCH FIRST PHOTO IN REPORTING ANALISYS
        switchReportingAnalisys1: function switchReportingAnalisys1() {
          this.reportingAnalisysFlag = 0;
          console.log(this.reportingAnalisysFlag);
        },
        //SWITCH SECOND PHOTO IN REPORTING ANALISYS
        switchReportingAnalisys2: function switchReportingAnalisys2() {
          this.reportingAnalisysFlag = 1;
          console.log(this.reportingAnalisysFlag);
        },
        //SWITCH FIRST 2 CARDS IN TESTIMONIALS SECTION
        switchTestimonialBox1: function switchTestimonialBox1() {
          this.testimonialFlag = 0;
        },
        //SWITCH LAST 2 CARDS IN TESTIMONIALS SECTION
        switchTestimonialBox2: function switchTestimonialBox2() {
          this.testimonialBoxCarousel.transitionName = "carousel-next";
          if(this.testimonialBoxCarousel.currentSlide == (this.testimonialBoxCarousel.images.length -2)) {
            this.testimonialBoxCarousel.currentSlide = 0;
          } else {
            this.testimonialBoxCarousel.currentSlide++;
          }
        },
        //SWITCH 3 CARDS IN LATEST POSTS SECTION WITH TIMEINTERVAL
        switchLatestPost: function switchLatestPost() {
          this.latestPostCarousel.transitionName = 'post-carousel-next';
          if(this.latestPostCarousel.currentSlide == (this.latestPostCarousel.images.length - 3)) {
            this.latestPostCarousel.currentSlide = 0;
          } else {
          this.latestPostCarousel.currentSlide++;
          }
        }
      }
    });
  }
  
  function sofbox() {
    createVueInstance();
  }
  
  document.addEventListener('DOMContentLoaded', sofbox);