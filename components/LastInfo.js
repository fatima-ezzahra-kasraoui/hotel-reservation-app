import React, { useState, useEffect,useCallback} from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
 

export default function LastInfo(props) {
 

 
  return (
    <View style={styles.container} >
    
      <View style={{ 
   width: '100%',
   alignItems: 'center',
   flexDirection: 'row',
   justifyContent: 'space-between', marginTop:'30'
    }}>
      <Text style={styles.text}>Total price for {props.duree} nights</Text>
      <Text style={{
    paddingLeft: 25,
    marginTop: 10,
    backgroundColor:'yellow'}}>{props.TotalPrice} euros</Text>
    </View>

    <View style={{flex:'0.4'}}></View> 

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black', 
    fontWeight: 'bold',
    paddingLeft: 25,
    paddingTop: 10,
  },
  description: {
    paddingLeft: 25,
    marginTop: 10,
  },
  container: {
    paddingBottom: 20,
    height: 50,
    marginTop: 25,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

});
