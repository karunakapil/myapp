import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView} from 'react-native';
//import {DrawerNavigator} from 'react-navigation'
//import HomeScreen from './HomeScreen'
//import SettingScreen from './SettingScreen'

 class App extends React.Component {
  render() {
     return (
      <View style={styles.container}>
      <Text>dass</Text>
      </View>
    );
  }
}
// const Myapp = DrawerNavigator({
// 	Home:{	
// 	Screen:HomeScreen
// 	},
// 	Setting:{
// 		Screen:SettingScreen
// 	}
// });
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
