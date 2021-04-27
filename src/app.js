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
               activeItemIndex : null
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
               }

          }
     });
   }
   
   
   function sofbox() {
     createVueInstance();
   }
   
   document.addEventListener('DOMContentLoaded', sofbox);