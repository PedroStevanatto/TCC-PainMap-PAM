import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import { useAuth } from '../context/AuthContext';
import formicon from '../../assets/formicon.png';
import dtmicon from '../../assets/dtmicon.png';
import dicasicon from '../../assets/dicasicon.png';
import proficon from '../../assets/proficon.png';
import infoicon from '../../assets/infoicon.png';
import recomendicon from '../../assets/recomendicon.png';

export default function Home({ navigation }) {
  const { profile } = useAuth();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>Bem Vindo ao PainMap {profile?.name || 'Usuário'}!</Text>
        <Text style={styles.subtitle}>O App rastreador de dor por DTM</Text>

        <View style={styles.grid}>
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("DtmSintomas")}
            >
              <Image
                source={dtmicon}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>
              O que é a DTM?{"\n"}e os problemas associados.
            </Text>
          </View>

          <View style={styles.item}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Dicas")}
            >
              <Image
                source={dicasicon}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>
              Prevenção e educação sobre dtm.
            </Text>
          </View>

          <View style={styles.item}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("FormPage")}
            >
              <Image
                source={formicon}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>
              Descubra se{"\n"}possui a DTM.
            </Text>
          </View>

          <View style={styles.item}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Especialistas")}
            >
              <Image
                source={proficon}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>
              Entre em contato{"\n"}com profissionais.
            </Text>
          </View>

          <View style={styles.item}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Recomendacoes")}
            >
              <Image
                source={recomendicon}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>
              Recomendações{"\n"}para seu caso.
            </Text>
          </View>

          <View style={styles.item}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Info")}
            >
              <Image
                source={infoicon}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>
              informações{"\n"}do projeto.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#246296",
  },
  content: {
    alignItems: "center",
    flex: 1,
    paddingBottom: 20,
    paddingTop: "5%"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: '2%',
    marginBottom: '2%',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  item: {
    width: "40%",
    alignItems: "center",
    margin: '2%',
  },
  button: {
    width: 140,
    height: 140,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: '60%',
    height: '60%',
    tintColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    marginTop: 8,
  },
});
