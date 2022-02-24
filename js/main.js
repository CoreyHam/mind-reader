
// IMPORT JSON


updatePages();
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
      console.log(pages.page[currentPage].nextButton.display)
      document.getElementById("headerText").innerHTML = pages.page[currentPage].headerText
      document.getElementById("nextButton").style.visibility = pages.page[currentPage].nextButton.display
      document.getElementById("subText").innerHTML = pages.page[currentPage].subText
      document.getElementById("bottomButton").innerHTML = pages.page[currentPage].bottomButton.text
      buttonChecker = pages.page[currentPage].bottomButton.reset
      console.log(pages.page[currentPage].symbolHeader)
      if (pages.page[currentPage].symbolHeader != undefined){
         for (let num = 0; num < 100; num++)
         document.getElementById("headerText").innerHTML += num + "-" + "@" + "<br>"
      }
   }

   
// Controller
let num = 0   
let currentPage = 0;
let buttonChecker;

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