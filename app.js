'use strict';

//Hours of Operation
let hrs = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let seattle = {
  min:23,
   max:65,
    avg:6.3,
    customer:[],//average per hr
    cookies:[], //total cookies
    total: 0, 
    avgCust: function (){
      for (let i = 0; i < hrs.length; i++){
// loops through array
this.customer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
      }
    },
    avgCook: function(){

      this.avgCust();
      for (let i = 0; i < hrs.length; i++){
         let container = Math.ceil(this.customer[i]*this.avg);
          this.cookies.push(container)
          this.total = this.total + container; // can be replaced with + container
      }
    },
    render:function(){
      this.avgCook();
    // document.getElementId('Seattle') //This is not doing anything
    let list = document.getElementById('Seattle')
    for (let i = 0; i < hrs.length; i++){
      let liElem = document.createElement('li'); // created loop and list items
      liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
      list.appendChild(liElem);

    }
    let finalTotal = document
  }
} 

seattle.render();
