import * as React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';

export default function Header3(props) {
    const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}> 
 
     <Text style={styles.date}>
       book a hotel room for <Text  style={{backgroundColor:'yellow'}}> {props.duree} days</Text>
       
      </Text>
      <View style={styles.row}>
      <Text style={styles.today}>

{ !(props.showPopup1) &&      
              <Pressable 
        onPress={props.retour2}
        style={{
          height: 30,
          width: '120%',  
          backgroundColor: '#00BFFF', alignSelf:'center',justifyContent:'center', alignContent:'center', borderRadius:'10'
        }}>


        <Text style={{alignSelf:'center',justifyContent:'center', alignContent:'center'}}>Back</Text>
      </Pressable>
}

      </Text>      
     <Text style={{backgroundColor:'yellow', border:1}}> bewteen {props.dateDbt}, {props.dateFin}</Text> 
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    borderRadius: 8,
    backgroundColor: '#ecf0f1',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  date: {
    color: 'black',fontSize:15
  },

 today: {
   fontWeight: 'bold',
   fontSize:28,
   fontFamily: 'Montserrat',
   color: '#131313'
 },
 row: {
   width: '100%',
   alignItems: 'center',
   flexDirection: 'row',
   justifyContent: 'space-between'
 }
 
});
