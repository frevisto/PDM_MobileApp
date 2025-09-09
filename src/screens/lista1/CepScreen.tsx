import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { getCep } from "../../services/viacep";
import { useCep } from "../../hooks/useCep";

const CepScreen: React.FC = () => {
  const [cep, setCep] = useState("");
  const { cepData, setCepData } = useCep();

  const handleBuscar = async () => {
    try {
      const data = await getCep(cep);
      if(!data.cep) {
        setCepData(null);
        alert("CEP não encontrado");
        return;
      }
      setCepData(data);
    } catch (error) {
      alert("Erro ao consultar o CEP");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text>

      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        maxLength={8}
      />

      <TouchableOpacity style={styles.button} onPress={handleBuscar}>
        <Text style={styles.buttonText}>Obter</Text>
      </TouchableOpacity>

      {cepData && (
        <View style={styles.result}>
          <Text>CEP: {cepData.cep}</Text>
          <Text>Logradouro: {cepData.logradouro}</Text>
          <Text>Bairro: {cepData.bairro}</Text>
          <Text>Cidade: {cepData.localidade} - {cepData.uf}</Text>
          <Text>DDD: {cepData.ddd}</Text>
        </View>
      )}
    </View>
  );
};

export default CepScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
  },
});
