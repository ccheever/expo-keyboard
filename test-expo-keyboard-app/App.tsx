import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useOnKeydown, useKeydownEvent } from "./keyboard";

export default function App() {
  useKeydownEvent((e) => {
    console.log("keydown", e);
  });

  useOnKeydown("x", (e) => {
    console.log("x marks the spot", e);
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 60,
  },
});
