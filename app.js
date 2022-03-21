'use strict';

//Hours of Operation
let hrs = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];


function random(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let stores = [];

function Stores(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg; 
    this.customers = [];
    this.cookies = [];
    this.total = 0;
    
    stores.push(this);
    return;
    
  }
  
  Stores.prototype.setCustomers = function(){
    for(let i = 0; i < hrs.length; i++)
    {
      this.customers[i]=random(this.min, this.max);
    }
  
  }

  Stores.prototype.setCookies = function(){
    
    this.setCustomers();
    let len = this.customers.length;
    for(let i = 0; i < len; i++){
      let setCustomers = Math.ceil(this.customers[i] * this.avg);
      this.cookies.push(setCustomers);
      this.total = this.total + setCustomers;
    }

  }

  Stores.prototype.render = function(){

    this.setCookies();
    let body = document.getElementById('shops');
    let trElem = document.createElement('tr');
    body.appendChild(trElem);

    let tdElem = document.createElement('td');
    tdElem.textContent = this.name;
    trElem.appendChild(tdElem);

    for(let i = 0; i< (hrs.length ); i++){

      let tdElem2 = document.createElement('td');
      tdElem2.textContent = this.cookies[i];
      trElem.appendChild(tdElem2);

    }
    
    let totals = document.createElement('td');
    totals.textContent = this.total;
    trElem.appendChild(totals);
    }
  

  function createTheader(){
    
    let table = document.getElementById('shops');
    let trElement = document.createElement('tr');
    let th1 = document.createElement('th');
    table.appendChild(trElement);


    th1.textContent = 'Location';
    trElement.appendChild(th1);

    for(let j = 0; j < hrs.length; j++){
      let thElem = document.createElement('th');
      thElem.textContent = hrs[j];
      trElement.appendChild(thElem); 

    }
    let totals = document.createElement('td');
    totals.textContent = ('Totals');
    trElement.appendChild(totals);
  }


  
  new Stores('Seattle', 23, 65, 6.3); 
  new Stores('Tokyo', 3, 24, 1.2);
  new Stores('Dubai', 11, 38, 3.7);
  new Stores('Paris', 20, 38, 2.3);
  new Stores('Lima', 2, 16, 4.6);
  
function main(){

  createTheader();
  for(let i = 0; i < stores.length; i++)
  {
    stores[i].render();

  }
return;
}

// Array that has sum total of all sales throughout the hours of operation listed at the bottom of your sales table. 
// 7am totals are going to equal the total for each individual store.
// function totalhrs(){
//   createtFoot();
//   for(let )
// }

  

main();



//--------FORM REFERENCE------------------------



let cookieForm = document.getElementById('myForm');
cookieForm.addEventListener('submit, handleSubmit');

function handleSubmit(event){
  event.preventDefault();
  
  let name = event.target.name.value;
  let min = +event.target.min.value
  let max = +event.target.max.value;
  let avg = +event.target.avg.value;

  let cookieStore = new StoreStats(name, min, max, avg);
  cookieStore.avgCust();
  userStore.render();

  tfootElem.innerHTML = '';
  for(let i = 0; i < storeList.length; i++){
    cookiesPerHour[i] = 0;
  }
  // hourlyTotalArr();
  renderTfoot();
}





  // <----Seattle---->
  
  // let seattle = {
    //   storeName: 'Seattle',
    //   min:23,
    //    max:65,
    //     avg:6.3,
    //     customer:[],//average per hr
    //     cookies:[], //total cookies
    //     total: 0, 
    //     avgCust: function (){
      //       for (let i = 0; i < hrs.length; i++){
        // // loops through array
        // this.customer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        //       }
        //     },
        //     avgCook: function(){
          
          //       this.avgCust();
          //       for (let i = 0; i < hrs.length; i++){
//          let container = Math.ceil(this.customer[i]*this.avg);
//           this.cookies.push(container)
//           this.total = this.total + container;
//       }
//     },
//     render:function(){
//       this.avgCook();

//     let list = document.getElementById('Seattle')
//     let liElem = document.createElement('h1');
    
//       liElem.textContent = this.storeName
//       list.appendChild(liElem);
//     for (let i = 0; i < hrs.length; i++){
//       let liElem = document.createElement('li'); // created loop and list items
//       liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
//       list.appendChild(liElem);
   
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.total} cookies `;
//     list.appendChild(liTotal);
//   }
// }; 

// seattle.render();

// <----Tokyo---->

// let tokyo = {
// storeName: 'Tokyo',
//   min:3,
//    max:24,
//     avg:1.2,
//     customer:[],//average per hr
//     cookies:[], //total cookies
//     total: 0, 
//     avgCust: function (){
//       for (let i = 0; i < hrs.length; i++){
// // loops through array
// this.customer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//       }
//     },
//     avgCook: function(){

//       this.avgCust();
//       for (let i = 0; i < hrs.length; i++){
//          let container = Math.ceil(this.customer[i]*this.avg);
//           this.cookies.push(container)
//           this.total = this.total + container;
//       }
//     },
//     render:function(){
//       this.avgCook();

//     let list = document.getElementById('Tokyo')
//     let liElem = document.createElement('h1');
    
//       liElem.textContent = this.storeName
//       list.appendChild(liElem);
//     for (let i = 0; i < hrs.length; i++){
//       let liElem = document.createElement('li'); // created loop and list items
//       liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
//       list.appendChild(liElem);
   
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.total} cookies `;
//     list.appendChild(liTotal);
//   }
// }; 

// tokyo.render();


// <----Dubai---->

// let dubai = {
//   storeName: 'Dubai',
//   min:11,
//    max:38,
//     avg:3.7,
//     customer:[],//average per hr
//     cookies:[], //total cookies
//     total: 0, 
//     avgCust: function (){
//       for (let i = 0; i < hrs.length; i++){
// // loops through array
// this.customer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//       }
//     },
//     avgCook: function(){

//       this.avgCust();
//       for (let i = 0; i < hrs.length; i++){
//          let container = Math.ceil(this.customer[i]*this.avg);
//           this.cookies.push(container)
//           this.total = this.total + container;
//       }
//     },
//     render:function(){
//       this.avgCook();

//     let list = document.getElementById('Dubai')
//     let liElem = document.createElement('h1');
    
//       liElem.textContent = this.storeName
//       list.appendChild(liElem);
//     for (let i = 0; i < hrs.length; i++){
//       let liElem = document.createElement('li'); // created loop and list items
//       liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
//       list.appendChild(liElem);
   
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.total} cookies `;
//     list.appendChild(liTotal);
//   }
// }; 

// dubai.render();

// // <----Paris---->
// let paris = {
//   storeName: 'Paris',
//   min:20,
//    max:38,
//     avg:2.3,
//     customer:[],//average per hr
//     cookies:[], //total cookies
//     total: 0, 
//     avgCust: function (){
//       for (let i = 0; i < hrs.length; i++){
// loops through array
// this.customer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//       }
//     },
//     avgCook: function(){

//       this.avgCust();
//       for (let i = 0; i < hrs.length; i++){
//          let container = Math.ceil(this.customer[i]*this.avg);
//           this.cookies.push(container)
//           this.total = this.total + container;
//       }
//     },
//     render:function(){
//       this.avgCook();

//     let list = document.getElementById('Paris')
//     let liElem = document.createElement('h1');
    
//       liElem.textContent = this.storeName
//       list.appendChild(liElem);
//     for (let i = 0; i < hrs.length; i++){
//       let liElem = document.createElement('li'); // created loop and list items
//       liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
//       list.appendChild(liElem);
   
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.total} cookies `;
//     list.appendChild(liTotal);
//   }
// }; 

// paris.render();

// <----Lima---->
// let lima = {
//   storeName: 'Lima',
//   min:2,
//    max:16,
//     avg:4.6,
//     customer:[],//average per hr
//     cookies:[], //total cookies
//     total: 0, 
//     avgCust: function (){
//       for (let i = 0; i < hrs.length; i++){
// // loops through array
// this.customer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//       }
//     },
//     avgCook: function(){

//       this.avgCust();
//       for (let i = 0; i < hrs.length; i++){
//          let container = Math.ceil(this.customer[i]*this.avg);
//           this.cookies.push(container)
//           this.total = this.total + container;
//       }
//     },
//     render:function(){
//       this.avgCook();

//     let list = document.getElementById('Lima')
//     let liElem = document.createElement('h1');
    
//       liElem.textContent = this.storeName
//       list.appendChild(liElem);
//     for (let i = 0; i < hrs.length; i++){
//       let liElem = document.createElement('li'); // created loop and list items
//       liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
//       list.appendChild(liElem);
   
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.total} cookies `;
//     list.appendChild(liTotal);
//   }
// }; 

// lima.render();


// ---------------------------------

// let salmonCookies = [];

// function salmonCookies( avgCook, avgCust, total){
//   this.storeName = storeName;
//   this.avgCook = avgCook;
//   this.avgCust = avgCust;
//   this.total = total;
  

//   salmonCookies.push(this);
