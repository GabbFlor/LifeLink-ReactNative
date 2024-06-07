import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import React, { useState } from "react";
import style from '../../style/style';
import { useNavigation } from '@react-navigation/native';

export default function Registro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    // confirmações
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            Alert.alert(
                `Registro realizado com sucesso`,
                `Usuário: ${email}`
            );
          })
          .catch(error => {
            let errorMessage;
        
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
                    errorMessage = 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.';
                    break;
            }
        
        Alert.alert('Erro ao registrar', errorMessage);
          });
    }

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
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    style={style.inputs}
                    placeholder="Confirme o email"
                    value={confirmEmail}
                    onChangeText={text => setConfirmEmail(text)}
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
                <TextInput
                    style={style.inputs}
                    placeholder="Confirme a sua senha"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
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