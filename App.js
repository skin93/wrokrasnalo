import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainStackScreen from './screens/stacks/MainStackScreen'
import ModalScreen from './screens/ModalScreen'
import WelcomeStackScreen from './screens/stacks/WelcomeStackScreen'

const Stack = createStackNavigator()

const App = () => {
  const [isLogged, setIsLogged] = React.useState(false)
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#f4511e' />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        {isLogged ? (
          <Stack.Screen name='Main' component={MainStackScreen} />
        ) : (
          <Stack.Screen name='Welcome' component={WelcomeStackScreen} />
        )}
        <Stack.Screen name='MyModal' component={ModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
