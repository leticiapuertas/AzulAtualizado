import theme from "@/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components/native"; 

export default function Home(){
    return(
        <ThemeProvider theme={theme}>
        <Container>
            <Banner source={require("../../assets/images/Zona.png")}/>
        </Container>   
        </ThemeProvider>
     

)}

const Container = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.CREME_100};
`

const Banner = styled.Image`
    height: 25rem;
    width: 50rem;
    border-radius: 1rem
   
`