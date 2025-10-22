import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import backlogo from '../../assets/backlogo.png';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function Login() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function traduzirErroSupabase(errorMessage) {
    if (errorMessage.includes('Invalid login credentials')) {
      return 'E-mail ou senha incorretos.';
    }
    if (errorMessage.includes('Email not confirmed')) {
      return 'Você precisa confirmar seu e-mail antes de fazer login.';
    }
    if (errorMessage.includes('Over quota')) {
      return 'Muitas tentativas. Aguarde alguns minutos e tente novamente.';
    }
    return 'Ocorreu um erro ao fazer login. Tente novamente.';
  }

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }

    try {
      await login(email, password);
    } catch (e) {
      const mensagemTraduzida = traduzirErroSupabase(e.message);
      Alert.alert('Erro', mensagemTraduzida);
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
        <Text style={styles.title}>Login</Text>

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
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={22}
              color="#246296"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Não possui cadastro? Cadastre-se já.</Text>
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
    marginBottom: '12%',
    padding: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#92C2EA',
    marginVertical: 10,
    marginBottom: '12%',
    paddingRight: 8,
    overflow: 'hidden',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
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
