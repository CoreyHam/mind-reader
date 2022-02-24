// Model

// let page0 = new Page(
//     "I can read your mind",
//     "Next",
    
//     );
//     let pageState = [page0[0]]
    
//     // Controller
//     switch(pageState){
//         case 0:
//         }
        
        
// View
// document.getElementById("testDiv").innerHTML = page0

fetch("sandbox.JSON")
   .then(function(resp){
      return resp.json();
   })
   .then(function(data){
      console.log(data);
   })
