import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        paddingTop:20
    },
    Filmes:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5
    },
    deleteFilme:{
        justifyContent:"center",
        paddingLeft:15
    },
    NomeFilme:{
        width:"75%",
        alignContent:"flex-start",
        backgroundColor:"#f5f5f5cf",
        padding:12,
        paddingHorizontal:20,
        borderRadius:50,
        marginBottom:5,
        marginRight:15,
        color:"#282b2db5"
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
        fontSize:25,
        fontWeight:"bold"
    },
    negrito: {
        fontWeight: 'bold'
    }
    
})

export default styles