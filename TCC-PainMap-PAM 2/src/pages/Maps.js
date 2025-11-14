import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Keyboard, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import Constants from "expo-constants";
import { supabase } from "../services/supabase";

export default function Maps() {
  const navigation = useNavigation();
  const GOOGLE_MAPS_API_KEY = Constants.expoConfig.extra.googleMapsApiKey; //Pega a ApiKey do app.config.js
  const [region, setRegion] = useState({ //Define a região inicial do mapa, que nesse caso é São Paulo
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });
  const [search, setSearch] = useState("");
  const [searchMarker, setSearchMarker] = useState(null);
  const [dentists, setDentists] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDentists = async () => {
    setLoading(true);
    const { data, error } = await supabase //consulta o supabase para buscar os dados dos dentistas
      .from("dentistas")
      .select("id, nome, latitude, longitude");
    if (error) { 
      console.error("Erro ao buscar dentistas:", error); 
      Alert.alert("Erro", "Não foi possível carregar os profissionais.");
    } else {
      setDentists(data); //armazena os dados dos dentistas no estado
    }
    setLoading(false);
  };

  useEffect(() => { //realiza o fetch dos dentistas ao carregar a página
    fetchDentists();
  }, []);

  const handleSearch = async () => {
    if (!search.trim()) { 
      Alert.alert("Digite um endereço para buscar.");
      return;
    }
    try {
      const response = await fetch( //requisição a API geocoding do Google Maps
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          search
        )}&key=${GOOGLE_MAPS_API_KEY}` //insere a ApiKey para autorizar
      );
      const data = await response.json();
      if (data.status === "OK") {
        const location = data.results[0].geometry.location; //pega as coordenadas do local encontrado
        const newRegion = { //atualiza a região do mapa para o local que foi buscado
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };
        setRegion(newRegion); //move o mapa para o novo local
        setSearchMarker({ //cria um marcador no local buscado
          latitude: location.lat,
          longitude: location.lng,
          title: data.results[0].formatted_address,
        });
        Keyboard.dismiss();
      } else {
        Alert.alert("Local não encontrado.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro ao buscar localização.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={32} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Veja aqui a localização dos profissionais</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um endereço..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={22} color="#246296" />
        </TouchableOpacity>
      </View>
      <View style={styles.mapContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
        ) : (
          <MapView style={styles.map} region={region}>
            {dentists.map((dentist) => ( //percorre a lista de dentistas
              <Marker //cria um marcador para cada dentista no mapa com suas coordenadas
                key={dentist.id}
                coordinate={{
                  latitude: dentist.latitude,
                  longitude: dentist.longitude,
                }}
                title={dentist.nome} //define o titulo como o nome do dentista
                description="Consultório odontológico"
              />
            ))}
            {searchMarker && ( //se existir um marcador de busca coloca ele no mapa
              <Marker
                coordinate={searchMarker} 
                title={searchMarker.title}
                pinColor="blue"
              />
            )}
          </MapView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#246296",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
    textAlign: "center",
  },
  backButton: {
    padding: "3%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  searchButton: {
    padding: 10,
    borderRadius: 8,
    marginLeft: 5,
  },
  mapContainer: {
    flex: 1,
    overflow: "hidden",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#ffffffff",
  },
  map: {
    flex: 1,
  },
});
