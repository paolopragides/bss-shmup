import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import HomeScreen from './screens/HomeScreen';
import LobbyScreen from './screens/LobbyScreen';
// import GameScreen from './games/tictactoe/screens/GameScreen';
// import GameScreen from './games/pong/screens/GameScreen';
import GameScreen from './games/plane/screens/GameScreen';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { io } from "socket.io-client";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { socket } from "./service/socket";

const Stack = createStackNavigator();


class App extends Component {

  constructor(props) {
    super(props);
  }

  navigateScreen(targetScreen) {
    this.props.navigation.navigate(targetScreen);
  }

  render() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen 
          name="Lobby"
          component={LobbyScreen}
          options={{ 
            title: "Welcome",
            users: "users"
          }}
        />      
        <Stack.Screen 
          name="MainGame"
          component={GameScreen}
          options={{ 
            title: "Welcome",
            users: "users"
          }}
        />         
      </Stack.Navigator>
    </NavigationContainer>
    );    
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
