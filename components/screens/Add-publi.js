import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import style from '../../style/style';
import { useState, useRef, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';

export default function AddPubli() {
    const [titulo, setTitulo] = useState("");
    const [conteudo, setConteudo] = useState("");
    const tituloRef = useRef(null);
    const conteudoRef = useRef(null);
    const [user, setUser] = useState(null);
    const navigation = useNavigation();
    const [limparInputs, setLimparInputs] = useState(false);
    const linkIMG = "https://firebasestorage.googleapis.com/v0/b/sprint-rede-social.appspot.com/o/images%2Fimg-profile.png?alt=media&token=1551ceb6-ea51-4a0b-bdd3-65ce9ce2e0e0";

    auth.onAuthStateChanged((user) => {setUser(user)});

    const capturaTitulo = (valor) => {
        setTitulo(valor);
    }
    const capturaConteudo = (valor) => {
        setConteudo(valor);
    }

    const submitFormHandle = async (e) => {
        e.preventDefault();
        const now = new Date();
        const userCollectionRef = collection(db, "Postagens");

        if (titulo == "" || conteudo == "") {
            Alert.alert("Erro", `Nenhuma das informações podem estar vazias.`)
        } else {
            try {
                await addDoc(userCollectionRef, {
                    userEmail : user.email,
                    userPhoto : linkIMG,
                    userName : "teste123",
                    userUID : user.uid,
                    title : titulo,
                    content : conteudo,
                    imgURL : null,
                    timestamp: firebase.firestore.Timestamp.fromDate(now),
                });
                navigation.navigate('Home');
                setLimparInputs(true);
            } catch(error) {
                Alert.alert(`${error}`);
            }
        }
    }

    useEffect(() => {
        if (limparInputs) {
            setTitulo("");
            setConteudo("");
            setLimparInputs(false); // Define como false após limpar os inputs
        }
    }, [limparInputs]);

    return (
        <View style={style.addPubli}>
            <Text style={style.TitleAddPubli}>Adicionar publicação</Text>

            <TextInput 
                style={style.inputs}
                onChangeText={capturaTitulo}
                placeholder="Titulo"
                keyboardType="default"
                value={titulo}
                placeholderTextColor="#fff"
            />
            <TextInput 
                style={style.inputConteudo}
                onChangeText={capturaConteudo}
                placeholder="Conteudo"
                keyboardType="default"
                value={conteudo}
                placeholderTextColor="#fff"
            />
            <TouchableOpacity onPress={submitFormHandle} style={style.buttonSubmit}>
                    <Text style={style.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}