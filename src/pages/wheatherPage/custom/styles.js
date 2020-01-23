import { StyleSheet } from "react-native";

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
    marginTop: 60
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

export { styles };
