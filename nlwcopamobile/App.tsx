import { NativeBaseProvider, StatusBar } from "native-base";
import { THEME } from "./src/styles/theme";
import { Routes } from "./src/routes";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Signin } from "./src/screens/Signin";
import { AuthContextProvider } from "./src/context/AuthContext";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  // const [fontsLoaded] = useFonts([
  //   Roboto_400Regular,
  //   Roboto_500Medium,
  //   Roboto_700Bold,
  // ]);

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
