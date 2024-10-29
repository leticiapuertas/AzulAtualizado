import Header from "../components/index";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
   
    <Stack>
      <Stack.Screen name="(inicial)/index" options={{header: Header}}/>
      <Stack.Screen name="(Alogin)/index" options={{headerShown:false}} />
      <Stack.Screen name="(veiculos)/index" options={{headerShown:false}}/>
      <Stack.Screen name="(pagamento)/index" options={{headerShown:false}}/>
    </Stack>
  );
}
