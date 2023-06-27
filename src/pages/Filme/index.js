import React, { useState, useEffect } from "react"
import { SafeareaView, View, Text, TouchableOpacity, FlatList } from "react-native"

import database from "../../config/firebaseconfig"
import { FontAwesome } from "@expo/vector-icons"
import styles from "./style"

export default function Filme({ navigation }) {

    const [filme, setFilme] = useState([])

    function deleteFilme(id){
        database.collection("Filme").doc(id).delete()
    }

    useEffect(() => {
        database.collection("Filme").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setFilme(list)
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={filme}
                renderItem={({item}) => {
                    return(
                    <View style={styles.Filmes}>

                        <TouchableOpacity
                            style={styles.deleteFilme}
                            onPress={() => {
                                deleteFilme(item.id)
                            }}
                        >

                            <FontAwesome
                                name="trash"
                                size={23}
                                color="#3168E9"
                            >

                            </FontAwesome>

                        </TouchableOpacity>
                        <Text
                            style={styles.NomeFilme}
                            onPress={() => {
                                navigation.navigate("Editar Filme", {
                                    id:item.id,
                                    nome: item.nome,
                                    duracao: item.duracao
                                })
                            }}
                        >
                            <Text style={styles.negrito}>Nome: </Text>{item.nome}{'\n'}
                            <Text style={styles.negrito}>duração: </Text>{item.duracao} minutos
                        </Text>

                    </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewFilme}
                onPress={() => navigation.navigate("Novo Filme")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>

        </View>
    )
}