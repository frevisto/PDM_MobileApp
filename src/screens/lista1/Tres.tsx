import { View, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";

export default function Tres() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.top}>
        <View style={styles.left} />
        <View style={styles.right} >
          <View style={styles.rightop}/>
          <View style={styles.rightbottom}/>
        </View>
      </View>
      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    flexDirection: "column",
  },
  top: {
    flex: 0.5,
    backgroundColor: "crimson",
    flexDirection: "row",
  },
  left: {
    flex: 1,
    backgroundColor: "lime",
  },
  right: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "aquamarine",
  },
  rightop:{
    backgroundColor:'teal',
    flex: 0.5,

  },
  rightbottom:{
    backgroundColor:'skyblue',
    flex:0.5
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "salmon",
  },
});
