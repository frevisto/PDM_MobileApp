import { 
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import Constants from "expo-constants";

export default function Cinco() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.top}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => Alert.alert("Boa noite!")}>
            <Image source={require("../assets/adaptive-icon.png")} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <View style={styles.rightop}>
            <TouchableOpacity onPress={() => Alert.alert("Boa noite!")}>
            <Image source={require("../assets/adaptive-icon.png")} style={styles.img} />
          </TouchableOpacity>
          </View>
          <View style={styles.rightbottom}>
            <TouchableOpacity onPress={() => Alert.alert("Boa noite!")}>
              <Image source={require("../assets/adaptive-icon.png")} style={styles.img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => Alert.alert("Boa noite!")}>
          <Image source={require("../assets/adaptive-icon.png")} style={styles.img} />
        </TouchableOpacity>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "aquamarine",
  },
  rightop: {
    backgroundColor: "teal",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  rightbottom: {
    backgroundColor: "skyblue",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "salmon",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    flex: 1,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
