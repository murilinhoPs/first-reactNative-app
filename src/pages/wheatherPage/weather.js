import React from "react";
import { View, Text, ListView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import weatherConditions from "../../utils/weather_info";
import { styles } from "./custom/styles";

const Weather = props => {
  const HeaderComponent = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.tempText}>{props.temperature}˚</Text>

      <View style={styles.headerTempIcon}>
        <Text style={styles.bodytitle}>{props.weather}</Text>
        <Text style={styles.placeText}>{props.lugar}</Text>
      </View>
    </View>
  );

  const BodyComponent = () => (
    <View style={styles.bodyContainer}>
      <View style={styles.bodyRow}>
        <MaterialCommunityIcons
          size={40}
          name={weatherConditions[props.weatherType].icon}
          color={weatherConditions[props.weatherType].color}
        />
        <Text style={styles.bodysubtitle}>
          Hoje: min: {props.minTemp} máx: {props.maxTemp}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container]}>
      <HeaderComponent />
      <BodyComponent />
    </View>
  );
};

export default Weather;
