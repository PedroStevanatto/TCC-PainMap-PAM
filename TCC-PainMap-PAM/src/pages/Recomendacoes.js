import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import dtmicon from '../../assets/dtmicon.png';
import dicasicon from '../../assets/dicasicon.png';
import proficon from '../../assets/proficon.png';
import formicon from '../../assets/formicon.png';
import { useFocusEffect } from '@react-navigation/native';
import React, { useRef } from 'react';

export default function Recomendacoes({ navigation }) {
  const { profile } = useAuth();
  const status = profile?.status || 'Indefinido';

  const scrollRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  function renderConteudo() {
    if (status === 'Assintomático') {
      return (
        <>
          <Text style={styles.title}>Atenção!</Text>
          <Text style={styles.subtitle}>
            Você não possui sintomas de DTM!{"\n"}
            Porém é possível que você desenvolva a qualquer momento.{"\n"}
            Leia a seguir nossas recomendações.
          </Text>

          <View style={styles.section}>
            <Text style={styles.text}>
              Assim, é importante que você entenda o que é a DTM e os sintomas e problemas
              associados a ela, para que consiga identificar possíveis sintomas que apareçam.
              Para isso, veja o material que separamos sobre a DTM e seus problemas associados:
            </Text>
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
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              Caso você identifique que está sofrendo com alguns sintomas causados pela DTM,
              separamos um conteúdo educativo sobre a DTM que possivelmente pode te ajudar,
              clique aqui para ver este conteúdo:
            </Text>
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
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              Caso a DTM venha a ser um incômodo, e você não saiba o que fazer ou como lidar
              com ela, separamos o contato de alguns profissionais especialistas em DTM, que
              podem te ajudar no seu caso, clique aqui para encontrar profissionais:
            </Text>
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
            </View>
          </View>
        </>
      );
    }

    else if (status === 'Sintomático') {
      return (
        <>
          <Text style={styles.title}>Cuidado!</Text>
          <Text style={styles.subtitle}>
            Você possuí sintomas de DTM! {"\n"}
            Leia a seguir nossas {"\n"}
            recomendações para você.
          </Text>

          <View style={styles.section}>
            <Text style={styles.text}>
              No seu caso, recomendamos que você compreenda e entenda melhor sobre a DTM,
              seus sintomas e os problemas que estão associados a ela, assim, sinta-se a vontade
              para visuzalizar o material que separamos sobre a DTM e  seus problemas associados:
            </Text>
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
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              Tendo reconhecido os sintomas causados pela DTM, caso você sofra com um ou mais sintomas,
              separamos um conteúdo educativo sobre a DTM que possivelmente pode te ajudar, para ver este conteúdo,
              clique aqui:
            </Text>
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
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              Caso a DTM seja um incômodo no seu dia a dia, e você não saiba o que fazer ou como lidar com ela,
              separamos o contato de alguns profissionais especialistas em DTM, que podem te ajudar no seu caso,
              clique aqui para encontrar profissionais:
            </Text>
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
            </View>
          </View>
        </>
      );
    }

    else {
      return (
        <>
          <Text style={styles.title}>Triagem não realizada</Text>
          <Text style={styles.subtitle}>
            Você ainda não completou o questionário de triagem.
          </Text>
          <Text style={styles.text}>
            Caso você tenha dúvidas se pode possuír DTM ou não, clique aqui e responda o questionário de
            triagem e saiba se você é sintomático ou assintomático para a DTM, e receba recomendações para o seu caso:
          </Text>
          <View style={styles.section}>
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
            </View>
          </View>
        </>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.content} ref={scrollRef}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={32} color="#fff" />
        </TouchableOpacity>

        {renderConteudo()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#246296' },
  content: { padding: 20, paddingBottom: 60 },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: "15%"
  },
  section: { marginBottom: 25, alignItems: 'center' },
  text: { fontSize: 17, color: '#fff', textAlign: 'justify', marginBottom: '4%' },
  button: {
    backgroundColor: '#2871AE',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    width: "40%",
    alignItems: "center",
    margin: '2%',
  },
  button: {
    width: 120,
    height: 120,
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
  backButton: {
  },
});
