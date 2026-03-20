import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

export default function StreetSelection(props) {
  const [AllStreetsOpen, setAllStreetsOpen] = useState(false);
  const [StreetChoice, setStreetChoice] = useState(null);
  const [AllStreets, setAllStreets] = useState(props.options);

  const chooseStreet = (val) => {
    setStreetChoice(val);
    props.chooseStreet1(val);
  };

  return (
    <View style={{ width: '90%', marginTop: 30 }}>
      <Text>Check desired street : {props.street}</Text>
      <View style={styles.dropdownAllStreets}>
        <DropDownPicker
          style={styles.dropdown}
          open={AllStreetsOpen}
          value={StreetChoice}
          items={AllStreets}
          setOpen={setAllStreetsOpen}
          setValue={chooseStreet}
          placeholder="Select Street"
          placeholderStyle={styles.placeholderStyles}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownAllStreets: {
    marginVertical: 10,
    width: '100%', flex: 1, height: '100%',
  },
  dropdown: {
    backgroundColor: '#fafafa', height: '100%'
  },
  placeholderStyles: {
    color: '#A9A9A9', width: '100%'
  },
});