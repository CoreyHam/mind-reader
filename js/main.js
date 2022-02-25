   // Initialize

let answer;
let num = 0   
let currentPage = 0;
let buttonChecker;
let array = ['<i class="bi bi-circle-fill circle"></i>','<i class="bi bi-square-fill square"></i>','<i class="bi bi-triangle-fill triangle"></i>','<i class="bi bi-diamond-fill diamond"></i>','<i class="bi bi-heart-fill heart"></i> ','<i class="bi bi-star-fill star"></i>','<i class="bi bi-cloud-fill cloud"></i>','<i class="bi bi-moon-fill moon"></i>','<i class="bi bi-gear-fill gear"></i>',]
updatePages();
randomArrayShuffle(array)


   // Functions

// IMPORT JSON
function updatePages(){
   
   fetch("js/pages.json") //Sends out a fetch for JSON
   .then(function(resp){
      return resp.json(); //Brings back the response
   })
   .then(function(data){ 
      
      updatePageData(data); //Uses Data from JSON to update the page
   })
}

// Update Information on the Page
function updatePageData(pages){
   const headerText = document.getElementById("headerText")
   
   document.getElementById("headerText").innerHTML = pages.page[currentPage].headerText //Set HTML header text to JSON header text
   document.getElementById("nextButton").style.visibility = pages.page[currentPage].nextButton.display // Set button visability from JSON
   document.getElementById("nextButton").innerText = pages.page[currentPage].nextButton.text // Set next button text from JSON
   document.getElementById("subText").innerHTML = pages.page[currentPage].subText // Set Sub text from JSON
   document.getElementById("bottomButton").innerHTML = pages.page[currentPage].bottomButton.text //Set bottom button text from JSON
   buttonChecker = pages.page[currentPage].bottomButton.reset //Checks if the bottom button is set to TRUE or FALSE

   if (pages.page[currentPage].symbolHeader != undefined){ //Checks for the existance of the "symbolHeader"
      for (let num = 0; num < 100; num++){
         let newDivs = document.createElement("div");
         newDivs.innerHTML = `${num} - ${array[num%array.length]}`;  //A new div is made for each "NUM - SYMBOL"
         headerText.appendChild(newDivs);
   }
}
   if (pages.page[currentPage].answerHeader != undefined){ //Checks for the existance of the "answerHeader"
         headerText.innerHTML = "Your Symbol " + answer;
   }
} 
   
// Randomizes the symbols
function randomArrayShuffle(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;
   while (0 !== currentIndex) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }
   answer = array[0] // Sets the first symbol in the array to "answer"
 }
// Gets called by the bottom button "onclick"
function bottomButtonFunc(){
   if(buttonChecker == false){ //buttonChecker tells if the bottom button's text is set to "false"

      nextPage()
   } else {
      currentPage = 0;
      randomArrayShuffle(array)
      updatePages();
   }
}
// Goes to the next page
function nextPage(){
   currentPage++;
   updatePages();
   
}