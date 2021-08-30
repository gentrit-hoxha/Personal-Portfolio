

'use strict';


const quotesArray = ['Quote number 1' , 'Quote number 2' ,'Quote number 3','Quote number 4',
'Quote number 5','Quote number 6', 'Quote number 7'];

//var length = quotesArray.length;
//var randomNum = Math.floor(Math.random() * length);

//console.log(randomNum);

//console.log(quotesArray[randomNum]);

    quotesArray.forEach(function (quote, index , array) {
      console.log(quote , index , array);
  });




 class Car {
       constructor(name , year){
                this.name = name;
                this.year = year;
       }

       getName() {
           return this.name;
       }

 }


 let car1 = new Car('Mercedes E Class' , 2018);
 let car2 = new Car('BMW M550D' , 2018);

 console.log(car1.getName());
 console.table(car1);







