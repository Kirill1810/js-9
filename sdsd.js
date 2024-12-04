//1
// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//       console.log(`${i + 1} ${array[i]}`);
//     }

//   }

//   logItems(['Mango', 'Poly', 'Ajax']);

//   //2


 
//   function calculateEngravingPrice(message, pricePerWord) {
    
//     const toMas = message.split(' ');

//     const len = toMas.length;

//     const all = len * pricePerWord;
  
//     return all;

//   }
  
//   const message = "діамант рубін алмаз";
//   const pricePerWord = 100;
  
//   console.log(calculateEngravingPrice(message, pricePerWord)); 


//   //3







//   function findLongestWord(string) {
   
//     const words = string.split(' ');
    

//     let longestWord = words[0];

//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
  
//     return longestWord;
    
   
    
//   }
  
 
  
//   console.log(findLongestWord("один два три чотири пять")); 


//   function formatString(string) {
   
//     if (string.length > 40) {
     
//       return string.slice(0, 40) + '...';
//     }
    
   
//     return string;
//   }
  
  
//   console.log(formatString("мене звати кирило")); 
//   console.log(formatString("мене звати кирило мені 15 років я вчюся в гоу айтінс")); 

  

//5


  function checkForSpam(message) {
  
    let Message2 = message

    if (Message2.includes('spam') || Message2.includes('sale')) {
      return true;
    }
  
  
    return false;
    
  
  }


  console.log(checkForSpam("its halper")); 
console.log(checkForSpam(" get sale "));      

  


function collectNumbersAndCalculateSum() {
  
  let numbers = [];
  let input;

  
  while (true) {
    
    input = prompt("Введіть число:");

 
    if (input === null) {
      break;
    }

   
    let number = Number(input);

    
    if (!isNaN(number)) {
      numbers.push(number); 
    } else {
      alert("Було введено не число, спробуйте ще раз");
    }
  }


  let total = 0;

  if (numbers.length > 0) {
    for (let num of numbers) {
      total += num;
    }

    console.log(`Загальна сума чисел дорівнює ${total}`);
  } else {
    console.log("Масив чисел порожній.");
  }
}


collectNumbersAndCalculateSum();