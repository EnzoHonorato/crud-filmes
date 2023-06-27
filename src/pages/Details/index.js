import React, { useState } from "react"
import {View,Text, TextInput, TouchableOpacity} from "react-native"

import database from "../../config/firebaseconfig"

import styles from "./style"

export default function Details({navigation, route}){
    const [nomeEdit, setNomeEdit] = useState(route.params.nome)
    const [duracaoEdit, setDuracaoEdit] = useState(route.params.duracao)

    const idFilme = route.params.id

    function editFilme(nome, duracao, id){
        database.collection("Filme").doc(id).update({
            nome: nomeEdit,
            duracao: duracaoEdit
        })

        navigation.navigate("Filme")
    }

    return(
        <View style={styles.container}>
        <Text style={styles.label}> Nome </Text>
        <TextInput
            style={styles.input}
            placeholder="Ex: Homem Aranha"

            onChangeText={setNomeEdit}
            value={nomeEdit}
        />

        <Text style={styles.label}> Duração (minutos) </Text>
        <TextInput
            style={styles.input}
            placeholder="Ex: 100"

            onChangeText={setDuracaoEdit}
            value={duracaoEdit}
        />

        <TouchableOpacity 
            style={styles.buttonNewFilme}
            onPress={()=> {
                    editFilme(nomeEdit, duracaoEdit, idFilme)
                }}
        >
            <Text style={styles.iconButton}>Salvar</Text>
        </TouchableOpacity>
    </View>
    )
}