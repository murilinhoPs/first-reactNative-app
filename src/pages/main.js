import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import Weather from "./wheatherPage/weather";
import API_KEY from "../utils/weather_api";
import dayImage from "../../assets/myDay.jpg";
import nightImage from "../../assets/myNight.jpg";

const MyApp = () => {
  const [state, setState] = useState({
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null,
    maxTemperature: 0,
    minTemperature: 0,
    name: "",
    weatherType: null,
    time: null
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        fetchApi(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error.message);
        setState({
          error: "Error getting weather conditions...${error.message}"
        });
      }
    );

    //console.log("useEffect()");
  });

  const fetchApi = (latitude, longitude) => {
    var hours = new Date().getHours();
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        API_KEY +
        "&units=metric&lang=pt_br"
    )
      .then(response => response.json())
      .then(responseJson => {
        setState({
          temperature: responseJson.main.temp,
          minTemperature: responseJson.main.temp_min,
          maxTemperature: responseJson.main.temp_max,
          weatherCondition: responseJson.weather[0].description,
          weatherType: responseJson.weather[0].main,
          name: responseJson.name,
          isLoading: false,
          time: hours
        });
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      {state.isLoading ? (
        <View style={{ alignContent: "center" }}>
          <Text>fetching data....</Text>
        </View>
      ) : (
        <ImageBackground
          source={state.time < 18 ? dayImage : nightImage}
          style={{ width: "100%", height: "100%" }}
        >
          <Weather
            weather={state.weatherCondition}
            temperature={state.temperature.toFixed(0)}
            minTemp={state.minTemperature}
            maxTemp={state.maxTemperature}
            lugar={state.name}
            weatherType={state.weatherType}
          />
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    justifyContent: "center"
  }
});

export default MyApp;
