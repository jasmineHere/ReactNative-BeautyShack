// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const defaultAuth = firebase.auth();

  
  
useEffect(() =>{
  setTimeout(() =>{
    if(defaultAuth.currentUser){
      console.log(defaultAuth.currentUser.uid);
      navigation.replace('DrawerNavigationRoutes');
    }else{
      navigation.replace('Auth');
    }
  }, 2000);

});
 
  return (
    <View style={styles.container}>
      <Image
        source={require('./Image/logo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#f3fffe"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363d46',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});