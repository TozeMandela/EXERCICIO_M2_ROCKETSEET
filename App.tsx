import { StatusBar } from 'expo-status-bar';
import { Groups } from '@screens/Groups/Groups';
import { ThemeProvider } from 'styled-components';
import {theme as Theme} from './src/theme/index';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'; 
import { Loader } from '@components/Loader/';

export default function App() {
  const [fontLoader] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={Theme} >
        {fontLoader ? <Groups />: <Loader/>}
        <StatusBar style="dark" />        
    </ThemeProvider>
  );
}

