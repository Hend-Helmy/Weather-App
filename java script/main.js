
let today = document.querySelector('.today'),
    month = document.querySelector('.month'),
    locationName = document.querySelector('.location'),
    currentDegree = document.querySelector('.current-deg'),
    currentCondition = document.querySelector('.current-condition'),
    currentIcon = document.querySelector('#current-icon'),
    humidity = document.querySelector('.humidity'),
    wind = document.querySelector('.wind'),
    compass = document.querySelector('.compass');

    
let  nextDay =document.querySelectorAll('.next-day'),
     nextDayIcon = document.querySelectorAll('.nextDayIcon'),
     nextDayDegree = document.querySelectorAll('.nextDayDegree'),
     smallDegree = document.querySelectorAll('.smallDegree'),
     nextCondition = document.querySelectorAll('.nextCondition')
   

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthName = ['January','February','March','April','May','June','July','August','Spetember','October','November','December']

let searchBar = document.querySelector('#searchBtn')
let currentCity ="Cairo";

var allWeatherData =[];


async function getWeatherData(){
  let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f409d273ea5a4d838d0215052220112&q=${currentCity}&days=3`)
  let result = await response.json()
  allWeatherData = result
  console.log(allWeatherData)
  displayWeatherDate()
  getNextDaysData()
}
getWeatherData()


let date = new Date();
function displayWeatherDate(){
    
    // console.log(date.getDay())
    // console.log(days[date.getDay()])
    today.innerHTML= days[date.getDay()]
    month.innerHTML = `${date.getDate()} ${monthName[date.getMonth()]}`
    locationName.innerHTML = allWeatherData.location.name
    currentDegree.innerHTML = allWeatherData.current.temp_c
    currentCondition.innerHTML = allWeatherData.current.condition.text
    currentIcon.setAttribute("src",`https:${allWeatherData.current.condition.icon}`)
    humidity.innerHTML = allWeatherData.current.humidity
    wind.innerHTML = allWeatherData.current.wind_kph
    compass.innerHTML = allWeatherData.current.wind_dir


}

function getNextDaysData(){
    for(let i=0; i<nextDay.length; i++ ){
        // nextDay[i].innerHTML= days[date.allWeatherData.forecast.forecastday[i+1].getDay()]
        nextDay[i].innerHTML=days[new Date(allWeatherData.forecast.forecastday[i+1].date).getDay()]
        nextDayIcon[i].setAttribute("src", `https:${allWeatherData.forecast.forecastday[i+1].day.condition.icon}`)
        nextDayDegree[i].innerHTML= allWeatherData.forecast.forecastday[i+1].day.maxtemp_c
        smallDegree[i].innerHTML = allWeatherData.forecast.forecastday[i+1].day.mintemp_c
        nextCondition[i].innerHTML = allWeatherData.forecast.forecastday[i+1].day.condition.text


        // console.log(nextDay[i])
    }
}


searchBar.addEventListener("keyup",function(){

    currentCity = searchBar.value;
    console.log(currentCity)
    getWeatherData(currentCity)

})

// searchBar.addEventListener("keyup",function(){

//     currentCity =   searchBar.value 
//     console.log(currentCity)
//     getWeatherData(currentCity)
   
   
   
//    })

