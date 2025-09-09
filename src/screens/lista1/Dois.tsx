import { View, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";

export default function Dois() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* metade de cima (crimson contendo 2 filhos lado a lado) */}
      <View style={styles.top}>
        <View style={styles.left} />
        <View style={styles.right} />
      </View>
      {/* metade de baixo (salmon) */}
      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    flexDirection: "column", // divide em cima/baixo
  },
  top: {
    flex: 0.5,
    backgroundColor: "crimson",
    flexDirection: "row", // divide os filhos em colunas
  },
  left: {
    flex: 1, // cada filho ocupa metade
    backgroundColor: "lime",
  },
  right: {
    flex: 1,
    backgroundColor: "aquamarine",
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "salmon",
  },
});
