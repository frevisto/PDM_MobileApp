import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";

export default function Oito() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");
  const [resultado, setResultado] = useState("");

  const logar = () => {
    if (senha !== confirma) {
      setResultado("As senhas não coincidem!");
    } else {
      setResultado(`E-mail: ${email} | Senha: ${senha}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
      <p style={{margin:'10px', fontWeight:'bold',fontSize:18}}>CADASTRO</p>
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

        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          value={confirma}
          onChangeText={setConfirma}
          secureTextEntry={true}
          maxLength={8}
        />

      <TouchableOpacity style={styles.btn} onPress={logar}>
        <Text style={styles.btnText}>Logar</Text>
      </TouchableOpacity>

      </View>
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
  box: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    width: "80%",
    maxWidth: 270,
    marginBottom: 15,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginVertical: 5,
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
