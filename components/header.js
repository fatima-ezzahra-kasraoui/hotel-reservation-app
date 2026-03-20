
import * as React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';

export default function Header(props) {
    const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}> 
 


    <View style={{flex:'0.4'}}></View> 
  
      <View style={{ 
   width: '100%',
   alignItems: 'center',
   flexDirection: 'row',
   justifyContent: 'space-between', marginTop:'30'
    }}>
    <View>
        <Text style={styles.text}>TODAY {currentDate}</Text>
    </View>

    <View style={{borderRadius:10,
    borderBottomLeftRadius:'30'}}>
        <Text style={styles.description}>Book a room in one of Paris's Hotel</Text>
    </View>
    </View> 

      </View>
 
  );
}

const styles = StyleSheet.create({

    text: {
    color: 'black', 
    
    fontWeight: 'bold',
    fontSize:13,
    fontFamily: 'Montserrat',

    alignSelf:'center',justifyContent:'center',alignContent:'center',
    alignItems:'center',

    height: 30,
    width: '100%', 
  },
  container: {
    marginTop:30,
    width: '97%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    paddingBottom:10,
    borderBottomWidth: 2,
  },
    description: { 
    color: 'black', 
    fontWeight: 'bold',  
    alignSelf:'center',justifyContent:'center',alignContent:'center',
    backgroundColor:'yellow',    
    height: 30,
    width: '100%', 
  },


 
});
