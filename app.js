'use strict';

//Hours of Operation
let hrs = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let stores = [];

function Stores(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg; 
    
    stores.push(this);
  }

let store1 = new Stores('Seattle', 23, 65, 6.3);
let store2 = new Stores('Tokyo', 3, 24, 1.2);
let store3 = new Stores('Dubai', 11, 38, 3.7);
let store4 = new Stores('Paris', 20, 38, 2.3);
let store5 = new Stores('Lima', 2, 16, 4.6);


// <----Seattle---->

let seattle = {
  storeName: 'Seattle',
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
          this.total = this.total + container;
      }
    },
    render:function(){
      this.avgCook();

    let list = document.getElementById('Seattle')
    let liElem = document.createElement('h1');
    
      liElem.textContent = this.storeName
      list.appendChild(liElem);
    for (let i = 0; i < hrs.length; i++){
      let liElem = document.createElement('li'); // created loop and list items
      liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
      list.appendChild(liElem);
   
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total: ${this.total} cookies `;
    list.appendChild(liTotal);
  }
}; 

seattle.render();

// <----Tokyo---->

let tokyo = {
storeName: 'Tokyo',
  min:3,
   max:24,
    avg:1.2,
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
          this.total = this.total + container;
      }
    },
    render:function(){
      this.avgCook();

    let list = document.getElementById('Tokyo')
    let liElem = document.createElement('h1');
    
      liElem.textContent = this.storeName
      list.appendChild(liElem);
    for (let i = 0; i < hrs.length; i++){
      let liElem = document.createElement('li'); // created loop and list items
      liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
      list.appendChild(liElem);
   
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total: ${this.total} cookies `;
    list.appendChild(liTotal);
  }
}; 

tokyo.render();


// <----Dubai---->

let dubai = {
  storeName: 'Dubai',
  min:11,
   max:38,
    avg:3.7,
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
          this.total = this.total + container;
      }
    },
    render:function(){
      this.avgCook();

    let list = document.getElementById('Dubai')
    let liElem = document.createElement('h1');
    
      liElem.textContent = this.storeName
      list.appendChild(liElem);
    for (let i = 0; i < hrs.length; i++){
      let liElem = document.createElement('li'); // created loop and list items
      liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
      list.appendChild(liElem);
   
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total: ${this.total} cookies `;
    list.appendChild(liTotal);
  }
}; 

dubai.render();

// <----Paris---->
let paris = {
  storeName: 'Paris',
  min:20,
   max:38,
    avg:2.3,
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
          this.total = this.total + container;
      }
    },
    render:function(){
      this.avgCook();

    let list = document.getElementById('Paris')
    let liElem = document.createElement('h1');
    
      liElem.textContent = this.storeName
      list.appendChild(liElem);
    for (let i = 0; i < hrs.length; i++){
      let liElem = document.createElement('li'); // created loop and list items
      liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
      list.appendChild(liElem);
   
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total: ${this.total} cookies `;
    list.appendChild(liTotal);
  }
}; 

paris.render();

// <----Lima---->
let lima = {
  storeName: 'Lima',
  min:2,
   max:16,
    avg:4.6,
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
          this.total = this.total + container;
      }
    },
    render:function(){
      this.avgCook();

    let list = document.getElementById('Lima')
    let liElem = document.createElement('h1');
    
      liElem.textContent = this.storeName
      list.appendChild(liElem);
    for (let i = 0; i < hrs.length; i++){
      let liElem = document.createElement('li'); // created loop and list items
      liElem.textContent = hrs[i] + ' : ' + this.cookies[i] + ' cookies';
      list.appendChild(liElem);
   
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total: ${this.total} cookies `;
    list.appendChild(liTotal);
  }
}; 

lima.render();


// ---------------------------------

let salmonCookies = [];

function salmonCookies( avgCook, avgCust, total){
  this.storeName = storeName;
  this.avgCook = avgCook;
  this.avgCust = avgCust;
  this.total = total;
  

  salmonCookies.push(this);
