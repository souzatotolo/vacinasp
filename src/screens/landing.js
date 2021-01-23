import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function Landing() {
  const navigation = useNavigation();

  function handleNavigateToHome(){
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/distance2.png')}/>
      <StatusBar style="auto" />
      <View style={styles.textArea}>

        <Text style={styles.text1}>Use Mascara - </Text>
        <Text style={styles.text2}>Salve Vidas </Text>
        <Text style={styles.text3}>App desenvolvido por github.com/souzatotolo que retorna o numero de vacinados no Estado de SP</Text>
         
        <TouchableOpacity style={styles.btn} onPress={handleNavigateToHome}>
          <Text style={styles.btnText}> > </Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
   
  },
  img: {
    width: 400,
    height: 400,
 
  },
  textArea: {
    flex: 1,
    backgroundColor: '#EFF9F9',
    alignItems: 'center',
    justifyContent: 'center',
    // borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    padding: 70,
  },
  text1:{
    marginTop: 30,
    fontSize: 40,

  },
  text2:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  text3:{
    fontSize: 20,
    marginTop: 20,
  },
  btn:{
    height: 80,
    width: 80,
    backgroundColor: '#EFF9F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 40,
    borderWidth: 2,
    borderColor: '#91D2CB',
    marginBottom: 10,
       elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.1,
          shadowRadius: 5,
    // left: 140,
  },
  btnText:{
    fontSize: 25,
    fontWeight: 'bold',
  }
});
