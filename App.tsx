import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import Theme from './src/theme/index';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'; 
import { Loader } from '@components/Loader/';
import { Routes } from './src/Routes';

export default function App() {
  const [fontLoader] = useFonts({Roboto_400Regular, Roboto_700Bold});
  
  return (
    <ThemeProvider theme={Theme} >
        <StatusBar style='light' backgroundColor='transparent' translucent />        
        {fontLoader ? <Routes />: <Loader/>}
    </ThemeProvider>
  );
}

