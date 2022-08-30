$(".searchBtn").on("click", function () {
    var city = document.getElementById("exampleCity").value;
    
   if (city === "")
    return;
   else {
    console.log(city);
   }
})