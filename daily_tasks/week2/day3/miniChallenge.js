async function Weather() {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true");
        const data = await response.json();
        setTimeout(() => {
            console.log("fechting data...");
        }, 1000);
        setTimeout(() => {
        console.log("current temp : " + data.current_weather.temperature);
        console.log(`wind speed : ${data.current_weather.windspeed}`);
    }, 2000);}
    catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
Weather();