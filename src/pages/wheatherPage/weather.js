import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import weatherConditions from "../../utils/weather_info";
import { styles } from "./custom/styles";

const Weather = props => {
  const HeaderComponent = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.tempText}>{props.temperature}˚</Text>
      <View style={styles.headerTempIcon}>
        <MaterialCommunityIcons
          size={50}
          name={weatherConditions[props.weatherType].icon}
          color={weatherConditions[props.weatherType].color}
        />

        <Text style={styles.placeText}>{props.lugar}</Text>
      </View>
    </View>
  );

  const BodyComponent = () => (
    <View style={styles.bodyContainer}>
      <Text style={styles.bodytitle}>{props.weather}</Text>
      <Text style={styles.bodysubtitle}>
        mínima: {props.minTemp} máxima: {props.maxTemp}
      </Text>
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
