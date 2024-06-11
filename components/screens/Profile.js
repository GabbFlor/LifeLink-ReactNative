import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import style from '../../style/style';
import { Ionicons } from '@expo/vector-icons'
import { collection, addDoc, Timestamp, doc, getDoc } from "firebase/firestore";
import { auth, db } from '../../firebase';


export default function Profile() {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();
    auth.onAuthStateChanged((user) => { setUser(user) });
    const [users, setUsers] = useState({ Email: '', FirstLogin: '', Nome: '', UserIMG: '' });

    // reconheçe o UID do usuário logado e define como variavel de ambiente
    let userUIDLoged;
    if(user) {
        userUIDLoged = user.uid;
    }

    // função para deslogar o usuário
    function userSignOut() {
        auth.signOut()
        // navigation.navigate('Login');
    }

    useEffect(() => {
        async function fetchContact() {
            try {
                // recupera os dados do contato pela id recuperada da URL
                const UsersDoc = await getDoc(doc(db, 'Users', userUIDLoged));
                if (UsersDoc.exists()) {
                    // atualiza o estado do contato com os dados recuperados pelo id
                    setUsers(UsersDoc.data());
                } else {
                    Alert.alert("Usuário não encontrado, contate um administrador.")
                }
            } catch (error) {
                // Alert.alert("deu ruim no CATCH" + ` ${error}`)
            }
        }

        fetchContact(); //chama a função
    }, [userUIDLoged]); //executa o efeito sempre que o ID da url muda

    return (
        <View style={style.profilePag}>
            <View style={style.profileHeader}>
                <View style={style.profileIcons}>
                    <TouchableOpacity>
                        <Ionicons name='menu' color={"#f7d547"} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name='settings-outline' color={"#f7d547"} size={30} />
                    </TouchableOpacity>
                </View>

                <View style={style.profileInformations}>
                    <View style={style.imgProfileDiv}>
                        <Image source={{ uri: `${users.UserIMG}` }} style={style.imgProfile} />
                    </View>
                    <View style={style.profileStrings}>
                        <Text style={style.profileTitle}>{users.Nome}</Text>
                        <View style={style.informations}>
                            <Text style={style.informationsStrings}>4 publicações</Text>
                            <Text style={style.informationsStrings}>300 seguidores</Text>
                            <Text style={style.informationsStrings}>350 seguindo</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={style.contentProfile}>
                <Text style={style.profilePublis}>Sem publicações...</Text>
            </View>
        </View>
    )
}