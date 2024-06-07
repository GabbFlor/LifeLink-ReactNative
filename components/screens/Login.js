import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import React, { useState } from "react";
import style from '../../style/style';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Profile from './Profile';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                Alert.alert(
                    'Login realizado com sucesso',
                    `Bem-vindo(a), ${user.email}`
                );

                const userInfo = {
                    email: user.email,
                    uid: user.uid,
                };

                navigation.navigate('Home', { userInfo });
            })
            .catch(error => {
                let errorMessage;

                switch (error.code) {
                    case 'auth/user-not-found':
                        errorMessage = 'Usuário não encontrado. Verifique seu email e tente novamente.';
                        break;
                    case 'auth/wrong-password':
                        errorMessage = 'Senha incorreta. Verifique sua senha e tente novamente.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Email incorreto. Verifique seu email e tente novamente.';
                        break;
                    default:
                        errorMessage = `Ocorreu um erro inesperado. ${error}`;
                        break;
                }

                Alert.alert('Erro ao registrar', errorMessage);
            });
    }

    function linkPress() {
        navigation.navigate('Registro');
    }

    return (
        <ScrollView style={style.form}>
            {/* <StatusBar /> */}
            <View style={style.divlogo}>
                <Image source={require('../../assets/logo.png')} style={style.Logo} />
                <Text style={style.tituloSreen}>LifeLink</Text>
            </View>

            <View style={style.inputsFormLogin}>
                <Text style={style.tituloForm}>Conectar-se</Text>

                <TextInput
                    style={style.inputs}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    style={style.inputs}
                    placeholder="Senha"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    placeholderTextColor="#fff"
                />
                <TouchableOpacity onPress={handleLogin} style={style.buttonSubmit}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>

            <View>
                <Text style={style.link}>Não possui cadastro? <Text style={style.sublinhado} onPress={linkPress}>Ir para página de registro</Text></Text>
            </View>

        </ScrollView>
    )
}
