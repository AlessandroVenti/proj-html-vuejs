function createVueInstance() {
     new Vue({
          el: '#vueSofbox',

          data: {

               logoImage: 'logo-2.png',
               // ITEMS LISTED IN NAV
               navCenterList: ['Home','About us','Feature','Testimonials','Contact US'],
               // FLAG FOR INPUT IN NAV
               inputNavFlag: false,
               // COUNTER FOR SHOPPING CART IN NAVBAR
               shoppingCounter: 0,
               //Index for the condition of the blue-line
               activeItemIndex : null,
               //Array of photos in reportinAnalisys section
               reportingAnalisysPhoto: ['509.jpeg','508.jpeg'],
               //Flag for switch photos in reportingAnalisys section
              reportingAnalisysFlag: 0,
               //flag for switch card in testimonials section
              testimonialFlag : 0,
               //flag for switch card in latest posts section
              latestPostsFlag : 0,

               footerLogo: '35.png',

               footerList1 : ['About us','Theme','Features','Pricing','Blog'],

               footerList2 : ['About Sofbox','Roadmap','How it Work','Team','News'],

               footerList3 : ['About Us','Theme','Features','Pricing','Blog'],
          },

          mounted: function() {
               setInterval(this.switchLatestPost, 3000);
          },

          methods: {

               // GENERATE EFFECT OF THE SEARCHBAR IN NAV

               navEffectInput: function() {
                    if(this.inputNavFlag == false) {
                         this.inputNavFlag = true;
                    } else{
                         this.inputNavFlag = false;
                    }
                    console.log(this.inputNavFlag);
               },

               // GENERATE EFFECT OF THE ITEMS LISTED IN NAV

               navEffectItem: function(itemIndex) {
                    this.activeItemIndex = itemIndex;
               },

               // INCREASE THE SHOPPING COUNTER IN NAV

               increaseShoppingCart: function() {
                    this.shoppingCounter++;
               },

               //SWITCH FIRST PHOTO IN REPORTING ANALISYS

               switchReportingAnalisys1: function() {
               this.reportingAnalisysFlag = 0;
               console.log(this.reportingAnalisysFlag);
               },

               //SWITCH SECOND PHOTO IN REPORTING ANALISYS

               switchReportingAnalisys2: function() {
                    this.reportingAnalisysFlag = 1;
                    console.log(this.reportingAnalisysFlag);
               },

               //SWITCH FIRST 2 CARDS IN TESTIMONIALS SECTION

               switchTestimonialBox1: function() {
                    this.testimonialFlag = 0;
               },

               //SWITCH LAST 2 CARDS IN TESTIMONIALS SECTION

               switchTestimonialBox2: function() {
                    this.testimonialFlag = 1;
                    console.log(this.testimonialFlag);
               },

               //SWITCH 3 CARDS IN LATEST POSTS SECTION WITH TIMEINTERVAL

               switchLatestPost: function() {
                    if(this.latestPostsFlag == 1) {
                         this.latestPostsFlag = 0;
                    } else {
                         this.latestPostsFlag = 1;
                    }
                    
               }
          }
     });
   }
   
   
   function sofbox() {
     createVueInstance();
   }
   
   document.addEventListener('DOMContentLoaded', sofbox);