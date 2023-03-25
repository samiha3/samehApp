import React from "react";
import { StyleSheet,Text, View } from "react-native";


const App = ()=>{
  return(
    <View style={styles.container}>
    <View style={{width:100, height:100, backgroundColor:'green',borderWidth:4,borderStyle:'solid',}}></View>
    <Text style={styles.TextStyle}>samiha</Text>
    <Text style={ styles.TextStyle}>25.6.2003</Text>
    
  </View>
  
  
     

  );
}


const styles = StyleSheet.create({
  container:{
    flex:1 , 
    alignItems:'center',
    flexDirection:'row',
  },


  TextStyle:{
    fontSize:30,
    flexDirection:'row',
    color:'black',
  
  }
 
  

  

});



export default App;