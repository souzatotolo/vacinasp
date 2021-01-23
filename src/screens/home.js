import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import firebase from '../connections/firebaseConnection';
export default function Landing() {

  const [number,setNumber] = useState()
  const [loading,setLoading] = useState(false);
  const timestamp = new Date().toISOString();
  

 //useEffect - para salvar o numero 

 async function handleChangeNumber(){
     await 
      setLoading(true)
      firebase.database().ref('vacinados').on('value', (snapshot)=>{
      setNumber(snapshot.val());
      setLoading(false);
      alert (`Atualizado em: ${timestamp}`)
     })
     
     ;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <Text style={styles.text1}>Vacinados:</Text>
        {loading ?
          (
            <ActivityIndicator
              color='#000'
              size={60}
            />
          ) : (
                    <Text style={styles.text2}>{number}</Text>

          )
      }
        <Image style={styles.img2} source={require('../assets/seringa.png')}/>

        <Image style={styles.img} source={require('../assets/vaccine.jpg')}/>

         
        <TouchableOpacity style={styles.btn} onPress={handleChangeNumber} >
          <Text style={styles.btnText}> Atualizar </Text>
        </TouchableOpacity>
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1:{
    marginTop: 20,
    fontSize: 35,
    marginBottom: 10,
  },
  text2:{
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 5,
    color: '#2f2c3e',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  btn:{
    height: 80,
    width: 180,
    backgroundColor: '#EFF9F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#C299EB',

    elevation: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,

  },
  btnText:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  img: {
    width: 400,
    height: 400,
  },
  img2:{
    width: 380,
    height: 50,
    bottom: 60,
    
  }
});
