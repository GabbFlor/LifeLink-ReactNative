import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import style from '../../style/style';
import { Ionicons } from '@expo/vector-icons'
import { collection, addDoc, Timestamp, doc, getDoc } from "firebase/firestore";
import { auth, db } from '../../firebase';


export default function Profile() {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();
    const [profile, setProfile] = useState({ Email: '', FirstLogin: '', Nome: '', UserIMG: '' });

    auth.onAuthStateChanged((user) => { setUser(user) });

    function userSignOut() {
        auth.signOut()
        // navigation.navigate('Login');
    }

    let userUID, userEmail;

    if (user) {
        userUID = user.uid;
        userEmail = user.email;
    }


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
                        <Image source={require('../../assets/img-profile.png')} style={style.imgProfile} />
                    </View>
                    <View style={style.profileStrings}>
                        <Text style={style.profileTitle}>Nome do perfil</Text>
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


    // if (user) {
    //     return (
    //         <View>
    //             <Text>email: {user.email}</Text>
    //             <Text>uid: {user.uid}</Text>
    //             <Button title="Logout" onPress={userSignOut} />
    //         </View>
    //     ) 
    // } else {
    //     return (
    //         <View>
    //             <Text>Sem usuário autenticado</Text>
    //         </View>
    //     ) 
    // }
}