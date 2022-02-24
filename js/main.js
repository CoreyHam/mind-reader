// Controller

let currentPage = 0;

function nextPage(){
   currentPage++;
   doSomething();
}
// IMPORT JSON
fetch("js/pages.json")
   .then(function(resp){
      return resp.json();
   })
   .then(function(data){
      
      doSomething(data);
   })

function doSomething(pages){
   console.log(pages.page[currentPage].nextButton.display)
   document.getElementById("headerText").innerHTML = pages.page[currentPage].headerText
   document.getElementById("nextButton").style.visibility = pages.page[currentPage].nextButton.display
}