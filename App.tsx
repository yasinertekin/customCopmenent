import React from "react";
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Card from './components/Card';

function App(){
  return( 
    <SafeAreaView style={styles.container}>  
      <Card title="Esmanur Ertekin" text ="Tebdili mekanda ferahlık vardır"/>
      <Card title="Fatma Ertekin" text ="Ben Adamı Naparım"/>
      <Card title="Yasin Ertekin" text ="Bilemiyorum"/>
    </SafeAreaView>
    )

  }

  const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'#e0e0e0'
    },


  })
export default App;