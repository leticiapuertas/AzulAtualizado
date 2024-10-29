import theme from "@/theme";
import {Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Input } from "react-native-elements";
import { BottomSheet } from "react-native-elements/dist/bottomSheet/BottomSheet";
import styled, { ThemeProvider } from "styled-components/native"; 
import { Link, router, useNavigation } from "expo-router";
import { useState } from "react";
import { apiConfig } from "@/Api/axios";

export default function Aluguel() {

    const [telefone, setTelefone] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [tempoHoras, setTempoHoras] = useState('');
    const [istelefone, setIstelefone] = useState(false);
    const [isveiculo, setIsveiculo] = useState(false);
    const [istempoHoras, setIstempoHoras] = useState(false);

    const navigation = useNavigation();

    async function handlePress() {
      if (!istelefone && !isveiculo && !istempoHoras && telefone !== '' && veiculo !== '' && tempoHoras !== '') {
      try {
          const response = await apiConfig.post('/aluguel', { 
              veiculo: veiculo,
              telefone: telefone,
              tempo_horas: tempoHoras 
          });

          if (response.status === 204) {
              Alert.alert('Ops...', 'erro ao cadastrar ticker', [
                {
                  text: 'Ok'
                }
              ]);
            } else {
              router.push('/(pagamento)');
          }

      } catch (error) {
          console.error('Erro ao enviar dados:');
      }
  }else {
          Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
        }
  };
  
    return (
      <ThemeProvider theme={theme}>
        <Fundo>
          <Container>
            <CARD>
              <Texto_veiculo>Informações Veículo</Texto_veiculo>
              <StyledTextInput placeholder="Placa" value={veiculo} onChangeText={setVeiculo}/>
              <StyledTextInput placeholder="Tempo de uso" value={tempoHoras} onChangeText={setTempoHoras}/>
              <StyledTextInput placeholder="Telefone" value={telefone} onChangeText={setTelefone}/>
            <Fundo1>
            <Link href='/(inicial)' asChild>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </Link>
            <Link href='/(pagamento)' asChild>
                <TouchableOpacity style={styles.button2} onPress={()=> handlePress()}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </Link>
            </Fundo1>
            </CARD>
          </Container>
        </Fundo>
        </ThemeProvider>
    );
  }
  
  const styles = StyleSheet.create({
    button1: {
        width: 120,
      backgroundColor: '#669bbc', // Azul claro do botão
      padding: 15,
      marginTop: 5,
      marginRight:10,
      borderRadius: 10,
      alignItems: 'center',
    },
    button2: {
        width: 120,
      backgroundColor: '#669bbc', // Azul claro do botão
      padding: 15,
      marginTop: 5,
      marginRight:10,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },

  });
  

  const StyledTextInput = styled.TextInput`
    text-align: center;
    height: 2.5rem;
    width: 15rem ;
    margin: 10px;
    border-width: 3px;
    border-color: #ccc;
    padding-top: 2px;
    border-radius: 5px;
    background-color: #f9f9f9;
  `;

const Container = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.CREME_100};
`

const CARD = styled.View`
    background-color: ${({theme}) => theme.COLORS.BLUE_800};
    border-radius: 1rem;
    width: 30rem;
    height: 30rem;
    align-items: center;
    display: flex;
    justify-content: space-beetwen;    
`
const Texto_veiculo = styled.Text`
   color: ${({theme}) => theme.COLORS.WHITE};
   align-items: center;
   font-size: 30;
    line-height: 90;
    margin-bottom:30;
    margin-top:75;
    `
const Fundo = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
   background-color: ${({theme}) => theme.COLORS.CREME_100};
`
const Fundo1 = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

// const Title = styled.Title`
//     height: 25rem;
//     width: 50rem;
//     border-radius: 1rem
   
// `