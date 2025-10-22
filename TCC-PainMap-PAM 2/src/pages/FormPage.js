import React, { useState, useRef } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { RadioButton } from "react-native-paper";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function FormPage({ navigation }) {
  const { profile, updateStatus } = useAuth();
  const scrollRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  const [respostas, setRespostas] = useState({
    dorMandibula: "",
    rigidezAoAcordar: "",
    mastigar: "",
    movimentarMandibula: "",
    habitosMandibula: "",
    outrasAtividades: ""
  });

  function handleChange(campo, valor) {
    setRespostas({ ...respostas, [campo]: valor });
  }

  const handleSubmit = async () => {
    const camposVazios = Object.entries(respostas).filter(([_, valor]) => !valor);

    if (camposVazios.length > 0) {
      Alert.alert(
        "Responda todas as perguntas",
        "Por favor, responda todas as questões antes de enviar o formulário."
      );
      return;
    }

    let pontuacaoDTM = 0;

    if (respostas.dorMandibula === "Dor aparecia e desaparecia") pontuacaoDTM += 1;
    if (respostas.dorMandibula === "Dor estava sempre presente") pontuacaoDTM += 2;
    if (respostas.rigidezAoAcordar === "Sim") pontuacaoDTM++;
    if (respostas.mastigar === "Sim") pontuacaoDTM++;
    if (respostas.movimentarMandibula === "Sim") pontuacaoDTM++;
    if (respostas.habitosMandibula === "Sim") pontuacaoDTM++;
    if (respostas.outrasAtividades === "Sim") pontuacaoDTM++;

    let status = pontuacaoDTM >= 3 ? "Sintomático" : "Assintomático";

    try {
      await updateStatus(status);
      Alert.alert("Sucesso", "Triagem enviada!");
      navigation.navigate("Recomendacoes");
    } catch (e) {
      Alert.alert("Erro", e.message);
    }
  };


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }} ref={scrollRef}>
      <Header />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Questionário de triagem</Text>

      <View style={styles.formContainer}>
        <Text style={styles.question}>Nos últimos 30 dias, quanto tempo durou qualquer dor que você teve na mandíbula ou região temporal?</Text>
        <RadioButton.Group onValueChange={v => handleChange("dorMandibula", v)} value={respostas.dorMandibula}>
          <RadioButton.Item label="Não tive dor" value="Não tive dor" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Dor aparecia e desaparecia" value="Dor aparecia e desaparecia" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Dor estava sempre presente" value="Dor estava sempre presente" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>Nos últimos 30 dias, você teve dor ou rigidez na sua mandíbula ao acordar?</Text>
        <RadioButton.Group onValueChange={v => handleChange("rigidezAoAcordar", v)} value={respostas.rigidezAoAcordar}>
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>A) Mastigar alimentos duros ou consistentes mudou a dor?</Text>
        <RadioButton.Group onValueChange={v => handleChange("mastigar", v)} value={respostas.mastigar}>
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>B) Abrir a boca ou movimentar a mandíbula mudou a dor?</Text>
        <RadioButton.Group onValueChange={v => handleChange("movimentarMandibula", v)} value={respostas.movimentarMandibula}>
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>C) Hábitos como apertar ou ranger os dentes, ou mascar chiclete mudaram a dor?</Text>
        <RadioButton.Group onValueChange={v => handleChange("habitosMandibula", v)} value={respostas.habitosMandibula}>
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>D) Outras atividades como falar, beijar ou bocejar mudaram a dor?</Text>
        <RadioButton.Group onValueChange={v => handleChange("outrasAtividades", v)} value={respostas.outrasAtividades}>
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>ENVIAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#246296" },
  title: { fontSize: 22, fontWeight: "bold", color: "#fff", textAlign: "center", marginVertical: 20 },
  formContainer: { padding: 20, borderRadius: 20, borderWidth: 1, borderColor: "#fff", marginHorizontal: 10 },
  question: { fontSize: 16, fontWeight: "600", color: "#fff", marginTop: 12, textAlign: 'justify' },
  item: { color: "#fff" },
  button: {
    width: "60%",
    backgroundColor: "#2871AE",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    alignSelf: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  backButton: {
    padding: "3%"
  }
});
