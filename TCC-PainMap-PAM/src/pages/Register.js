import React, { useState } from 'react';
import { View, Text, Dimensions, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import backlogo from '../../assets/backlogo.png';

const { width, height } = Dimensions.get('window');

export default function Register() {
  const navigation = useNavigation();
  const { register } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = async () => {
    if (password !== confirm)
      return Alert.alert("Erro", "As senhas não coincidem!");

    setLoading(true);

    function traduzirErroSupabase(errorMessage) {
      if (errorMessage.includes('Email already registered')) {
        return 'Este e-mail já está cadastrado.';
      }
      if (errorMessage.includes('Invalid email')) {
        return 'E-mail inválido.';
      }
      if (errorMessage.includes('Password should be at least')) {
        return 'A senha deve ter pelo menos 6 caracteres.';
      }
      if (errorMessage.includes('Over quota')) {
        return 'Muitas tentativas. Aguarde alguns minutos e tente novamente.';
      }
      return 'Ocorreu um erro ao criar a conta. Tente novamente.';
    }

    try {
      await register(email, password, username);
      Alert.alert(
        "Sucesso",
        "Conta criada! Confirme seu e-mail para ativar sua conta."
      );
      navigation.navigate("Login");
    } catch (e) {
      const mensagemTraduzida = traduzirErroSupabase(e.message);
      Alert.alert("Erro", mensagemTraduzida);
    } finally {
      setLoading(false);
    }
  };


  return (
    <ImageBackground
      source={backlogo}
      style={styles.background}
      imageStyle={{
        position: 'absolute',
        width: width * 0.9,
        height: height * 0.9,
        top: height * 0.55 - (height * 0.9) / 2,
        left: width * 0.5 - (width * 0.9) / 2,
        opacity: 0.2,
      }}
      resizeMode="contain"
    >
      <View style={styles.container}>
        <Text style={styles.pmtitle}>PainMap</Text>
        <Text style={styles.title}>Cadastro</Text>

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          placeholder="Digite seu nome de usuário"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          autoCapitalize="words"
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconPressable}
            activeOpacity={0.7}
          >
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color="#246296" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirmar senha</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Confirme sua senha"
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry={!showConfirm}
            style={styles.passwordInput}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => setShowConfirm(!showConfirm)}
            style={styles.iconPressable}
            activeOpacity={0.7}
          >
            <Ionicons name={showConfirm ? 'eye-off' : 'eye'} size={22} color="#246296" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.6 }]}
          onPress={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Cadastrar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Já tem uma conta? Faça login já.</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#246296',
  },
  container: {
    width: '90%',
    flex: 1,
    paddingTop: '20%',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: '8%',
  },
  pmtitle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#92C2EA',
    marginVertical: 10,
    marginBottom: '8%',
    paddingHorizontal: 12
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#92C2EA',
    marginVertical: 10,
    marginBottom: '8%',
    paddingRight: 8,
    overflow: 'hidden'
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
    color: '#000',
  },
  iconPressable: {
    width: 44,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2871AE',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
    width: '60%',
    height: '8%',
    justifyContent: 'center',
    marginBottom: '2%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});