import React, { useState, useEffect,useCallback} from 'react';
import StreetSelection from "./components/StreetSelection";
import Header from "./components/header";
import DatePicker1 from "./components/datePicker1";
import data from "./data"; 
import moment from "moment";
import Fiche from "./components/Fiche";
import Header2 from "./components/header2";
import Header3 from "./components/header3"
import LastInfo from "./components/LastInfo"

import {
  Text,ScrollView,
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

import Constants from 'expo-constants';

export default function App() { 
var [street, SelectedStreet] =React.useState("");
var [room, selectedRoom]=React.useState();



const currentDate = new Date();
const [Dbt, setDebut] =React.useState();
const [Fn, setFin] =React.useState();

var [filteredData, setFilteredData] =React.useState([]);
 
  useEffect(() => {   
    if(street=="All street"){     
        setFilteredData(data.filter(item => item.value != street));
    }
    else{
        setFilteredData(data.filter(item => item.value == street));
    }
  }, [street]);


var [MsgPopup, setMsgPopup] =React.useState(''); 
var [MsgPopup1, setMsgPopup1] =React.useState(''); 

const [ShowDateDb, setShowDateDb] =React.useState(1);
const [ShowDateFn, setShowDateFn] =React.useState(1);
var [ShowStr, setShowStr] =React.useState(1);

var [Show, setShow] =React.useState(1);
var [ShowConfirm, setShowConfirm] =React.useState(1);


var [TotalPrice, setTotalPrice] =React.useState();

var [d1, setd1] =React.useState();
var [m1, setm1] =React.useState();
var [y1, sety1] =React.useState();

var [d2, setd2] =React.useState();
var [m2, setm2] =React.useState();
var [y2, sety2] =React.useState();


const roomChoice = (x) =>{
  selectedRoom(x)
  setShowConfirm(3);
  setTotalPrice(parseInt(duree)*parseInt(x.price))
}

const retour =()=>{
  setShowConfirm(1);
}

const retour2 =()=>{
  setShowConfirm(2);
}

const setDbt = (message) => {
    setDebut(message);
    setShowDateDb(2);
  };

const setFn = (message) => {
    setFin(message);
    setShowDateFn(2);
  };

const setShowConf=(msg)=>{
  setShowConfirm(msg)
}
const [dateDbt, setdateDebut] =React.useState("");
const [dateFin, setdateFin] =React.useState("");
var [duree, setDuree] =React.useState();


  const [showPopup, setShowPopup] = React.useState(false);
  var [showPopup1, setshowPopup1] = React.useState(false);


const setdateDbt = (message) => {
    setdateDebut(message);
  };

const setdateFn = (message) => {
     setdateFin(message);
  };

const chooseStreet1 = (message) => {
    SelectedStreet(message);
      setShowStr(2);
  };
  
const onPress=()=>{
if(ShowDateDb==2 &&  ShowDateFn==2 && ShowStr==2){
//  setShowConfirm(2)
}
}

const updatedData = data.reduce((acc, current) => {
  const x = acc.find(item => item.label === current.label);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);

const handlePress1= ()=>{
 setMsgPopup1('your demand have been saved, thank for choosing us') 
 setshowPopup1(true)
}

const handlePress2=()=>{  
setshowPopup1(false)
retour()
SelectedStreet()
setDebut()
setFin()
setShowDateDb(1)
setShowStr(1)
setShowDateFn(1)
} 

  const handlePress = () => { 
    setShowPopup(true)
    var x='';
    if(ShowDateDb==1){
      x=x+'date debut,'
    }
    if(ShowDateFn==1){
      x=x+' date fin'
    }
        if(ShowDateDb==1 || ShowDateFn==1){
          x=x+' de réservation'
          if(ShowStr==1){
            x=x+','
          }
        }
    if(ShowStr==1){
      x=x+' le quartier'
    }
    if(ShowStr==1 || ShowDateFn==1 ||ShowStr==1){
     
      x=x+' non saisie(s)'
      setMsgPopup(x)
    }




if(ShowDateDb==2 &&  ShowDateFn==2 && ShowStr==2){


var firstHyphenIndex1 = dateDbt.indexOf("-");
var lastHyphenIndex1 = dateDbt.lastIndexOf("-");

var year1 = parseInt(dateDbt.substring(lastHyphenIndex1 + 1));
var day1 = parseInt(dateDbt.substring(0, firstHyphenIndex1));
var month1 = parseInt(dateDbt.substring(firstHyphenIndex1 + 1, lastHyphenIndex1));
setd1(parseInt(day1));
sety1(parseInt(year1));
setm1(parseInt(month1));

 
var firstHyphenIndex2 = dateFin.indexOf("-");
var lastHyphenIndex2 = dateFin.lastIndexOf("-");
var year2 = parseInt(dateFin.substring(lastHyphenIndex2 + 1));
var day2 = parseInt(dateFin.substring(0, firstHyphenIndex2));
var month2 = parseInt(dateFin.substring(firstHyphenIndex2 + 1, lastHyphenIndex2));
setd2(parseInt(day2));
sety2(parseInt(year2));
setm2(parseInt(month2));

var date1 = new Date(parseInt(year1), parseInt(month1) - 1, parseInt(day1)); // Note: month is zero-based in Date constructor
var date2 = new Date(parseInt(year2), parseInt(month2) - 1, parseInt(day2));
var diffInMs = date2 - date1;
var diffInDays = Math.round(diffInMs / 86400000);
setDuree(diffInDays)

if(parseInt(year2)>parseInt(year1)) { 
//  setMsgPopup(`ok ${diffInDays}` )
  setMsgPopup('')
  setShowConfirm(2)


} 

if(parseInt(year2)===parseInt(year1)) { 
  if(parseInt(month2)<parseInt(month1)) { 
  setMsgPopup(`date de debut de réservation peut pas etre inferieur à celle de la fin de  réservation (mois)`)
  } 
  else if(parseInt(month2)>parseInt(month1)){
//  setMsgPopup(`ok ${diffInDays}` )
  setMsgPopup('')
  setShowConfirm(2)
  }   

  else if(parseInt(month2)===parseInt(month1)){
      if(parseInt(day1)<parseInt(day2)){
//        setMsgPopup(`ok ${diffInDays}`)
        setMsgPopup('')
        setShowConfirm(2)
      }
      else {
  setMsgPopup(`annee de debut de réservation peut pas etre inferieur à celle de la fin de réservation (jour)` )
      }
  }

} 
if(parseInt(year2)<parseInt(year1)) { 
  setMsgPopup(`annee de debut de réservation peut pas etre inferieur à celle de la fin de réservation (annee)` )
} 
    
  }
}





return (
  (ShowConfirm == 1 ) ? (
    <View style={styles.container}>
      <View>
        <Header/>
      </View>

       <View style={{height: 150, width:'100%', marginTop:10}}>
  <ImageBackground style={{ height:'100%', width:'100%'}}    
    source={{
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGormkeOy01dOvGkEGmkhWggpg3frLawaZQ&usqp=CAU",
    }}
  /> 
</View>

 <View >
  <DatePicker1 setdateDbt={setdateDbt} setdateFn={setdateFn} setFn={setFn} setDbt={setDbt}
  Dbt={Dbt} Fn={Fn}/> 
</View>  
    

        <StreetSelection style={{ marginBottom:'20', backgroundColor:'red'}} options={updatedData} chooseStreet1={chooseStreet1}  street={street}  />    
 
<View style={{ height: 60 }} />
      <View style={{ flex:'1', alignItems:'center',
          justifyContent: 'center', width:"80%"}}>
  
        <Pressable
        onPress={handlePress}
        style={{
          height: 40,
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center', 
          backgroundColor: '#00BFFF',
          marginTop:'20',

          borderRadius:'20',
        }}>
        <Text>Pass to room choice</Text>
      </Pressable>

      </View>

        {showPopup ? (
        
            <View>
              <Text>{MsgPopup}</Text>
            </View>
          
        ) : null}
    </View> 
  ) : (ShowConfirm == 2 ) ? (

    <View style={styles.container2}>
      <View>
        <Header2 duree={duree}  street={street} dateDbt={dateDbt} dateFin={dateFin}  retour={retour} />
      </View>

       <ScrollView>
{filteredData.map((el) => (
             <Fiche duree={duree} el={el} street={street} setShowConf={setShowConf} roomChoice={roomChoice}
  />
        ))}
    </ScrollView>


    </View> 
  )  : (ShowConfirm == 3 ) ? (

    <View style={styles.container2}>
      <View>
        <Header3 showPopup1={showPopup1} retour2={retour2} duree={duree}  street={street} dateDbt={dateDbt} dateFin={dateFin}  />
      </View>
             <Fiche duree={duree} el={room}   street={street}  setShowConf={setShowConf} />
             <LastInfo TotalPrice={TotalPrice} duree={duree}  />
             

        <View style={{ flex:'1', alignItems:'center',alignSelf:'center',
          justifyContent: 'center', width:"80%"}}>


{showPopup1 &&
        <Pressable 
        onPress={handlePress2}
        style={{
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center', 
          color: 'white', 
          fontWeight: 'bold', 
          alignSelf:'center',
          backgroundColor: '#00BFFF',
          borderRadius:'20',
          marginTop:'20'
        }}>
        <Text>return to home page</Text>
      </Pressable>
}

{!(showPopup1) &&
        <Pressable 
        onPress={handlePress1}
        style={{
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center', 
          color: 'white', 
          fontWeight: 'bold', 
          alignSelf:'center',
          backgroundColor: '#00BFFF',
          borderRadius:'20',
          marginTop:'20'
        }}>
        <Text>finilize booking</Text>
      </Pressable>
}
        {showPopup1 ? (
        
            <View>
              <Text>{MsgPopup1}</Text>
            </View>
          
        ) : null}

      </View>

    </View> 
  ) : null
);


}

const styles = StyleSheet.create({

    container2: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingBottom: 25
  },
     today: {
   fontWeight: 'bold',
   fontSize:28,
   fontFamily: 'Montserrat', 
   color: '#131313'
 },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingTop: 20, paddingBottom: 20,width:'100%'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
 
