import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    label:{
        width:"90%",
        marginTop:20,
        fontSize:16,
        marginLeft:20,
        color:"#3168E9"
    },
    input:{
        width:"90%",
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor:"#3168E9",
        marginLeft:"auto",
        marginRight:"auto"
    },
    buttonNewFilme:{
        width:60,
        height: 60,
        position:"absolute",
        bottom:30,
        left:20,
        backgroundColor:"#3168E9",
        borderRadius: 50,
        justifyContent:"center",
        alignItems:"center"
    },
    iconButton:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"bold"
    }
    
})

export default styles