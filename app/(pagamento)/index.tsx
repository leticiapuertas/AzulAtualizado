import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from "styled-components/native"; 
import { apiConfig } from '../../Api/axios';
import { View, Text } from 'react-native';

type Comprovante ={
    id: number,
    veiculo: string,
    telefone: string,
    tempo_horas: string
}

export default function Comprovante(){

    const [dados, setDados] = useState<Comprovante[]>([]);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                const response = await apiConfig.get('/vizualizar');
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchDados();
    }, []);

    return (
      
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor:'#fefae0'}} >
            <View style={{backgroundColor: '#03045e' , padding: 70, borderRadius:10, marginBottom: 10, width: 450, height: 450  }}>
                {dados.length === 0 ? (
                    <Text>Carregando dados...</Text>
                ) : (
                    dados.map((item, index) => (
                 
                        <View key={index} style={{ marginBottom: 40, width: 300,  height: 300,backgroundColor: "#d9d9d9", padding: 10, borderRadius:10}}>
                            <Text style={{fontSize: 25, marginTop: 25, lineHeight: 40, alignItems: 'center',color: '#000814'}}>Veículo: {item.veiculo}</Text>
                            <Text style={{fontSize: 25, marginTop: 25, lineHeight: 40, alignItems: 'center', color: '#000814', }}>Telefone: {item.telefone}</Text>
                            <Text style={{fontSize: 25, marginTop: 25, lineHeight: 40, alignItems: 'center', color: '#000814'}}>Tempo em Horas: {item.tempo_horas}</Text>
                        </View>
                        
                    ))
                )}
            </View>
        </View>
       
    );
}



const Container = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.WHITE};

`

const Banner = styled.Image`
    height: 25rem;
    width: 50rem;
    border-radius: 1rem

      
`


