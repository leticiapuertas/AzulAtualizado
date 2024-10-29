import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { Link, router } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { apiConfig } from "../../Api/axios";
import { useState } from 'react';

export function LoginScreen(){

  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [isNomeError, setIsNomeError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  async function login() {
    if (!isPasswordError && !isNomeError && nome !== '' && password !== '') {
      try {
        let res = await apiConfig.post('/login', {
          nome: nome,
          senha: password
        });

        if (res.status === 204) {
          Alert.alert('Ops...', 'Usuário ou senha incorretos!', [
            {
              text: 'Ok'
            }
          ]);
        } else {
          router.push('/(inicial)'); 
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Erro', 'Erro ao logar... :(');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
    }
  }
        
  return (
    <View style={styles.container}>


      <View style={styles.square}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>

          <TextInput 
          style={isNomeError ? estilo.input_container_error : estilo.input_container}
          placeholder="Usuário"
          onChangeText={text => setNome(text)} />

          <TextInput style={isPasswordError ? estilo.input_container_error : estilo.input_container}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity style={styles.button} onPress={()=> login()}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefae0',
  },
  header: {
    height: 160,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#03045e', // Cor de fundo azul escuro
    padding: 20,

  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 40
  },
  helpText: {
    fontSize: 16,
    color: '#fff',
  },
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
    padding: 20,
  },
  image: {
    height: 150,
    width: 230,
  },
  loginContainer: {
    width: 400,
    height: 300,
    backgroundColor: '#03045e', // Azul mais claro
    padding: 40,
    borderRadius: 15,
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#669bbc', // Azul claro do botão
    padding: 15,
    marginTop: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const estilo = StyleSheet.create({
  input_container_error: {
    borderWidth: 0,
    backgroundColor: "#ECECEC",
    height: 50,
    width: 300,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#797976',
    fontSize: 18,
  },
  input_container: {
    backgroundColor: "#ECECEC",
    height: 50,
    width: 300,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#797976',
    fontSize: 18,
  },
});

export default LoginScreen;