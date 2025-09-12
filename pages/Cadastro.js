import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView, Alert } from "react-native";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCadastro = async () => {
    if (!email || !password) {
      Alert.alert("Erro, Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Usuário cadastrado!");
        setEmail("");
        setPassword("");
        fetchUsers();
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar.");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha na conexão com o servidor.");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Usuário removido!");
        fetchUsers();
      } else {
        Alert.alert("Erro", "Não foi possível excluir o usuário.");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha na conexão com o servidor.");
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>CADASTRO</Text>

      <View style={styles.cadastro}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o e-mail"
          placeholderTextColor="#FFF"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a senha"
          placeholderTextColor="#FFF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, { marginTop: 30 }]}>Usuários Cadastrados</Text>

      <View style={styles.cadastro}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.password}>Senha: {item.password}</Text>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.deleteButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#246296"
  },

  v: {
    backgroundColor: "#4682B4",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 20
  },

  cadastro: {
    padding: 20,
    marginBottom: 20
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 5
  },

  input: {
    backgroundColor: "#92C2EA",
    color: "#fff",
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#fff"
  },

  button: {
    width: "60%",
    backgroundColor: "#2871AE",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    alignSelf: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },

  card: {
    backgroundColor: "#2871AE",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },

  email: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  },

  password: {
    fontSize: 14,
    color: "#eee"
  },

  deleteButton: {
    marginTop: 10,
    backgroundColor: "#ADD8E6",
    padding: 10,
    borderRadius: 8,
    alignItems: "center"
  },

  deleteButtonText: {
    color: "#246296",
    fontWeight: "bold"
  }
});