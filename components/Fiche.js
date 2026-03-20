import React, { useState, useEffect,useCallback} from 'react';
import { Text, View, StyleSheet, Image , Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';;
 

export default function Fiche(props) {

var setC= (x)=>{
  props.roomChoice(x)
}


  const [RChoice, setRChoice] = useState();

  return (
    <Pressable style={styles.container}  onPress={() => setC(props.el)} >
    
      <Image source={{ uri:props.el.img }} style={styles.image} /> 

      <View style={{ 
   width: '100%',
   alignItems: 'center',
   flexDirection: 'row',
   justifyContent: 'space-between', marginTop:'30'
    }}>
      <Text style={styles.text}>{props.el.room} room</Text>
      <Text style={{
    paddingLeft: 25,
    marginTop: 10,
    backgroundColor:'yellow'}}>{props.el.value} neighborhood</Text>
    </View>

    <View style={{flex:'0.4'}}></View> 
      <View style={{ 
   width: '100%',
   alignItems: 'center',
   flexDirection: 'row',
   justifyContent: 'space-between', marginTop:'30'
    }}>
        <Text style={styles.text}>Prix : {props.el.price} euro</Text>
        <Text style={styles.description}>Stars: 
        
          { 
      // Loop 5 times and render an Ionicons component in each iteration
      Array.from({length: props.el.rating}).map((_, index) => (
  <Ionicons key={index} name="star" size={20} color="gold" />
))
    }
    { Array.from({length: parseInt(5-props.el.rating)}).map((_, index) => (
  <Ionicons key={index} name="star" size={20} color="black" />
))
      }

      </Text>
    </View> 

    </Pressable>
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
    height: 310,
    marginTop: 25,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    height: 200,
    width: '100%',
  }
});
