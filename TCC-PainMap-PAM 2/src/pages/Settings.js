import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  const navigation = useNavigation();
  const { profile, updateProfile } = useAuth();
  const [name, setName] = useState(profile?.name || '');
  const [avatar, setAvatar] = useState(profile?.avatar_url || null);

  const defaultAvatars = [
    'https://ahiewysakirqnhircqxl.supabase.co/storage/v1/object/public/default-avatars/blueavatar.png',
    'https://ahiewysakirqnhircqxl.supabase.co/storage/v1/object/public/default-avatars/greenavatar.png',
    'https://ahiewysakirqnhircqxl.supabase.co/storage/v1/object/public/default-avatars/redavatar.png',
  ];

  const handleNameChange = (text) => {
    if (text.length > 25) {
      Alert.alert('Usuário muito longo', 'O nome de usuário deve ter no máximo 25 caracteres.');
      return;
    }
    setName(text);
  };

  const handleSave = async () => {
    if (name.length > 25) return Alert.alert('Usuário muito longo', 'O nome de usuário deve ter no máximo 25 caracteres.');
    try {
      await updateProfile(name, avatar);
      Alert.alert('Sucesso', 'Perfil atualizado!');
    } catch (e) {
      Alert.alert('Erro', e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Configurações</Text>

        <Text style={styles.subtitle}>Escolha um avatar:</Text>
        <View style={styles.avatarContainer}>
          {defaultAvatars.map((img, index) => (
            <TouchableOpacity key={index} onPress={() => setAvatar(img)}>
              <Image
                source={{ uri: img }}
                style={[
                  styles.avatarOption,
                  avatar === img && { borderColor: '#007AFF', borderWidth: 2 },
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.subtitle2}>Altere seu usuário:</Text>
        <TextInput
          value={name}
          onChangeText={handleNameChange}
          placeholder="Nome"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonText}>Salvar alterações</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle2}>Deseja mudar de senha? Clique aqui:</Text>
        <TouchableOpacity
          style={[styles.button, { marginTop: 10 }]}
          onPress={() => navigation.navigate('ChangePassword')}
        >
          <Text style={styles.buttonText}>Alterar senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#246296' },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#fff', marginBottom: '5%', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#fff', marginBottom: '6%', textAlign: 'center' },
  subtitle2: { fontSize: 16, color: '#fff', marginBottom: '3%', textAlign: 'center' },
  avatarContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  avatarOption: { width: 80, height: 80, borderRadius: 40 },
  input: {
    height: "7%",
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#92C2EA',
    marginVertical: 10,
    marginBottom: "6%",
    padding: 10
  },
  button: {
    backgroundColor: '#2871AE',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "center",
    width: '80%',
    height: '8%',
    justifyContent: 'center',
    marginBottom: "10%"
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  backButton: { padding: "3%" }
});
