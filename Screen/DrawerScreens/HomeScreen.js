
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

const HomeScreen = () => {
  const [nameString, setNameString] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [errortext, setErrortext] = useState('');

  const defaultAuth = firebase.auth();

  useEffect(() =>{
    if(defaultAuth.currentUser){
      database().ref(defaultAuth.currentUser.uid).once('value').then(snapshot => {
        temp = snapshot.child("name").val()?snapshot.child("name").val():"null";
        setNameString(temp);
      });
    }
  });    

  const bookAppointment = () => {
    console.log("" + "Booking appointment")
    setErrortext('');
    if (!bookingDate) {
      alert('Please fill Date');
      return;
    }
    if (!bookingTime) {
      alert('Please fill Time');
      return;
    }
    const user = firebase.auth().currentUser;
    database()
    .ref("Appointments/" + user.uid)
    .set({
      date: bookingDate,
      time: bookingTime,
      status: 'BOOKED'
    });
  
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            The current user logged in is {nameString}{'\n\n'}
          </Text>
          
        </View>

      </View>

      <View style={styles.SectionStyle}>
      <TextInput
                style={styles.inputStyle}
                onChangeText={(bookingTime) =>
                  setBookingTime(bookingTime)
                }
                placeholder="Enter Time For Booking" //dummy@abc.com
                placeholderTextColor="#000"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
      </View>
      <View style={styles.SectionStyle}>
      <TextInput
                style={styles.inputStyle}
                onChangeText={(bookingDate) =>
                  setBookingDate(bookingDate)
                }
                placeholder="Enter Date For Booking" //dummy@abc.com
                placeholderTextColor="#000"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
      </View>
      <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={bookAppointment}>
              <Text style={styles.buttonTextStyle}>Book an appointment</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;


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