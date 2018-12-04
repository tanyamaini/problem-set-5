/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  var div=document.getElementById("mario-easy-output");
  while (height < 1 || height > 23 || Number.isInteger(height)==false){
    height = Number(prompt("Enter a height between 1 and 23."));
  }
    let i = 0;
    let lines = "";
    let hash = "#";
    let space = `&nbsp`;
    /*let break = `<br/>`;*/
    while(i < height){
      for(let j=0; j<=(height-i-2);j++) {
        lines = lines + space;
      }
      for(let k=0; k<=(i+1);k++) {
        lines = lines + hash;
      }
      lines = lines + "<br>";
      i++;
    }
  div.innerHTML="<code>"+lines+"</code>";


  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  var div = document.getElementById("mario-hard-output");
  while (height < 1 || height > 23 || Number.isInteger(height)==false){
    height = Number(prompt("Enter a height between 1 and 23."));
  }

  let lines = "";
  let hash = "#"
  for (let i=0; i<height; i++){
    let row = "";
    for (let j=0; j<(height-i-1); j++){
      row = row + "&nbsp;";
    }
    row = row+ hash;
    for (let k=0; k<(i+1); k++){
      row = row+ hash;
    }
    row = row+`&nbsp;&nbsp;${hash}`;
    for (let m=0; m<(i+1); m++){
      row = row+ hash;
    }

    lines = lines+row+"<br/>";
  }
  div.innerHTML = "<code>" + lines + "</code>";

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  let firstSum = 0;
      let secondSum = 0;
      while (true){
        card = prompt("Enter your credit card number: ");
        if ((card.length==16) && Number.isInteger(Number(card)) || card.length==15 || card.length==13){
          break;
        }
        if(card === null){
          break;
        }
      }

      if (card !== null) {
        for(let card1= card.length-2; card1>= 0; card1-=2) {
          let num = Number(card[card1]) * 2;
          let numCardString = num.toString();
          let numCardSum = 0;
          for (let card2= 0 ; card2< numCardString.length; card2++){
            numCardSum = numCardSum + Number(numCardString[card2]);
          }
          firstSum = numCardSum + firstSum;
          console.log(firstSum);
        }

        for(let card3= card.length-1; card3>= 0;card3-=2){
          secondSum = secondSum + Number(card[card3])
        }

        console.log(secondSum);

        if (card.length == 15 && (card[0] == 3 &&(card[1] == 7 || card[1] == 4)) && (firstSum + secondSum )% 10 == 0){
          let div3=document.getElementById("credit-output")
          div3.innerHTML="<img src ='./images/amex.png'/>";
        }
        else if ((card.length == 13 || card.length == 16) && card[0] == 4 && (firstSum + secondSum) % 10 == 0){
          let div3=document.getElementById("credit-output")
          div3.innerHTML="<img src ='./images/visa.png'/>";
        }
        else if (card.length == 16 && (card[0] == 5 && (card[1] == 1 || card[1] == 2 || card[1] == 4 || card[1] == 5)) && (firstSum + secondSum) % 10 == 0){
          let div3=document.getElementById("credit-output")
          div3.innerHTML="<img src ='./images/mastercard.png'/>";
        }
        else {
          let div3=document.getElementById("credit-output")
          div3.innerHTML="<img src ='./images/invalid.png'/>";
          div.innerHTML="Invalid.";
        }

      card=Number(card);
      } else {
        let div3=document.getElementById("credit-output")
        div3.innerHTML = "";
      }



  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

 function guess() {
   let div = document.getElementById("guess-output");
   let randomNumber = Math.floor(Math.random() *1001) +1;
   attempt = -1;
   i = 0;
  while (attempt < 1 || attempt > 1000 || Number.isInteger(attempt) == false){
    attempt = Number(prompt("Guess the number I'm thinking of between 1 and 1000."));
  }

  while (attempt !== randomNumber){
      i++;
      if(attempt > randomNumber){
        attempt = prompt("Nope, too high. Try again!");
        if (attempt == randomNumber) {break;}
      }
      if(attempt < randomNumber){
        attempt = prompt("Nope,too low. Try again!");
        if (attempt == randomNumber) {break;}
      }
  }
  div.innerHTML= `Correct! The answer is ${randomNumber}. You got it in ${i} attempts.`;


  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  windspeed = -1;
  while (windspeed < 0 || Number.isInteger(windspeed)==false){
      windspeed = Number(prompt("Enter a positive windspeed in miles per hour. Enter the value only."));
  }
  let div=document.getElementById("hurricane-output");
  if (windspeed >= 39 && windspeed <= 73) {
    div.innerHTML = "Tropical Storm.";
  } else if (windspeed>= 0 && windspeed <=38){
    div.innerHTML = "The skies are calm...";
  } else if (windspeed >= 74 && windspeed <= 95) {
    div.innerHTML = "Category 1 Hurricane.";
  } else if (windspeed >= 96 && windspeed <= 110) {
    div.innerHTML = "Category 2 Hurricane.";
  } else if (windspeed >= 111 && windspeed <= 129) {
    div.innerHTML = "Category 3 Hurricane.";
  } else if (windspeed >= 130 && windspeed <= 156) {
    div.innerHTML = "Category 4 Hurricane.";
  } else if (windspeed >= 157) {
    div.innerHTML = "Category 5 Hurricane.";
  } /*else {
    // TODO
  }*/
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

let div=document.getElementById("gymnastics-output");
number1 = -1;
number2 = -1;
number3= -1;
number4= -1;
number5= -1;
number6= -1;
totalfour= 0;
while (number1 <0 || number1 > 10 || Number.isInteger(number1) == false){
  number1 = Number(prompt("Enter a score from 0-10."));}
while (number2 <0 || number2 > 10 || Number.isInteger(number2) == false){
  number2 = Number(prompt("Enter a second score from 0-10."));}
while (number3 <0 || number3 > 10 || Number.isInteger(number3) == false){
  number3 = Number(prompt("Enter a third score from 0-10."));}
while (number4 <0 || number4 > 10 || Number.isInteger(number4) == false){
  number4 = Number(prompt("Enter a fourth score from 0-10."));}
while (number5 <0 || number5 > 10 || Number.isInteger(number5) == false){
  number5 = Number(prompt("Enter a fifth score from 0-10."));}
while (number6 <0 || number6 > 10 || Number.isInteger(number6) == false){
  number6 = Number(prompt("Enter a sixth score from 0-10."));}
maxnumber= Math.max(number1, number2, number3, number4, number5, number6);
minnumber= Math.min(number1, number2, number3, number4, number5, number6);
if(number1 != maxnumber || number1 != minnumber){
  scores.push(number1)}
if(number2 != maxnumber || number2 != minnumber){
  scores.push(number2)}
if(number3 != maxnumber || number3 != minnumber){
  scores.push(number3)}
if(number4 != maxnumber || number4 != minnumber){
  scores.push(number4)}
if(number5 != maxnumber || number5 != minnumber){
  scores.push(number5)}
if(number6 != maxnumber || number6 != minnumber){
  scores.push(number6)}
  total = number1 + number2 + number3 + number4 + number5 + number6
  average = ((total- maxnumber - minnumber)/4);
div.innerHTML= `Discarded: ${Math.min(number1, number2, number3, number4, number5, number6)}, ${Math.max(number1, number2, number3, number4, number5, number6)}` + `<br/>Score: ${average.toFixed(2)}`;


  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

let div= document.getElementById("report-card-output");
testscore = Number(prompt('Enter a test score between 0 and 100. Enter -1 when you have done.'));
while (testscore){
  if (testscore == -1){
    testscore = false;
    break;
  }
  else if(testscore <= 100 && 0 <= testscore){
    tests = tests + 1;
    testTotal =testTotal + testscore;
  }
testscore = prompt('Enter a test score between 0 and 100. Enter -1 when you have done.')
}
quizscore = Number(prompt('Enter a quiz score between 0 and 100. Enter -1 when you have done.'));
  while (quizscore) {
    if (quizscore == -1){
     quizscore = false;
     break;
    }
    else if(quizscore <= 100 && 0 <= quizscore){
     quizzes = quizzes + 1;
     quizTotal = quizTotal + quizscore;
    }
quizscore = Number(prompt('Enter a quiz score between 0 and 100. Enter -1 when you have done.'));
}
homeworkscore = Number(prompt('Enter a homework score between 0 and 100. Enter -1 when you have done.'));
while (homeworkscore){
  if(homeworkscore == -1){
   homeworkscore = false;
   break;
  }
  else if(homeworkscore <= 100 && 0 <= homeworkscore){
   homeworks = homeworks + 1;
   homeworkTotal = homeworkTotal+ homeworkscore;
  }
  homeworkscore = Number(prompt('Enter a homework score between 0 and 100. Enter -1 when you have done.'));
}
testAverage = testTotal/tests;
quizAverage = quizTotal/quizzes;
homeworkAverage = homeworkTotal/homeworks;
totalAverage = (testAverage * 0.6) + (quizAverage * 0.3) + (homeworkAverage * 0.1);
div.innerHTML = "Tests: " + testAverage.toFixed(2) + "</br>Quizzes: " + quizAverage.toFixed(2) + "</br>Homework: " + homeworkAverage.toFixed(2) + "</br>Grade: " + totalAverage.toFixed(2);



  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
