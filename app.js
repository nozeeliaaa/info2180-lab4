function searchList()
{
   var result = document.getElementById("result");
   var val = document.getElementById("userinput");


   var req = new XMLHttpRequest();
   req.onreadystatechange = function() {


       if(req.readyState === XMLHttpRequest.DONE){
           if(req.status === 200)
           {
               result.innerHTML = req.responseText
           }
           if (req.responseText.includes('id="not-found"')) {
               result.innerHTML = `<p style="color: red; font-weight: bold;">Avenger not found</p>`;
           }
           else
           {
               console.log("There seems to be an error!")
           }
       }
   }
   req.open("GET", `http://localhost:8888/info2180-lab4/superheroes.php?query=${encodeURIComponent(val.value.trim())}`, true);


   req.send();
}


window.onload = function() {
   console.log("Page successfully loaded");
   var  but = document.getElementById("searchBtn");
   but.addEventListener("click", searchList);

   var userInput = document.getElementById("userinput");
   userInput.addEventListener("keypress", function(event) {
       if (event.key === "Enter") {  // Check if Enter key is pressed
           event.preventDefault();    // Prevent form submission if any
           searchList();              // Trigger the search function
       }
   });
 };
