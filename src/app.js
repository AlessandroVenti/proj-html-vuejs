function createVueInstance() {
     new Vue({
          el: '#vueSofbox',

          data: {

               logoImage: 'logo-2.png',
               // ITEMS LISTED IN NAV
               navCenterList: ['Home','About us','Feature','Testimonials','Contact US'],
               // FLAG FOR INPUT IN NAV
               inputNavFlag: false,
               // FLAG FOR ITEMS LISTED IN NAV
               inputNavItem: false,
               // COUNTER FOR SHOPPING CART IN NAVBAR
               shoppingCounter: 0
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

               navEffectItem: function() {
                    if(this.inputNavItem == false) {
                         this.inputNavItem = true;
                    } else{
                         this.inputNavItem = false;
                    }
                    console.log(this.inputNavItem);
               },

                         // INCREASE THE SHOPPING COUNTER IN NAV

               increaseShoppingCart: function() {
                    this.shoppingCounter++;
               }

          }
     });
   }
   
   
   function sofbox() {
     createVueInstance();
   }
   
   document.addEventListener('DOMContentLoaded', sofbox);