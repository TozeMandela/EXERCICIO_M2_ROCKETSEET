import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Groups } from '@screens/Groups/Groups';
import { NewGroup } from '@screens/NEWGROUP/NewGroup';
import { NewTurma } from '@screens/TURMA/NewTurma';

const {Navigator, Screen} = createNativeStackNavigator();


export  function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen 
            name='Group'
            component={Groups}
        />

        <Screen 
            name='New'
            component={NewGroup}
        /> 

        <Screen 
            name='Team'
            component={NewTurma}
        /> 

    </Navigator>
  )
}
