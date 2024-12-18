import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";
export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    /* borderWidth: Platform.OS === "android" ? 2 : 0, */
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
