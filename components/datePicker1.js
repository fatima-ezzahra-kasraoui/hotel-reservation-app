import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker1(props) {
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const formatDate = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <View style={{ marginTop: 20, padding: 10 }}>
      <Text>Begin reservation desired date at:</Text>
      <TouchableOpacity
        style={{ borderWidth: 1, padding: 10, marginTop: 5, borderRadius: 5 }}
        onPress={() => setShowStart(true)}>
        <Text>{props.Dbt ? formatDate(props.Dbt) : 'Select start date'}</Text>
      </TouchableOpacity>
      {showStart && (
        <DateTimePicker
          value={props.Dbt || new Date()}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowStart(false);
            if (date) {
              props.setdateDbt(formatDate(date));
              props.setDbt(date);
            }
          }}
        />
      )}

      <Text style={{ marginTop: 10 }}>End reservation desired date at:</Text>
      <TouchableOpacity
        style={{ borderWidth: 1, padding: 10, marginTop: 5, borderRadius: 5 }}
        onPress={() => setShowEnd(true)}>
        <Text>{props.Fn ? formatDate(props.Fn) : 'Select end date'}</Text>
      </TouchableOpacity>
      {showEnd && (
        <DateTimePicker
          value={props.Fn || new Date()}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowEnd(false);
            if (date) {
              props.setdateFn(formatDate(date));
              props.setFn(date);
            }
          }}
        />
      )}
    </View>
  );
}