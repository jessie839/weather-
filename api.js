document.getElementById("btn").addEventListener('click',function(){
    const city = document.getElementById("cityinput").value;
    const apiKey = "3951f85fd8cc5d9a26ebf66b1acc49e6";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        if (data.cod=== 200){
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;    

        } else {
            alert("city not found");
        }
    })
    .catch(error => {
        alert("error");
        console.error('Error:',error);

});
});