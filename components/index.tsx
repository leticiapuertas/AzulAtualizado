import theme from "@/theme";
import { Image, Text, View, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { Icon } from 'react-native-elements';
import styled, { ThemeProvider } from "styled-components/native"; 

export default function Header(){
    return(
        <ThemeProvider theme={theme}>
        <Container>
                <Image style={{height: 170, width: 250}} source={require('../../Tentativa/assets/images/Logo.png')}/>

            <View style={{flexDirection: 'row', gap: 30  }}>

            <Link href='/(veiculos)'>
                <TouchableOpacity >
                <Title> Veículos </Title>   
                </TouchableOpacity> 
            </Link>


            <Link href='/(pagamento)'>
                <TouchableOpacity>
                <Title> Comprovante </Title>
                </TouchableOpacity>
            </Link>
            
            <Link href='/(inicial)'>
                <TouchableOpacity>
                <Title> Ajuda </Title>
                </TouchableOpacity>
            </Link>
            
            </View>
            <Link href='/(login)'>
            
            <Icon
                name='account-circle'
                type='material'
                color='#00b4d8'
                size={70}
            />
                
            </Link>

        </Container>   
        </ThemeProvider>
    )
}

const Container = styled.View`
    height: 10rem;
    flex-direction: row;    
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.COLORS.BLUE_800};
`

const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    color: ${({theme}) => theme.COLORS.WHITE};
`

