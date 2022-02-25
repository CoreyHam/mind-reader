let answer = "huh";
let num = 0   
let currentPage = 0;
let buttonChecker;
let array = ['<i class="bi bi-circle-fill circle"></i>','<i class="bi bi-square-fill square"></i>','<i class="bi bi-triangle-fill triangle"></i>','<i class="bi bi-diamond-fill diamond"></i>','<i class="bi bi-heart-fill heart"></i> ','<i class="bi bi-star-fill star"></i>','<i class="bi bi-cloud-fill cloud"></i>','<i class="bi bi-moon-fill moon"></i>','<i class="bi bi-gear-fill gear"></i>',]
// IMPORT JSON


updatePages();
randomArrayShuffle(array)
function updatePages(){

   fetch("js/pages.json")
   .then(function(resp){
      return resp.json();
   })
   .then(function(data){
      
      doSomething(data);
   })
}

   function doSomething(pages){
      const headerText = document.getElementById("headerText")
      
      document.getElementById("headerText").innerHTML = pages.page[currentPage].headerText
      document.getElementById("nextButton").style.visibility = pages.page[currentPage].nextButton.display
      document.getElementById("nextButton").innerText = pages.page[currentPage].nextButton.text
      document.getElementById("subText").innerHTML = pages.page[currentPage].subText
      document.getElementById("bottomButton").innerHTML = pages.page[currentPage].bottomButton.text
      buttonChecker = pages.page[currentPage].bottomButton.reset
      if (pages.page[currentPage].symbolHeader != undefined){
         for (let num = 0; num < 100; num++){
            let newDivs = document.createElement("div");
            newDivs.innerHTML = `${num} - ${array[num%array.length]}`; //put in symbol and num
            headerText.appendChild(newDivs);
            
      }
   }
      console.log(pages.page[currentPage].answerHeader + "HELLO")
      if (pages.page[currentPage].answerHeader != undefined){
            headerText.innerHTML = "Your Symbol " + answer;
      }
} 
// Controller


function randomArrayShuffle(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;
   while (0 !== currentIndex) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }
   answer = array[0]
 }

function bottomButtonFunc(){
   if(buttonChecker == false){

      currentPage++;
      updatePages();
   } else {
      currentPage = 0;
      randomArrayShuffle(array)
      updatePages();
   }
}

function nextPage(){
   currentPage++;
   updatePages();
   
}