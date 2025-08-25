import { View, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";

export default function Um() {
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    flexDirection: "column",
  },
  top: { flex: 0.5, backgroundColor: "crimson" },
  bottom: { flex: 0.5, backgroundColor: "salmon" },
});

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.top} />
      <View style={styles.bottom} />
    </View>
  );
}

