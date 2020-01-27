import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 0.6,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: 10,
    marginTop: 50
    // backgroundColor: "rgba(255, 255, 255, 0.2)",
    // width: 150,
    // borderRadius: 10,
    // elevation: 1,
    // shadowRadius: 10
  },
  headerTempIcon: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginTop: 30
  },
  tempText: {
    fontSize: 80,
    color: "#fff",
    marginLeft: 27
  },
  placeText: {
    fontSize: 45,
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

export { styles };
