import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

import {
    Um,
    Dois,
    Tres,
    Quatro,
    Cinco,
    Seis,
    Sete,
    Oito,
    Nove,
    Dez
} from "./lista1";

const components: Record<string, React.FC> = {
  Um,
  Dois,
  Tres,
  Quatro,
  Cinco,
  Seis,
  Sete,
  Oito,
  Nove,
  Dez,
};

export default function Onze() {
    const [selected, setSelected] = useState<string | null>(null);

  if (selected) {
    const SelectedComponent = components[selected];
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SelectedComponent />
      </SafeAreaView>
    );
  }
  return (
    <View style={{flex:1}}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 80 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  scroll: { alignItems: "center" },
  btn: {
    backgroundColor: "crimson",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    width: 200,
    alignItems: "center",
  },
  btnLabel: { color: "#fff", fontWeight: "bold" },
  header: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "crimson",
    padding: 12,
  },
  backBtn: { marginRight: 10 },
  backText: { color: "#fff", fontWeight: "bold" },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});