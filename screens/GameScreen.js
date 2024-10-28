import { View, Text, StyleSheet } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponents Guess</Text>

      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
