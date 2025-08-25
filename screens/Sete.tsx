import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Sete() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resultado, setResultado] = useState("");

  const logar = () => {
    setResultado(`E-mail: ${email} | Senha: ${senha}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        maxLength={8}
      />

      <TouchableOpacity style={styles.btn} onPress={logar}>
        <Text style={styles.btnText}>Logar</Text>
      </TouchableOpacity>

      {resultado !== "" && <Text style={styles.resultado}>{resultado}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "crimson",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
  },
});
