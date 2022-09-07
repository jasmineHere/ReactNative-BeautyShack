
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fefffe',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoL:{
      fontWeight:"bold",
      fontSize:50,
      color:"#bd4b52",
      marginBottom:40
    },  
    logoS:{
      fontWeight:"bold",
      fontSize:20,
      color:"#bd4b52",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#e5fcf5",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"black",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#bd4b52",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });
  export default styles