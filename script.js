function connect(){

    var searchTerm = document.getElementById("searchBox").value ; 
   
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=7a4b54086e73ae11a4546bb1df43ef4d` ;
    console.log (url);
   
    fetch (url)
    .then (res => res.json())
    .then (data => display(data))
   
   }
   
   function display (data){

     var weatherInfo = data.main;
     console.log(weatherInfo);
   
     var oldContent = document.getElementById("resultscontainer");
     oldContent.textContent = ""; 
   
     for (var i=0; i<5; i++){
   
       var newDiv = document.createElement("div");
       newDiv.innerHTML = `Temperature: ${weatherInfo[i].temp}  <br>
                           Feels Like: ${weatherInfo[i].feels_likel}<br><br>
                           <img src="${weatherInfo[i].temp_min}"> <br> <br>
                           <br>
                           ` 
     
   
        newDiv.classList.add("weatherStyle");
        oldContent.appendChild(newDiv);
     }
   
   }