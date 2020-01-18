import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import weatherConditions from "../utils/weather_info";

const Weather = props => {
  const headerComponent = (
    <View style={styles.headerContainer}>
      <Text style={styles.placeText}>{props.lugar}</Text>
      <View style={styles.headerTempIcon}>
        <MaterialCommunityIcons
          size={70}
          name={weatherConditions[props.weatherType].icon}
          color={"#fff"}
        />
        <Text style={styles.tempText}>{props.temperature}˚C</Text>
      </View>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: weatherConditions[props.weatherType].color }
      ]}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.placeText}>{props.lugar}</Text>
        <View style={styles.headerTempIcon}>
          <MaterialCommunityIcons
            size={70}
            name={weatherConditions[props.weatherType].icon}
            color={"#fff"}
          />
          <Text style={styles.tempText}>{props.temperature}˚C</Text>
          
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodytitle}>{props.weather}</Text>
        <Text style={styles.bodysubtitle}>
          mínima: {props.minTemp} máxima: {props.maxTemp}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  headerTempIcon: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom:60
  },
  tempText: {
    fontSize: 70,
    color: "#fff",
    marginLeft: 20
  },
  placeText: {
    fontSize: 50,
    color: "#fff"
  },
  bodyContainer: {
    flex: 1,

    alignItems: "flex-start", // na esquerda, onde constroi o component
    justifyContent: "flex-end", // colocar no final da tela
    paddingLeft: 20,
    marginBottom: 40
  },
  bodytitle: {
    fontSize: 42,
    color: "#fff"
  },
  bodysubtitle: {
    fontSize: 20,
    color: "#fff"
  }
});

export default Weather;
