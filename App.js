import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RPGPage from './src/pages/RPGPage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import forgotpasswordPage from './src/pages/forgotpasswordPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='RPGPage' component={RPGPage}/>
        <Stack.Screen name='RegisterPage' component={RegisterPage}/>
        <Stack.Screen name='forgotpasswordPage' component={forgotpasswordPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}