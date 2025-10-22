import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, } from 'react-native';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ChangePassword() {
  const navigation = useNavigation();
  const { updateProfile } = useAuth();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChangePassword = async () => {
    if (!password) return Alert.alert('Erro', 'Digite a nova senha');
    if (password !== confirmPassword) return Alert.alert('Erro', 'As senhas não coincidem');

    function traduzirErroSupabase(errorMessage) {
      if (errorMessage.includes('Password should be at least')) {
        return 'A senha deve ter pelo menos 6 caracteres.';
      }
      if (errorMessage.includes('Invalid login credentials')) {
        return 'Não foi possível alterar a senha: credenciais inválidas.';
      }
      if (errorMessage.includes('Over quota')) {
        return 'Muitas tentativas. Aguarde alguns minutos e tente novamente.';
      }
      return 'Ocorreu um erro ao alterar a senha. Tente novamente.';
    }

    try {
      await updateProfile(undefined, undefined, password);
      Alert.alert('Sucesso', 'Senha alterada!');
      setPassword('');
      setConfirmPassword('');
    } catch (e) {
      const mensagemTraduzida = traduzirErroSupabase(e.message);
      Alert.alert('Erro', mensagemTraduzida);
    }
  };


  return (
    <View style={styles.container}>
      <Header />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Alterar Senha</Text>

        <Text style={styles.label}>Nova senha</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Digite a nova senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.passwordInput}
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

        <Text style={styles.label}>Confirmar senha</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Confirme sua senha"
            secureTextEntry={!showConfirm}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity
            onPress={() => setShowConfirm(!showConfirm)}
            style={styles.iconPressable}
            activeOpacity={0.7}
          >
            <Ionicons
              name={showConfirm ? 'eye-off' : 'eye'}
              size={22}
              color="#246296"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleChangePassword} style={styles.button}>
          <Text style={styles.buttonText}>Salvar senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#246296' },
  backButton: {
    padding: '3%',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '10%',
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 18,
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
    overflow: 'hidden',
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
    alignSelf: 'center',
    width: '80%',
    height: '8%',
    justifyContent: 'center',
    marginTop: '7%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
