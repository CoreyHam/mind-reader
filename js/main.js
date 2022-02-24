let num = 0   
let currentPage = 0;
let buttonChecker;
let array = ["<i class='bi bi-suit-club-fill black'></i>","<i class='bi bi-suit-spade-fill black'></i>","<i class='bi bi-diamond-fill red'></i>","<i class='bi bi-suit-heart-fill red'></i>"]
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
      
      console.log(pages.page[currentPage].nextButton.display)
      document.getElementById("headerText").innerHTML = pages.page[currentPage].headerText
      document.getElementById("nextButton").style.visibility = pages.page[currentPage].nextButton.display
      document.getElementById("subText").innerHTML = pages.page[currentPage].subText
      document.getElementById("bottomButton").innerHTML = pages.page[currentPage].bottomButton.text
      buttonChecker = pages.page[currentPage].bottomButton.reset
      console.log(pages.page[currentPage].symbolHeader)
      if (pages.page[currentPage].symbolHeader != undefined){
         for (let num = 0; num < 100; num++){
            let newDivs = document.createElement("div");
            newDivs.innerHTML = `${num} - ${array[num%array.length]}`; //put in symbol and num
            headerText.appendChild(newDivs);
      }
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
   console.log(array);
 }

function bottomButtonFunc(){
   if(buttonChecker == false){

      currentPage++;
      console.log(currentPage);
      updatePages();
   } else {
      currentPage = 0;
      updatePages();
   }
}

function nextPage(){
   currentPage++;
   updatePages();
   
}