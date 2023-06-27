import React, {useState} from "react"
import {View,Text,TextInput,TouchableOpacity} from "react-native"

import database from "../../config/firebaseconfig"
import styles from "./style"

export default function Newfilme(){

    const[nome, setNome] = useState(null)
    const[duracao, setDuracao] = useState(null)

    function addTask(){
        database.collection("Filme").add({
            nome: nome,
            duracao: duracao
        })
        navigation.navigate("Filme")

    }



    return(
        <View style={styles.container}>
            <Text style={styles.label}> Nome </Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Homem Aranha"
                onChangeText={setNome}
                value={nome}
            />

            <Text style={styles.label}> Duração (minutos) </Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 100"
                onChangeText={setDuracao}
                value={duracao}
            />

            <TouchableOpacity 
                style={styles.buttonNewFilme}
                onPress={()=> {
                        addTask()
                    }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}