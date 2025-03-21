const Weather = require('../models/weather'); 
const axios = require('axios');

const SECRET_KEY = process.env.WEATHER_KEY;

exports.getWeather = async (req, res) => {
    try {
        const { city } = req.query 

        if (!city) {
            return res.status(400).json({ message: "City name is required" });
        }

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${SECRET_KEY}&units=metric`
        )

        const { name, sys, main, weather, wind } = response.data;

       
        const weatherData = new Weather({
            city: `${name},${sys.country}`,
            temperature: main.temp,
            condition: weather[0].description,
            wind_Speed: wind.speed,
            humidity: main.humidity,
            date: new Date()
        })

        await weatherData.save()

         res.status(200).json({
            message: 'Weather update',
            data: {
                city: `${name},${sys.country}`,
                temperature: main.temp,
                condition: weather[0].description,
                wind_Speed: wind.speed,
                humidity: main.humidity
            }
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: 'Error fetching weather data'
        });
    }
};
