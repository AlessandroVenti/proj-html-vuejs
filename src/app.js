function createVueInstance() {
     new Vue({
          el: '#vueSofbox',

          data: {

               logoImage: 'logo-2.png',
               navCenterList: ['Home','About us','Feature','Testimonials','Contact US'],
               navIconsList: ['fas fa-search','fas fa-shopping-cart']
          }
     });
   }
   
   
   function sofbox() {
     createVueInstance();
   }
   
   document.addEventListener('DOMContentLoaded', sofbox);