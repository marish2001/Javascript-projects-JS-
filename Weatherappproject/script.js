const apikey = "7b3ff95fe002c8ee353ff0bc08d2e34b"

const input = document.querySelector("input")
const button = document.querySelector("button")

button.onclick = async()=>
{
    let city_name = input.value.trim()

    if(city_name==="")
    {
        alert("please enter the city name correctly")
        return;
    }

    try 
    {
        let apiurl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${apikey}`)
        let response = await apiurl.json()
         
        if(response.cod!=200)
        {
            alert("You are not enter the city name")
            return;
        }

        document.querySelector(".city").textContent = response.name;
        document.querySelector(".temperature").textContent = Math.round(response.main.temp) +"°C";
        document.querySelector(".description").textContent = response.weather[0].description;
    }

    catch(error)
    {
        console.error("API details not fetched correctly")
    }
}
