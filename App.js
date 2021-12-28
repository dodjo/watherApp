import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Alert,Button } from 'react-native';

export default class extends React.Component {
  componentDidMount() {
    // Alert.alert('Привет','Это просто сообщение')
  }

  onPressButton(){
    Alert.alert('Привет','Это просто сообщение')
    styles.container.backgroundColor='red';
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Text style={styles.text}>hello</Text>*/}
        <Button title="Кнопка" onPress={this.onPressButton} color='red'/>
        <StatusBar style="auto" />
      </View>
    );
  }

}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'red',
    width: '50%'
  }
});
