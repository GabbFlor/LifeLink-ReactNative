import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { auth, db } from '../../firebase';
import React, { useState } from "react";
import style from '../../style/style';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, Timestamp, doc, setDoc } from 'firebase/firestore';
import firebase from 'firebase/compat/app';

export default function Registro() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const linkIMG = "https://firebasestorage.googleapis.com/v0/b/sprint-rede-social.appspot.com/o/images%2Fimg-profile.png?alt=media&token=1551ceb6-ea51-4a0b-bdd3-65ce9ce2e0e0";

    const handleRegister = async (e) => {
        e.preventDefault();
        const now = new Date();
    
        try {
            // Cria o usuário com email e senha
            const userCredentials = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredentials.user;
    
            // Alerta de sucesso no registro
            // Alert.alert(
            //     `Registro realizado com sucesso`,
            //     `Usuário: ${user.email}`
            // );
    
            const userDocRef = doc(db, "Users", user.uid);

            // Salva os dados do usuário na coleção "Users"
            await setDoc(userDocRef, {
                Email: user.email,
                FirstLogin: Timestamp.fromDate(now),
                Nome: userName,
                userIMG: linkIMG
            });
        } catch (error) {
            let errorMessage;
    
            // Erros ao fazer login
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'Este email já está em uso. Por favor, use outro email.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Formato de email inválido. Por favor, insira um email válido.';
                    break;
                case 'auth/operation-not-allowed':
                    errorMessage = 'O registro de usuários está desativado. Por favor, entre em contato com o suporte.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'A senha é muito curta. Por favor, insira uma senha com pelo menos 6 caracteres.';
                    break;
                default:
                    errorMessage = `Ocorreu um erro inesperado. Por favor, tente novamente mais tarde. erro: ${error}`;
                    break;
            }
    
            // Alerta de erro
            Alert.alert('Erro ao registrar', errorMessage);
        }
    };
    

    function linkPress() {
        navigation.navigate('Login');
    }

    return(
        <ScrollView style={style.form}>
            <View style={style.divlogo}>
                <Image source={require('../../assets/logo.png')} style={style.Logo} />
                <Text style={style.tituloSreen}>LifeLink</Text>
            </View>

            <View style={style.inputsForm}>
                <Text style={style.tituloForm}>Registrar-se</Text>

                <TextInput
                    style={style.inputs}
                    placeholder="Nome de usuário"
                    value={userName}
                    onChangeText={text => setUserName(text)}
                    placeholderTextColor="#fff"
                />

                <TextInput
                    style={style.inputs}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholderTextColor="#fff"
                />
                
                <TextInput
                    style={style.inputs}
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    placeholderTextColor="#fff"
                />

                <TouchableOpacity onPress={handleRegister} style={style.buttonSubmit}>
                    <Text style={style.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={style.link}>Já possui registro? <Text style={style.sublinhado} onPress={linkPress}>Ir para página de login</Text></Text>
            </View>

    </ScrollView>
    )
}