import { Text, View, StyleSheet, Pressable } from "react-native";

export default function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("pressed");
  }
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
