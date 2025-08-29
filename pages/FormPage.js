import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

export function Form(respostas) {
  const {
    dorMandibula,
    rigidezAoAcordar,
    mastigar,
    movimentarMandibula,
    habitosMandibula,
    outrasAtividades
  } = respostas;

  let pontuacaoDTM = 0;

  if (dorMandibula !== "Não tive dor" && dorMandibula !== "") pontuacaoDTM++;
  if (rigidezAoAcordar === "Sim") pontuacaoDTM++;
  if (mastigar === "Sim") pontuacaoDTM++;
  if (movimentarMandibula === "Sim") pontuacaoDTM++;
  if (habitosMandibula === "Sim") pontuacaoDTM++;
  if (outrasAtividades === "Sim") pontuacaoDTM++;

  if (pontuacaoDTM >= 4) {
    alert("Possível DTM detectada. Procure um profissional.");
  } else {
    alert("Fique tranquilo! Você provavelmente não possui DTM.");
  }
}

export default function FormPage(navigation) {
  const [respostas, setRespostas] = useState({
    ansiedade: "",
    depressao: "",
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

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      <Text style={styles.title}>Questionário de triagem</Text>

      <View style={styles.v} >

        <Text style={styles.question}>Você tem ou já teve ansiedade?</Text>
        <RadioButton.Group
          onValueChange={(v) => handleChange("ansiedade", v)}
          value={respostas.ansiedade}
        >
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>Você tem ou já teve depressão?</Text>
        <RadioButton.Group
          onValueChange={(v) => handleChange("depressao", v)}
          value={respostas.depressao}
        >
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>
          Nos últimos 30 dias, quanto tempo durou qualquer dor que você teve na mandíbula ou região temporal?
        </Text>
        <RadioButton.Group
          onValueChange={(v) => handleChange("dorMandibula", v)}
          value={respostas.dorMandibula}
        >
          <RadioButton.Item label="Não tive dor" value="Não tive dor" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Dor aparecia e desaparecia" value="Dor aparecia e desaparecia" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Dor estava sempre presente" value="Dor estava sempre presente" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>
          Nos últimos 30 dias, você teve dor ou rigidez na sua mandíbula ao acordar?
        </Text>
        <RadioButton.Group
          onValueChange={(v) => handleChange("rigidezAoAcordar", v)}
          value={respostas.rigidezAoAcordar}
        >
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>
          A) Mastigar alimentos duros ou consistentes mudou a dor?
        </Text>
        <RadioButton.Group
          onValueChange={(v) => handleChange("mastigar", v)}
          value={respostas.mastigar}
        >
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>
          B) Abrir a boca ou movimentar a mandíbula mudou a dor?
        </Text>
        <RadioButton.Group
          onValueChange={(v) => handleChange("movimentarMandibula", v)}
          value={respostas.movimentarMandibula}
        >
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>
          C) Hábitos como apertar ou ranger os dentes, ou mascar chiclete mudaram a dor?
        </Text>
        <RadioButton.Group
          onValueChange={(v) => handleChange("habitosMandibula", v)}
          value={respostas.habitosMandibula}
        >
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <Text style={styles.question}>
          D) Outras atividades como falar, beijar ou bocejar mudaram a dor?
        </Text>
        <RadioButton.Group
          onValueChange={(v) => handleChange("outrasAtividades", v)}
          value={respostas.outrasAtividades}
        >
          <RadioButton.Item label="Sim" value="Sim" labelStyle={styles.item} color="#fff" />
          <RadioButton.Item label="Não" value="Não" labelStyle={styles.item} color="#fff" />
        </RadioButton.Group>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Form(respostas)}
        >
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
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
  item: {
    color: "#fff"
  },
  v: {
    backgroundColor: "#4682B4",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginTop: 12
  },
  button: {
    width: "60%",
    backgroundColor: "#2871AE",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    alignSelf: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});