


document.body.addEventListener('keydown' , function (event) {

    document.querySelector('#which').textContent = event.which;
    document.querySelector('#keyCode').textContent = event.keyCode;
    document.querySelector('#shiftKey').textContent = event.shiftKey;
    document.querySelector('#altKey').textContent = event.altKey;
    document.querySelector('#ctrlKey').textContent = event.ctrlKey;
    document.querySelector('#metaKey').textContent = event.metaKey;
    document.querySelector('#key').textContent = event.key;


    
});





var num = 125.6974;
   try {
       var rez = num.toPrecision(500);
       console.log(rez);
   } catch (error) {
       console.log("Error name: " + error.name);
       console.log("Error message: " + error.message);
      console.log("ERROR: " );
   }
     


   function maxNumber(vargu) {
    var max = vargu[0]

   for (let i = 1; i < vargu.length; i++) {
        if (vargu[i]>max) {
            max = vargu[i];
        }
   }

   return max;
   }

   //maxNumber(array);

   const array1 = [100,58,25,10,859,36,10,895,478,50,78,92];


   console.log(maxNumber(array1));



   const age = 17;

   if (age>=18) {
       console.log('You have the right to vote');
   }

   else  {
       console.log("SORRY you can't vote")
   }


/**Generating password */

      /*  function generatePassword(length) {
            var wishlist = 'ABCDEFGHT/YUI47852369!@#$%^&*_+';
              var rez = '';

        for (let i = 0; i < 15; i++) {
             let randomNum = Math.ceil(Math.random()*30);
             rez = rez + wishlist.charAt(randomNum);
        }

        return rez;
        }
        

        console.log(generatePassword(10));*/


        //const array = [1,5,4,9,4,2,5,8,100,25,96,58];
    
