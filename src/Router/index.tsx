import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login, Config, History} from '../screens';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Login} />
      <Stack.Screen name="Profile" component={Config} />
      <Stack.Screen name="Settings" component={History} />
    </Stack.Navigator>
  );
};

export {Router};
