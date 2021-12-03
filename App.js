import React from 'react';
import MainScreen from './src/screens/MainScreen';
import Sobre from './src/screens/Sobre';

import Intro from './src/screens/Intro';
import Cartas from './src/screens/Cartas';
import CARD01 from './src/screens/CARDS/CARD01';
import CARD19 from './src/screens/CARDS/CARD19';

import {
  createModalNavigator,
  ModalScreenProps,
} from 'react-navigation-native-modal';
import { NavigationContainer } from '@react-navigation/native';

const Modal = createModalNavigator();

export default function App()  {
  return (
    <NavigationContainer>
    <Modal.Navigator>
      <Modal.Screen 
        name="Intro" 
        component={Intro} 
        options={{
            animationType: 'fade'}}/>
      <Modal.Screen 
        name="MainScreen" 
        component={MainScreen}
        options={{
            animationType: 'fade'}} />
       <Modal.Screen 
        name="Cartas" 
        component={Cartas}
        options={{
            animationType: 'fade'}} />
      <Modal.Screen 
        name="Sobre" 
        component={Sobre}
        options={{
            animationType: 'fade'}} />




      <Modal.Screen 
        name="CARD01" 
        component={CARD01}
        options={{
            animationType: 'fade'}} />


      <Modal.Screen 
        name="CARD19 " 
        component={CARD19}
        options={{
            animationType: 'fade'}} />




    </Modal.Navigator>
    
    </NavigationContainer>
  );



  
}


























// const navigator = createStackNavigator({
//   Welcome : MainScreen,
// },
// {
//   initialRouteName: 'Welcome',
//   defaultNavigationOptions : {
//     title:'Welcome',
//   },
//   screenOptions :{
//     headerStyle: { elevation: 0 },
//     cardStyle: { backgroundColor: 'gray' }},
//     animationEnabled: false,
//   }
// );

// export default createAppContainer(navigator);
