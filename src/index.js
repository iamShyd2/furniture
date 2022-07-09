import React from 'react';
import { 
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';

const Stack = createNativeStackNavigator();

export const AppContext = React.createContext();

const Routes = () => {

  const appContext = {
    
  }

  return (
    <AppContext.Provider value={appContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}

const App = () => {

  return(
    <Routes />
  );

};

export default App;
