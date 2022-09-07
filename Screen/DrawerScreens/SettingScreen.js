import React, {useState, useEffect} from 'react';
import {  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
SafeAreaView,} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


const SettingsScreen = () => {

  const defaultAuth = firebase.auth();

  const [status, setNameString] = useState('');
  const [date, setBookingDate] = useState('');
  const [time, setBookingTime] = useState('');

  useEffect(() =>{
    console.log("Use effect has been fired")
    if(defaultAuth.currentUser){
      database().ref('Appointments/'+defaultAuth.currentUser.uid).once('value').then(snapshot => {
        date += snapshot.child("date").val()?snapshot.child("date").val():"null";
        time += snapshot.child("time").val()?snapshot.child("time").val():"null";
        status += snapshot.child("status").val()?snapshot.child("status").val():"null";

        setNameString(status);
        setBookingDate(date);
        setBookingTime(time);
      });
    }
    
  }, [defaultAuth.currentUser]);  

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16, border: 1, borderRadius : 25}}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
              You have an appointment on {'\n'}
              Date : {date}{'\n'}
              Time : {time}{'\n'}
            {status}
          </Text>

      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;


const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#000',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});