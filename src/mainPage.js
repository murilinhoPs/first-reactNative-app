import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Weather from "./components/weather";
import API_KEY from "./utils/weather_api";
import { fetchUpdateAsync } from "expo/build/Updates/Updates";

const MyApp = () => {
  const [state, setState] = useState({
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null,
    maxTemperature: 0,
    minTemperature: 0,
    name: "",
    weatherType: null
  });

  //api.openweathermap.org/data/2.5/weather?lat={-23.55}&lon={46.66}&appid={089c0dcede396e798522314f28283861}&units=metric

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
  }, []);

  const fetchApi = (latitude, longitude) => {
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
          isLoading: false,
          temperature: responseJson.main.temp,
          minTemperature: responseJson.main.temp_min,
          maxTemperature: responseJson.main.temp_max,
          weatherCondition: responseJson.weather[0].description,
          weatherType: responseJson.weather[0].main,
          name: responseJson.name
        });
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
    // let responseJson = response.json;
    // console.log(responseJson);
  };

  const {
    isLoading,
    weatherCondition,
    weatherType,
    temperature,
    minTemperature,
    maxTemperature,
    name
  } = state;
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>fetching data....</Text>
      ) : (
        <Weather
          weather={weatherCondition}
          temperature={temperature}
          minTemp={minTemperature}
          maxTemp={maxTemperature}
          lugar={name}
          weatherType={weatherType}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

export default MyApp;
