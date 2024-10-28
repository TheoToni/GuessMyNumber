import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Guess My Number</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
