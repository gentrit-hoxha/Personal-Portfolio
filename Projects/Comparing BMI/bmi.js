
  const btnCompare = document.querySelector('#compareButton');
  var markHeight = document.querySelector('#markHeight');
  var markWeight = document.querySelector('#markWeight');

  var johnHeight = document.querySelector('#johnHeight');
  var johnWeight = document.querySelector('#johnWeight');




   var user1 = prompt('Enter the Name and Surname of the  of the 1-st Person');
   var user2 = prompt('Enter the Name and Surname of the  of the 2-nd Person');
  
    document.querySelector('#useriPare').textContent = user1;
    document.querySelector('#h333').textContent = user2;


    
  btnCompare.addEventListener('click' , function() {
   
    var markDescription = `Mark is ${markHeight.value} cm tall and weighs ${markWeight.value} kg`;
    var johnDescription = `John is ${johnHeight.value} cm tall and weighs ${johnWeight.value} kg`;
      
    

      displayDataInTables();
      displayBMItable();
      MarkObesityLevel();
      JohnObesityLevel();

    // console.log(markDescription);
    // console.log(johnDescription);

    markHeight.value = '';
    markWeight.value = '';

 johnHeight.value = '';
 johnWeight.value = '';
    
  });


  function calcBmi( height , weight ) {
    
      var h = height/100;
        var rez = weight / (h*h); 
          rez = rez.toFixed(2);
         return  rez;
     
      }

      function displayDataInTables() {
        document.querySelector('.markHeightTable').textContent = markHeight.value;
           document.querySelector('.markWeightTable').textContent = markWeight.value;
               
        document.querySelector('.johnHeightTable').textContent = johnHeight.value;
                  document.querySelector('.johnWeightTable').textContent = johnWeight.value;
      }

      function displayBMItable() {

        const markBMI = calcBmi(markHeight.value , markWeight.value);
        document.querySelector('.markBmiTable').textContent = markBMI;

        const johnBMI = calcBmi(johnHeight.value , johnWeight.value);
        document.querySelector('.johnBmiTable').textContent = johnBMI;

        if (markBMI > johnBMI) {
          document.querySelector('.compareResult').textContent = "Mark's BMI is Higher than JOHN's BMI";
        }
        else if ( johnBMI > markBMI) {
          document.querySelector('.compareResult').textContent = "JOHN's BMI is Higher than MARK's BMI";
          
        }

      }


         function MarkObesityLevel() {
          const markBMI = calcBmi(markHeight.value , markWeight.value);
            if (markBMI < 18.5 ) {
              document.querySelector('.markAlert').textContent = 'Mark is UNDERWEIGHT';
              document.querySelector('.markAlert').className = 'alert alert-info markAlert';

            }

            else if ((markBMI>18.5 && markBMI<24.9) ) {
              document.querySelector('.markAlert').textContent = 'Mark weight is NORMAL';
              document.querySelector('.markAlert').className = 'alert alert-success markAlert';

            }

            else if ((markBMI>25 && markBMI<29.9) ) {
              document.querySelector('.markAlert').textContent = 'Mark is OVERWEIGHT';
              document.querySelector('.markAlert').className = 'alert alert-warning markAlert';


            }

            else if ((markBMI>30 ) ) {
              document.querySelector('.markAlert').textContent = `${user1} is OBESE`;
              document.querySelector('.markAlert').className = 'alert alert-danger markAlert';

            }
          
      }


      function JohnObesityLevel() {
        const johnBMI = calcBmi(johnHeight.value , johnWeight.value);
       
          if ( ( johnBMI<18.5 )) {


            document.querySelector('.johnAlert').textContent = 'John is UNDERWEIGHT';
            document.querySelector('.johnAlert').className = 'alert alert-info johnAlert';
          }
          
          else if ( (johnBMI>18.5 && johnBMI<24.9)) {
            
            
            document.querySelector('.johnAlert').textContent = 'John weight is NORMAL';
            document.querySelector('.johnAlert').className = 'alert alert-success johnAlert';
          }

          else if ( (johnBMI>25 && johnBMI<29.9)) {

            document.querySelector('.johnAlert').textContent = 'John is OVERWEIGHT';
            document.querySelector('.johnAlert').className = 'alert alert-warning johnAlert';
          }

          else if ((johnBMI>30 ) ) {


            document.querySelector('.johnAlert').textContent = 'John is OBESE';
            document.querySelector('.johnAlert').className = 'alert alert-danger johnAlert';
          }


        
       }







